import * as React from "react";
import { bindActionCreators } from "redux";
import { connect, Dispatch } from "react-redux";
import { Redirect, withRouter } from "react-router";
import { compose, withHandlers } from "recompose";
import { SubmissionError } from "redux-form";

import * as ItemsMainProps from "./types";
import * as ItemFormProps from "../../Items/ItemForm/types";
import * as StoreProps from "../../../reducers/types";

import ROUTES from "../../../constants/routes";
import ROLES from "../../../constants/roles";
import * as ItemActions from "../../../actions/data/items";
import * as ItemUIActions from "../../../actions/ui/items";
import * as ItemSelectors from "../../../selectors/items";

import ItemsList from "../../Items/ItemsList";
import ItemCard from "../../Items/ItemCard";
import ItemEditForm from "./EditForm";
import ItemCreateForm from "./CreateForm";

class ItemsMain extends React.PureComponent<ItemsMainProps.Props> {
  constructor(props: ItemsMainProps.Props) {
    super(props);
  }

  componentWillMount() {
    return this.props.fetchItems();
  }

  saveItem = async (data: ItemFormProps.FormDataProps) => {
    try {
      await this.props.saveItem(data);
    } catch (err) {
      const { data } = err.response;
      throw new SubmissionError({ ...data.details, _error: data.message });
    }
  };

  render() {
    const { items, selectedItem } = this.props;
    return (
      <div>
        <h1>Item</h1>
        <ItemCreateForm onSubmit={this.saveItem} />
        <ItemEditForm
          initialValues={{ item: selectedItem }}
          onSubmit={this.saveItem}
        />
        <ItemsList
          items={items.data}
          isLoading={items.isLoading}
          error={items.error}
          onSelectItem={this.props.updateSelectedItem}
        />
      </div>
    );
  }
}

function mapStateToProps() {
  let getItem = ItemSelectors.makeGetItem();

  return (state: StoreProps.Props) => {
    let items = ItemSelectors.getVisibleItems(state);
    let selectedItem = getItem(state, state.ui.Items.selectedItemId);

    return {
      items,
      selectedItem
    };
  };
}

function mapDispatchToProps(dispatch: Dispatch<{}>) {
  return {
    fetchItems: bindActionCreators(ItemActions.fetchItems, dispatch),
    saveItem: bindActionCreators(ItemActions.saveItem, dispatch),
    updateSelectedItem: bindActionCreators(
      ItemUIActions.selectedItemChanged,
      dispatch
    )
  };
}

let enhance = compose<ItemsMainProps.ComposeProps, ItemsMainProps.OwnProps>(
  connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(ItemsMain);
