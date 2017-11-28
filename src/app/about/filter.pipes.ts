import { Pipe, PipeTransform } from '@angular/core';
import {SearchProduct} from './../model/filter'

@Pipe({
    name: 'FilterPipe',
})
export class FilterPipe implements PipeTransform {
    // transform(items: SearchProduct[], searchText: string): SearchProduct[] {
    //   searchText = searchText ? searchText.toLocaleLowerCase() : null;

    //   return searchText ? items.filter((items:SearchProduct) => items.name.indexOf(searchText)!==-1):items;
    //    }


       transform(items: SearchProduct[], searchText: string): SearchProduct[] {
        if(!items) return [];
        if(!searchText) return items;
    searchText = searchText.toLowerCase();
    return searchText ? items.filter( (items:SearchProduct) => items.name.toLowerCase().includes(searchText)):items;
}
}
