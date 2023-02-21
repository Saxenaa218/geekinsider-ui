import { useEffect } from "react";
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";
import { useNavigate } from "react-router";

import CandidateLanding from "../Candidate/CandidateLandingPage";
import RecruiterLanding from "../Recruiter/LandingPage";
import Loader from "../../components/Loader";
import { setUserType, StateTypes } from "../../redux";
import { UserTypeTypes } from "../../routes";
// import { LandingPagePropTypes } from "./types";
import { getUser, isAuthenticated } from "../../utils";
import { useSelector } from "react-redux";

const LandingPage = () => {
  // const { setUserType } = props;
  const navigate = useNavigate();

  const userType = useSelector((state: StateTypes) => state.userType)
  const loading = useSelector((state: StateTypes) => state.loading)

  useEffect(() => {
    if (isAuthenticated()) {
      const { user } = getUser();
      const type = user.role === "userCandidate" ? "candidate" : "recruiter";
      setUserType(type);
    } else {
      navigate("/login");
    }
  }, []);

  const handleProfileClick = async () => {
    const { user } = getUser();
    const type = user.role === "userCandidate" ? "candidate" : "recruiter";
    setUserType(type);
    navigate(`/${type}/profile`);
  };

  const getLandingUI = (user: UserTypeTypes) => {
    console.log(loading, user, 'getLandingUI')
    switch (user) {
      case "candidate":
        return <CandidateLanding {...{ handleProfileClick }} />;
      case "recruiter":
        return <RecruiterLanding {...{ handleProfileClick }} />;
      default:
        return <div />;
    }
  };

  return <div className="landing-page-container">{getLandingUI(userType)}</div>;
};

// const mapStateToProps = (state: StateTypes) => ({
//   userType: state.userType,
//   loading: state.loading,
// });

// const mapDispatchToProps = (dispatch: any) =>
//   bindActionCreators(
//     {
//       setUserType,
//     },
//     dispatch
//   );

// export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);

export default LandingPage
