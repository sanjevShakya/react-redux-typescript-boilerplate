import * as ItemActions from "../../../actions/data/items";

const { FETCH_ITEMS_FULFILLLED, FETCH_ITEMS_REJECTED } = ItemActions.ACTIONS;

export interface ItemProps<TagProps> {
  id: string;
  name: string;
  description: string;
  tags: Array<TagProps>;
}

export interface MetaProps {
  isLoading: boolean;
  error?: string;
}

export interface ByIdProps {
  [id: string]: ItemProps<string>;
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
