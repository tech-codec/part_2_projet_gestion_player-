import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActionPlayer, PlayerActionType } from 'src/app/action/actionplayer';
import { Player } from 'src/app/model/player';

@Component({
  selector: 'app-item-player',
  templateUrl: './item-player.component.html',
  styleUrls: ['./item-player.component.css']
})
export class ItemPlayerComponent {

  @Input()
  p!:Player

  @Output()
  playerEventEmiter=new EventEmitter<ActionPlayer<Player>>()


  onChangeStatus(p:Player){this.playerEventEmiter.emit({type:PlayerActionType.ON_CHANGE_STATUS_PLAYER, payload:p})}

  onEdite(p:Player){this.playerEventEmiter.emit({type:PlayerActionType.ON_EDIT_PLAYER, payload:p})}

  onDeletePlayer(p:Player){this.playerEventEmiter.emit({type:PlayerActionType.ON_DELETE_PLAYER, payload:p})}

}
