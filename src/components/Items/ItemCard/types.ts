import { ItemProps } from "../../../reducers/data/items/types";

export interface OwnProps {
  item: ItemProps;
  onClick?: () => void;
}

export type Props = OwnProps;
