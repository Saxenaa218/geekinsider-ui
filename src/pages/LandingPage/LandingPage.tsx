import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useNavigate } from "react-router";

import CandidateLanding from "../Candidate/CandidateLandingPage";
import RecruiterLanding from "../Recruiter/LandingPage";
import Loader from "../../components/Loader";
import { setIsAuth, setUserType, StateTypes } from "../../redux";
import { UserTypeTypes } from "../../routes";
import { LandingPagePropTypes } from "./types";
import { getUser, isAuthenticated } from "../../utils";

const LandingPage: React.FC<LandingPagePropTypes> = (props) => {
  const { userType, setUserType, loading } = props;
  const navigate = useNavigate();

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
    switch (user) {
      case "candidate":
        return <CandidateLanding {...{ handleProfileClick }} />;
      case "recruiter":
        return <RecruiterLanding {...{ handleProfileClick }} />;
      default:
        return loading ? <div /> : <Loader />;
    }
  };

  return <div className="landing-page-container">{getLandingUI(userType)}</div>;
};

const mapStateToProps = (state: StateTypes) => ({
  userType: state.userType,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      setUserType,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
