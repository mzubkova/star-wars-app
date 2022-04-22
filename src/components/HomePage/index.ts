import { connect } from "react-redux";
import { ApplicationState } from "../../store/types";
import HomePage from "./HomePage";
import { getPathname } from "../../store/movies/selectors";

const mapStateToProps = (state: ApplicationState) => ({
  pathname: getPathname(state),
});

export default connect(mapStateToProps)(HomePage);
