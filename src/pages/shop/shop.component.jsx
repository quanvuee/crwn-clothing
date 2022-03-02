import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import ShopOverviewContainer from "../../components/shop-overview/shop-overview.container";
import CollectionPageContainer from "../../components/collection/collection.container";

const ShopPage = ({ fetchCollectionsStart }) => {
  const location = useLocation();
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <Routes>
      <Route index element={<ShopOverviewContainer/>} />
      <Route path=":collectionId" element={<CollectionPageContainer/>} />
    </Routes>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});
export default connect(null, mapDispatchToProps)(ShopPage);
