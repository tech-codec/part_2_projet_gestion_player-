import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HttpClientModule } from '@angular/common/http'
import { PlayerComponent } from './components/player/player.component';
import { FormsModule } from '@angular/forms';
import { NewplayerComponent } from './components/newplayer/newplayer.component';
import { EditeplayerComponent } from './components/editeplayer/editeplayer.component';
import { NavbarPlayerComponent } from './components/player/navbar-player/navbar-player.component';
import { ListPlayerComponent } from './components/player/list-player/list-player.component';
import { ItemPlayerComponent } from './components/player/list-player/item-player/item-player.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    NewplayerComponent,
    EditeplayerComponent,
    NavbarPlayerComponent,
    ListPlayerComponent,
    ItemPlayerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
