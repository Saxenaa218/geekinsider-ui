import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { StateTypes } from "../redux";
import { isAuthenticated } from "../utils";
import Loader from "../components/Loader";

const Signup = lazy(() => import("../pages/Signup"));
const Login = lazy(() => import("../pages/Login"));
const LandingPage = lazy(() => import("../pages/LandingPage"));
const NavBar = lazy(() => import("../components/NavBar"));
const SearchResult = lazy(() => import("../pages/SearchAndFilters"));
const RecruiterSearch = lazy(
  () => import("../pages/Recruiter/RecruiterSearch")
);
const CandidateProfile = lazy(
  () => import("../pages/Candidate/CandidateProfile")
);
const RecruiterProfile = lazy(
  () => import("../pages/Recruiter/RecruiterProfile")
);
const CandidateJobDetail = lazy(
  () => import("../pages/Candidate/CandidateJobDetail")
);
const ApplicationManager = lazy(
  () => import("../pages/Recruiter/ApplicationManager")
);
const JobPostingForm = lazy(() => import("../pages/Recruiter/JobPostingForm"));
const CandidateOnboarding = lazy(
  () => import("../pages/Onboarding/CandidateOnboarding")
);
const RecruiterOnboarding = lazy(
  () => import("../pages/Onboarding/RecruiterOnboarding")
);
const ManageAppliedCandidates = lazy(
  () => import("../pages/Recruiter/ManageAppliedCandidates")
);
const RecruiterCandidateDetails = lazy(
  () => import("../pages/Recruiter/RecruiterCandidateDetails")
);

const pages = [
  {
    pageLink: "/home",
    view: LandingPage,
    showNavbar: true,
  },
  {
    pageLink: "/recruiter/postjob",
    view: JobPostingForm,
    showNavbar: true,
  },
  {
    pageLink: "/candidate/onboarding",
    view: CandidateOnboarding,
    showNavbar: false,
  },
  {
    pageLink: "/recruiter/onboarding",
    view: RecruiterOnboarding,
    showNavbar: false,
  },
  {
    pageLink: "/search",
    view: SearchResult,
    showNavbar: true,
  },
  {
    pageLink: "/login",
    view: Login,
    showNavbar: false,
  },
  {
    pageLink: "/signup",
    view: Signup,
    showNavbar: false,
  },
  {
    pageLink: "/candidate/profile",
    view: CandidateProfile,
    showNavbar: true,
  },
  {
    pageLink: "/recruiter/profile",
    view: RecruiterProfile,
    showNavbar: true,
  },
  {
    pageLink: "/recruiter/post/:slug",
    view: ApplicationManager,
    showNavbar: true,
  },
  {
    pageLink: "/job-detail/:slug",
    view: CandidateJobDetail,
    showNavbar: true,
  },
  {
    pageLink: "/recruiter/post/:slug/applied-candidates",
    view: ManageAppliedCandidates,
    showNavbar: true,
  },
  {
    pageLink: "/candidate/recommended/:slug",
    view: RecruiterCandidateDetails,
    showNavbar: true,
  },
  {
    pageLink: "/recruiter/search",
    view: RecruiterSearch,
    showNavbar: true,
  },
];

const Routings: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const userType = useSelector((state: StateTypes) => state.userType)
  const isAuth = useSelector((state: StateTypes) => state.isAuth);
  const loading = useSelector((state: StateTypes) => state.loading);
  // const skills = useSelector((state: StateTypes) => state.skills)
  // const cities = useSelector((state: StateTypes) => state.cities)
  const invalidLocations = ["", "/", "/login", "/signup"];

  const setIsAuth = (bool: boolean) => {
    dispatch({
      type: "SET_AUTH",
      payload: bool,
    });
  };

  const setUserType = (type: "candidate" | "recruiter" | "") => {
    dispatch({
      type: "SET_USER_TYPE",
      payload: type,
    });
  };

  useEffect(() => {
    if (isAuthenticated()) {
      const resp = JSON.parse(localStorage.getItem("user"));
      setIsAuth(true);
      try {
        const type = resp.role === "userRecruiter" ? "recruiter" : "candidate";
        setUserType(type);
      } catch (e) {
        setIsAuth(false);
        setUserType("");
        navigate("/login");
      }
      // redirecting to home is these invalid urls will be requested
      if (location?.pathname && invalidLocations.includes(location.pathname)) {
        navigate("/home");
      }
    } else {
      // redirecting to login when user is not authenticated
      setIsAuth(false);
      setUserType("");
      navigate("/login");
    }
  }, []);

  return (
    <>
      {isAuth && (
        <Suspense fallback={<div />}>
          <NavBar />
        </Suspense>
      )}
      {loading && (
        <div className="loader--global">
          <Loader />
        </div>
      )}
      <Routes>
        {pages.map((page, index) => (
          <Route path={page.pageLink} key={index} element={<page.view />} />
        ))}
        {/* <Navigate to="/home" /> */}
      </Routes>
    </>
  );
};

export default Routings;
