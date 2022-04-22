import { connect } from "react-redux";
import Planets from "./Planets";
import { ApplicationState } from "../../store/types";
import { getMoviesIsLoading } from "../../store/movies/selectors";

const mapStateToProps = (state: ApplicationState) => ({
  isLoading: getMoviesIsLoading(state),
});

export default connect(mapStateToProps)(Planets);
