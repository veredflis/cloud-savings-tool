import { Component, Input, OnInit } from '@angular/core';
import { IComputeInput } from 'src/app/DTOs/icompute-input';

@Component({
  selector: 'app-ri-view',
  templateUrl: './ri-view.component.html',
  styleUrls: ['./ri-view.component.scss']
})
export class RiViewComponent implements OnInit {

  @Input() graphData: IComputeInput | null =null; 
  constructor() {
  }

  ngOnInit(): void {
    console.log("graphData",this.graphData);
  }

}
