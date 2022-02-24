import { compose } from "redux"
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import ShopOverview from "./shop-overview.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { selectIsColletionsFetching } from "../../redux/shop/shop.selector";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsColletionsFetching,
});

const ShopOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(ShopOverview);

export default ShopOverviewContainer;