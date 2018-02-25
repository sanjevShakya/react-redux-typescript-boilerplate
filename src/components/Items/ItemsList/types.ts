import * as ItemProps from "../../../reducers/data/items/types";

export interface OwnProps {
  isLoading: boolean;
  error: string;
  items: Array<string>;
  onSelectItem: (itemId: string) => void;
}

export type Props = OwnProps;
