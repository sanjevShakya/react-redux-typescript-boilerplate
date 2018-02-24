import * as TagProps from "../../../reducers/data/tags/types";

export interface OwnProps {
  tagId: string;
}

export interface StoreProps {
  tag: TagProps.TagProps;
}

export type ComposeProps = StoreProps;

export type Props = OwnProps & StoreProps;
