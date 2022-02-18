import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import ShopOverview from "../../components/shop-overview/shop-overview.component";
import CollectionPage from "../../components/collection/collection.component";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const ColletionOverviewWithSpinner = WithSpinner(ShopOverview);
const ColletionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;
  state = {
    isLoading: true,
  };
  componentDidMount() {
    const { updateCollections } = this.props;

    const collectionRef = firestore.collection("collections");
    collectionRef.get().then((snapshot) => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionMap);
      this.setState({ isLoading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
    return (
      <div>
        <Route
          exact
          path={match.path}
          render={(props) => (
            <ColletionOverviewWithSpinner isLoading={isLoading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <ColletionPageWithSpinner isLoading={isLoading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionMap) =>
    dispatch(updateCollections(collectionMap)),
});
export default connect(null, mapDispatchToProps)(ShopPage);
