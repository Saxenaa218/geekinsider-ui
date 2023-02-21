import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import CandidateDetails from "./CandidateDetails";
import Loader from "../../../components/Loader";
import { fetchCanProfile, StateTypes } from "../../../redux";
import { ProfilePropsTypes } from "./types";
import "./CandidateProfile.scss";
import { useSelector } from "react-redux";

const CandidateProfile = () => {
  // const { fetchCanProfile } = props;

  const profileDetails = useSelector((state: StateTypes) => state.profileDetails)
  const loading = useSelector((state: StateTypes) => state.loading)

  useEffect(() => {
    if (Object.keys(profileDetails).length === 0) fetchCanProfile();
  }, []);

  return (
    <>
        <div className="candidate-profile">
          <CandidateDetails {...{ ...profileDetails }} />
        </div>
    </>
  );
};

// const mapStateToProps = (state: StateTypes) => ({
//   profileDetails: state.profileDetails,
//   loading: state.loading,
// });

// const mapDispatchToProps = (dispatch: any) =>
//   bindActionCreators(
//     {
//       fetchCanProfile,
//     },
//     dispatch
//   );

// export default connect(mapStateToProps, mapDispatchToProps)(CandidateProfile);

export default CandidateProfile;
