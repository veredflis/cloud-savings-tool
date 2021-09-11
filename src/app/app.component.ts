import { Component } from '@angular/core';
import * as data from '../assets/data/ri-data.json';
import { DataConvertorService } from './Services/data-convertor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ri-tool-ui';
  convertedData:Array<any>=[];

  constructor(private _dataConvertor:DataConvertorService){
   let convertedData =  this._dataConvertor.convertInputObject(data);
   console.log(convertedData);
  }


}
