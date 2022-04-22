import { connect } from "react-redux";
import Films from "./Films";
import { ApplicationState } from "../../store/types";
import { getFilmsState } from "../../store/movies/selectors";

const mapStateToProps = (state: ApplicationState) => ({
  films: getFilmsState(state),
});

export default connect(mapStateToProps)(Films);
