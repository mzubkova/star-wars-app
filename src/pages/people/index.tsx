import { connect } from "react-redux";
import People from "./People";
import { ApplicationState } from "../../store/types";
import { getPeopleState } from "../../store/movies/selectors";

const mapStateToProps = (state: ApplicationState) => ({
  people: getPeopleState(state),
});

export default connect(mapStateToProps)(People);
