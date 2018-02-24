import * as ItemProps from "../../../reducers/data/items/types";

export interface OwnProps {
  isLoading: boolean;
  error: string;
  items: Array<ItemProps.ItemProps>;
  selectItem: (itemId: string) => void;
}

export type Props = OwnProps;
