import { reducer as gameReducer } from "./game/gameSlice";
import { reducer as uiReducer } from "./uiReducer/uiReducerSlice";

export const reducers = {
  game: gameReducer,
  ui: uiReducer,
};
