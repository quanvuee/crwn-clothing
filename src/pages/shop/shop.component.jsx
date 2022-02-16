import React from "react";
import { Route } from "react-router-dom";

import ShopOverview from "../../components/shop-overview/shop-overview.component";
import CollectionPage from "../../components/collection/collection.component";

const ShopPage = ({ match }) => (
  <div>
    <Route exact path={match.path} component={ShopOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
