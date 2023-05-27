import * as gameActions from "./game/game.actions";
import * as uiActions from "./uiReducer/uiReducer.actions";

export const allActions = {
  ...gameActions,
  ...uiActions,
};
