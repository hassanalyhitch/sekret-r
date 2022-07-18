import { Pipe, PipeTransform } from '@angular/core';
import { Injectable } from '@angular/core';

@Pipe({
  name: 'shortenFilename'
})
export class ShortenFilenamePipe implements PipeTransform {

  transform(longName: string){
    let shortName:string;
        if(longName.length > 22){
          shortName = longName.substring(0, 22)+"...";
        } else {
          shortName = longName;
        }
    return shortName;
  }

}