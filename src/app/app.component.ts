import { Component } from '@angular/core';
import * as data from '../assets/data/ri-data.json';
import { IComputeInput } from './DTOs/icompute-input';
import { DataConvertorService } from './Services/data-convertor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ri-tool-ui';
  convertedData: IComputeInput | null=null;

  constructor(private _dataConvertor:DataConvertorService){
   this.convertedData =  this._dataConvertor.convertInputObject(data);
   console.log("this.convertedData",this.convertedData);
  }


}
