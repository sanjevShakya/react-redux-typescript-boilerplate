import * as TagActions from "../../../actions/data/tags";

const { FETCH_TAGS_FULFILLLED, FETCH_TAGS_REJECTED } = TagActions.ACTIONS;

export interface TagProps {
  id: string;
  name: string;
}

export interface MetaProps {
  isLoading: boolean;
  error?: string;
}

export interface ByIdProps {
  [id: string]: TagProps;
}

export type IDsProps = Array<string>;

export interface StateProps {
  meta: MetaProps;
  byId: ByIdProps;
  ids: IDsProps;
}

export interface ActionTypes {
  type: typeof FETCH_TAGS_FULFILLLED | typeof FETCH_TAGS_REJECTED;
  payload: any;
}
