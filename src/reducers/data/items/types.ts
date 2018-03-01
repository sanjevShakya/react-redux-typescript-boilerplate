import * as ItemActions from "../../../actions/data/items";

const { FETCH_ITEMS_FULFILLLED, FETCH_ITEMS_REJECTED } = ItemActions.ACTIONS;

export interface ItemProps {
  id?: string;
  name?: string;
  description?: string;
  tags?: Array<string>;
  updated_at?: string; //TODO: Remove this from server response
  created_at?: string; //TODO: Remove this from server response
  updatedAt?: string;
  createdAt?: string;
}

export interface MetaProps {
  isLoading: boolean;
  error?: string;
}

export interface ByIdProps {
  [id: string]: ItemProps;
}

export type IDsProps = Array<string>;

export interface StateProps {
  meta: MetaProps;
  byId: ByIdProps;
  ids: IDsProps;
}

export interface ActionTypes {
  type: typeof FETCH_ITEMS_FULFILLLED | typeof FETCH_ITEMS_REJECTED;
  payload: any;
}
