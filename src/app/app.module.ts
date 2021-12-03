import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventHandlingComponent } from './event-handling/event-handling.component';
import { UserEventFirstComponent } from './user-event-first/user-event-first.component';
import { UserEventSecondComponent } from './user-event-second/user-event-second.component';

@NgModule({
  declarations: [
    AppComponent,
    EventHandlingComponent,
    UserEventFirstComponent,
    UserEventSecondComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
