import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/Day1/toolbar/toolbar.component';
import { CardComponent } from './components/Day1/card/card.component';
import { AccordionComponent } from './components/Day2/accordion/accordion.component';
import { ProcessBarComponent } from './components/Day2/process-bar/process-bar.component';
import { StarRatingsComponent } from './components/Day3/star-ratings/star-ratings.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CardComponent,
    AccordionComponent,
    ProcessBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StarRatingsComponent
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
