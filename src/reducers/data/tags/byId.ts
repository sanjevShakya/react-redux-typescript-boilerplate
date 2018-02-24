import * as TagActions from "../../../actions/data/tags";
import * as TagProps from "./types";

const { FETCH_TAGS_FULFILLLED, FETCH_TAGS_REJECTED } = TagActions.ACTIONS;

const DEFAULT_STATE: TagProps.ByIdProps = {};

export default (state = DEFAULT_STATE, action: TagProps.ActionTypes) => {
  if (action.payload && action.payload.entities) {
    return {
      ...state,
      ...action.payload.entities.tags
    };
  }
  return state;
};
