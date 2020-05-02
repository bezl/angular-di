import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ZooModule } from './zoo/zoo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ZooModule.forRoot([
      {emoji: '🐼'},
      {emoji: '🐨'},
      {emoji: '🐀'}
    ]),
    ZooModule.forFeature([
      {emoji: '🐯'},
      {emoji: '🦇'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
