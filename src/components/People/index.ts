import { connect } from "react-redux";
import People from "./People";
import { ApplicationState } from "../../store/types";
import { getMoviesIsLoading } from "../../store/movies/selectors";

const mapStateToProps = (state: ApplicationState) => ({
  isLoading: getMoviesIsLoading(state),
});

export default connect(mapStateToProps)(People);
