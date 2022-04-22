import StyledLink from "./StyledLink";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { savePathname } from "../../store/movies/actions";

const mapDispatchToProps = (dispatch: Dispatch) => ({
  savePathname: (payload: string) => dispatch(savePathname(payload)),
});

export default connect(null, mapDispatchToProps)(StyledLink);
