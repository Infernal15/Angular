import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { InputOutputItemComponent } from './input-output-item/input-output-item.component';
import { GetSetComponent } from './get-set/get-set.component';
import { GetSetItemComponent } from './get-set-item/get-set-item.component';

@NgModule({
  declarations: [
    AppComponent,
    InputOutputComponent,
    InputOutputItemComponent,
    GetSetComponent,
    GetSetItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
