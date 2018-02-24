import * as TagActions from "../../../actions/data/tags";
import * as TagProps from "./types";

const { FETCH_TAGS_FULFILLLED, FETCH_TAGS_REJECTED } = TagActions.ACTIONS;

const DEFAULT_STATE: TagProps.IDsProps = [];

export default (state = DEFAULT_STATE, action: TagProps.ActionTypes) => {
  switch (action.type) {
    case FETCH_TAGS_FULFILLLED: {
      return action.payload.result;
    }

    case FETCH_TAGS_REJECTED: {
      return DEFAULT_STATE;
    }
  }

  return state;
};
