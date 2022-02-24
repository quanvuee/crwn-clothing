import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import ShopOverviewContainer from "../../components/shop-overview/shop-overview.container";
import CollectionPageContainer from "../../components/collection/collection.container";



class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    this.props.fetchCollectionsStart();
  }

  render() {
    const { match,isCollectionsFetching,isCollectionsLoaded } = this.props;
    return (
      <div>
        <Route
          exact
          path={match.path}
          component={ShopOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}



const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});
export default connect(null, mapDispatchToProps)(ShopPage);
