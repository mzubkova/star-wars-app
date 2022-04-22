import Planets from "./Planets";
import { connect } from "react-redux";
import { ApplicationState } from "../../store/types";
import {
  getPlanetsState,
  getMoviesIsLoading,
} from "../../store/movies/selectors";

const mapStateToProps = (state: ApplicationState) => ({
  planets: getPlanetsState(state),
  isLoading: getMoviesIsLoading(state),
});

export default connect(mapStateToProps)(Planets);
