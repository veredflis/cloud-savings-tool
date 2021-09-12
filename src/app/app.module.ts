import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataConvertorService } from './Services/data-convertor.service';
import { GraphComponentComponent } from './Components/graph-component/graph-component.component';
import { ChartsModule } from 'ng2-charts';
import { RiViewComponent } from './Components/ri-view/ri-view.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponentComponent,
    RiViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [DataConvertorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
