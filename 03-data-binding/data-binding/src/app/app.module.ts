import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { InputPropertiesComponent } from './input-properties/input-properties.component';
import { OutputPropertyComponent } from './output-property/output-property.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    EventBindingComponent,
    TwoWayDataBindingComponent,
    InputPropertiesComponent,
    OutputPropertyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
