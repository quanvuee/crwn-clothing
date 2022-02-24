import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { connect } from "react-redux";
import { selectCollectionsIsLoaded } from "../../redux/shop/shop.selector";
import CollectionPage from "../collection/collection.component"
import WithSpinner from "../with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
  isLoading:state => !selectCollectionsIsLoaded(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;