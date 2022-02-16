import React from 'react';
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { selectCollectionForPreview } from "../../redux/shop/shop.selector";
import CollectionPreview from "../collection-preview/collection-preview.component";

import './shop-overview.styles.scss'

const ShopOverview = ({collections}) => (
  <div className='shop-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(ShopOverview);