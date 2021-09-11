import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { UsageType } from '../DTOs/eusage-type';
import { IComputeInput } from '../DTOs/icompute-input';
import { IComputeItemInput } from '../DTOs/icompute-item-input';
import { IReservationItemInput } from '../DTOs/ireservations-item-input';

@Injectable({
  providedIn: 'root'
})
export class DataConvertorService {

  constructor() { }

  convertInputObject(data : any):IComputeInput{
    let convertedData:IComputeInput={savingPlansDetails:null,totalSpotUsage:null};
    let dataInput: Array<any> = data;

    Array.from(dataInput).forEach((item ,index) => {
      switch(this.getUsageType(item.SKU)){
        case UsageType.Box:{
          if(!convertedData.totalComputeUsage) convertedData.totalComputeUsage=[];

          let riInput:any ={};
          riInput.usage=[];
          let keys : string[] =  Object.keys(item);
          keys.forEach(key =>{
            if(key.toString().indexOf("-") === -1 && key.toString().indexOf(":") === -1){
               riInput[key.toLowerCase()] = item[key];
              }
            else{
              riInput.usage.push({date:key, usage: item[key]})
            }
          })
          convertedData.totalComputeUsage.push(riInput as IComputeItemInput);
          return;
        }
        case UsageType.Heavy:{
          if((item.Unit !== "[N/A]")){
              console.log("Heavy");
              if(!convertedData.reservationsDetails) convertedData.reservationsDetails=[];

              let riInput:any ={};
              riInput.reservations=[];
              let keys : string[] =  Object.keys(item);
              keys.forEach(key =>{
                if(key.toString().indexOf("-") === -1 && key.toString().indexOf(":") === -1){
                  riInput[key.toLowerCase()] = item[key];
                  }
                else{
                  console.log(item.Unit == "[N/A]");
                  if(!!item[key])
                  riInput.reservations = this.getReservationsPerHour(item[key]);
                }
              })
              convertedData.reservationsDetails.push(riInput);
            }
          return;
        }
        case UsageType.Spot:{
          console.log("Spot");
          return;
        }
      }
      })
      return convertedData;
  }

  private getUsageType(sku:string):UsageType{
    if(sku.indexOf(UsageType.Box)!==-1){
      return UsageType.Box;
    }
    if(sku.indexOf(UsageType.Heavy)!==-1){
      return UsageType.Heavy;
    }
    if(sku.indexOf(UsageType.Spot)!==-1){
      return UsageType.Spot;
    }
    return UsageType.Box;

  }

  private getReservationsPerHour(reservationsPerMonth:number){
    var now = new Date();
    let daysPerMonth = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
    console.log(daysPerMonth);
    return reservationsPerMonth/daysPerMonth/24;

  }
}
