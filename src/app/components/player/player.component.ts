import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, map, of, startWith } from 'rxjs';
import { ActionPlayer, PlayerActionType } from 'src/app/action/actionplayer';
import { Player } from 'src/app/model/player';
import { PlayerService } from 'src/app/services/player.service';
import { DataState, StateStatus } from 'src/app/state/playerstate';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit{

  playerObservable$=new Observable<DataState<Player[]>>()
  readonly stateStatus = StateStatus

  constructor(private playerService:PlayerService, private router:Router){}

  ngOnInit(): void {
    this.onGetAllplayer()
  }


  onGetAllplayer(){
    this.playerObservable$ = this.playerService.getAllPlayer().pipe(
      map(data=>({dataStateStatus:StateStatus.LOADED, dataState:data})),
      startWith({dataStateStatus:StateStatus.LOADING}),
      catchError(error=>of({dataStateStatus:StateStatus.ERROR, dataStateError:error}))
    )
  }

  onGetAllPlayerSelected(){
    this.playerObservable$ = this.playerService.getAllPlayerSelected().pipe(
      map(data=>({dataStateStatus:StateStatus.LOADED, dataState:data})),
      startWith({dataStateStatus:StateStatus.LOADING}),
      catchError(error=>of({dataStateStatus:StateStatus.ERROR, dataStateError:error}))
    )
  }

  onSearch(formControl:any){
    this.playerObservable$ = this.playerService.getAllPlayerSearch(formControl.keyword).pipe(
      map(data=>({dataStateStatus:StateStatus.LOADED, dataState:data})),
      startWith({dataStateStatus:StateStatus.LOADING}),
      catchError(error=>of({dataStateStatus:StateStatus.ERROR, dataStateError:error}))
    )
  }

  onChangeStatus(p:Player){
    this.playerService.onChangeStatus(p).subscribe(
      (p:Player)=>{
        return p.selected
      }
    )
  }

  onDeletePlayer(p:Player){
    let conf = confirm("voulez-vous vraiment supprimer ce player")
    if(conf){
      this.playerService.deletePlayer(p).subscribe(
        data=>{
          this.onGetAllplayer()
        }
      )
    }

  }

  onNewPlayer(){
    this.router.navigateByUrl("/newplayerComponent")
  }

  onEdite(p:Player){
    this.router.navigateByUrl("/editeplayerComponent/"+p.id)
  }

  ActionEvent(event:ActionPlayer<any>){
    switch(event.type){
      case PlayerActionType.GET_ALL_PLAYER:this.onGetAllplayer(); break;
      case PlayerActionType.GET_ALL_PLAYER_SELECTED: this.onGetAllPlayerSelected();break;
      case PlayerActionType.GET_ALL_PLAYER_SEARCH: this.onSearch(event.payload); break;
      case PlayerActionType.NEW_PLAYER: this.onNewPlayer(); break;
      case PlayerActionType.ON_CHANGE_STATUS_PLAYER: this.onChangeStatus(event.payload); break;
      case PlayerActionType.ON_DELETE_PLAYER: this.onDeletePlayer(event.payload);break;
      case PlayerActionType.ON_EDIT_PLAYER: this.onEdite(event.payload);break;
    }
  }

}
