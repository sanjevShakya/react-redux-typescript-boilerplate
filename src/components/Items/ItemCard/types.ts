import * as ItemReducerProps from "../../../reducers/data/items/types";
import * as TagReducerProps from "../../../reducers/data/tags/types";

export interface OwnProps {
  itemId: string;
  onSelectItem?: (id: string) => void;
}

export type ComposeProps = {
  item: ItemReducerProps.ItemProps;
  tags: Array<TagReducerProps.TagProps>;
};

export type Props = ComposeProps & OwnProps;
