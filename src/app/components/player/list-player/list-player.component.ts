import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ActionPlayer, PlayerActionType } from 'src/app/action/actionplayer';
import { Player } from 'src/app/model/player';
import { DataState, StateStatus } from 'src/app/state/playerstate';

@Component({
  selector: 'app-list-player',
  templateUrl: './list-player.component.html',
  styleUrls: ['./list-player.component.css']
})
export class ListPlayerComponent {

  readonly stateStatus = StateStatus

  @Output()
  playerEventEmiter=new EventEmitter<ActionPlayer<Player>>()

  @Input()
  observablePlayer$=new Observable<DataState<Player[]>>()

  onChangeStatus(p:Player){this.playerEventEmiter.emit({type:PlayerActionType.ON_CHANGE_STATUS_PLAYER, payload:p})}

  onEdite(p:Player){this.playerEventEmiter.emit({type:PlayerActionType.ON_EDIT_PLAYER, payload:p})}

  onDeletePlayer(p:Player){this.playerEventEmiter.emit({type:PlayerActionType.ON_DELETE_PLAYER, payload:p})}

  actionEvent(event:ActionPlayer<any>){
    this.playerEventEmiter.emit(event)
  }

}
