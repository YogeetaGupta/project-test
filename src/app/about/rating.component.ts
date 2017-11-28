import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'rate',
    template:`
    <fieldset class="rating">
    <input type="radio" [name]="inpustName" value="5" [checked]="rating===5" />
    <label title="Rocks!" (click)='onClick(5)'>5 stars</label>

    <input type="radio" [name]="inpustName" value="4" [checked]="rating===4" />
    <label title="Pretty good" (click)='onClick(4)'>4 stars</label>

    <input type="radio" [name]="inpustName" value="3" [checked]="rating===3" />
    <label title="Meh" (click)='onClick(3)'>3 stars</label>

    <input type="radio" [name]="inpustName" value="2" [checked]="rating===2" />
    <label title="Kinda bad" (click)='onClick(2)'>2 stars</label>

    <input type="radio" [name]="inpustName" value="1" [checked]="rating===1" />
    <label title="Sucks big time" (click)='onClick(1)'>1 star</label>
</fieldset>
    `,
    styles: [`
    
.rating {
    width:120px;
}

.rating:not(:checked) > input {
    position:absolute;
    top:-9999px;
    clip:rect(0,0,0,0);
}

.rating:not(:checked) > label {
    float:right;
    width:1em;
    padding:0.1em;
    overflow:hidden;
    white-space:nowrap;
    cursor:pointer;
    font-size:120%;
    line-height:1.2;
    color:#ddd;
}

.rating:not(:checked) > label:before {
    content: '★ ';
}

.rating > input:checked ~ label {
    color: #f70;
}

.rating:not(:checked) > label:hover,
.rating:not(:checked) > label:hover ~ label {
    color: gold;
}


.rating > input:checked ~ label:hover,
.rating > input:checked ~ label:hover ~ label,
.rating > label:hover ~ input:checked ~ label {
    color: #ea0;
}
    `]
})
export class RatingComponent {
    @Input() rating: number;
    @Input() itemId: number;
    @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();

    inpustName:string;
    ngOnInit() {
      this.inpustName = this.itemId + '_rating';
    }
    onClick(rating: number): void {
        this.rating = rating;
        this.ratingClick.emit({
            itemId: this.itemId,
            rating: rating
        });
    }
}