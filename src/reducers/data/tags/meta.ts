import * as TagActions from "../../../actions/data/tags";
import * as TagProps from "./types";

const {
  FETCH_TAGS_PENDING,
  FETCH_TAGS_FULFILLLED,
  FETCH_TAGS_REJECTED
} = TagActions.ACTIONS;

const DEFAULT_STATE: TagProps.MetaProps = {
  isLoading: false,
  error: null
};

export default (state = DEFAULT_STATE, action: TagProps.ActionTypes) => {
  switch (action.type) {
    case FETCH_TAGS_PENDING: {
      return {
        ...state,
        isLoading: true
      };
    }

    case FETCH_TAGS_FULFILLLED: {
      return {
        isLoading: false,
        error: null
      };
    }

    case FETCH_TAGS_REJECTED: {
      return {
        isLoading: false,
        error: "Something went wrong"
      };
    }
  }

  return state;
};
