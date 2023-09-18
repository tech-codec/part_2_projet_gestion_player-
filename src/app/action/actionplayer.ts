export enum PlayerActionType{
  GET_ALL_PLAYER = " [PLAYER] get all player ",
  GET_ALL_PLAYER_SELECTED = " [PALYER] get all player selected ",
  GET_ALL_PLAYER_SEARCH = " [PALYER] get all player search ",
  NEW_PLAYER = " [PALYER] new player ",
  ON_CHANGE_STATUS_PLAYER = " [PALYER] on change status player ",
  ON_EDIT_PLAYER= "[PALYER] on edit player ",
  ON_DELETE_PLAYER = " [PALYER] on delete player "
}




export interface ActionPlayer<T>{
  type:PlayerActionType
  payload?:T
}
