import { Component, EventEmitter, Output } from '@angular/core';
import { ActionPlayer, PlayerActionType } from 'src/app/action/actionplayer';

@Component({
  selector: 'app-navbar-player',
  templateUrl: './navbar-player.component.html',
  styleUrls: ['./navbar-player.component.css']
})
export class NavbarPlayerComponent {

  @Output()
  playerEvnentEmiter=new EventEmitter<ActionPlayer<string>>

  onGetAllplayer(){this.playerEvnentEmiter.emit({type:PlayerActionType.GET_ALL_PLAYER})}

  onGetAllPlayerSelected(){this.playerEvnentEmiter.emit({type:PlayerActionType.GET_ALL_PLAYER_SELECTED})}

  onNewPlayer(){this.playerEvnentEmiter.emit({type:PlayerActionType.NEW_PLAYER})}

  onSearch(keyword:string){this.playerEvnentEmiter.emit({type:PlayerActionType.GET_ALL_PLAYER_SEARCH, payload:keyword})}

}
