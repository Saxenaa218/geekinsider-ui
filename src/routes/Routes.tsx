import { Suspense, lazy, useEffect } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; 

import { setIsAuth, setUserType, StateTypes } from '../redux';
import { AppTypes } from './types';
import { isAuthenticated } from '../utils';
import Loader from '../components/Loader';

const Signup = lazy(() => import('../pages/Signup'));
const Login = lazy(() => import('../pages/Login'));
const LandingPage = lazy(() => import('../pages/LandingPage'));
const NavBar = lazy(() => import('../components/NavBar'));
const SearchResult = lazy(() => import('../pages/SearchAndFilters'));
const Messages = lazy(() => import('../pages/Messages'));
const CandidateProfile = lazy(() => import('../pages/Candidate/CandidateProfile'));
const RecruiterProfile = lazy(() => import('../pages/Recruiter/RecruiterProfile'));
const CandidateJobDetail = lazy(() => import('../pages/Candidate/CandidateJobDetail'));
const ApplicationManager = lazy(() => import('../pages/Recruiter/ApplicationManager'));
const JobPostingForm = lazy(() => import('../pages/Recruiter/JobPostingForm'));
const CandidateOnboarding = lazy(() => import('../pages/Onboarding/CandidateOnboarding'));
const RecruiterOnboarding = lazy(() => import('../pages/Onboarding/RecruiterOnboarding'));

const pages = [
    {
        pageLink: '/home',
        view: LandingPage,
        showNavbar: true,
    },
    {
        pageLink: '/messages',
        view: Messages,
        showNavbar: true,
    },
    {
        pageLink: '/recruiter/postjob',
        view: JobPostingForm,
        showNavbar: true,
    },
    {
        pageLink: '/candidate/onboarding',
        view: CandidateOnboarding,
        showNavbar: false,
    },
    {
        pageLink: '/recruiter/onboarding',
        view: RecruiterOnboarding,
        showNavbar: false,
    },
    {
        pageLink: '/search',
        view: SearchResult,
        showNavbar: true,
    },
    {
        pageLink: '/login',
        view: Login,
        showNavbar: false,
    },
    {
        pageLink: '/signup',
        view: Signup,
        showNavbar: false,
    },
    {
        pageLink: '/candidate/profile',
        view: CandidateProfile,
        showNavbar: true,
    },
    {
        pageLink: '/recruiter/profile',
        view: RecruiterProfile,
        showNavbar: true,
    },
    {
        pageLink: '/recruiter/managepost',
        view: ApplicationManager,
        showNavbar: true,
    },
    {
        pageLink: '/jobDetail',
        view: CandidateJobDetail,
        showNavbar: true,
    }
];

const Routes: React.FC<AppTypes> = (props) => {

    const { isAuth, userType, location, setIsAuth, loading } = props;
    const invalidLocations = ['', '/', '/login', '/signup'];
    const history = useHistory();

    // useEffect(() => {
    //     setAuthListener();
    // }, [])
    
    useEffect(() => {
        isAuthenticated().then(resp => {
            if (resp?.result) {
                setIsAuth(true);
                try {
                    const type = resp.signInUserSession.idToken.payload['cognito:groups'][0] === 'userRecruiter' ? 'recruiter' : 'candidate';
                    setUserType(type);
                }
                catch(e) {
                    setIsAuth(false);
                    setUserType('');
                    history.push('/login');
                }
                // redirecting to home is these invalid urls will be requested
                if (location?.pathname && invalidLocations.includes(location.pathname)) {
                    history.push('/home')
                }
            }
            else {
                // redirecting to login when user is not authenticated
                setIsAuth(false);
                setUserType('');
                history.push('/login');
            }
        })
    }, [])

    // function setAuthListener() {
    //     Hub.listen("auth", (data) => {
    //         switch (data.payload.event) {
    //             case "signOut":
    //                 setIsAuth(false);
    //                 break;
    //             case "signIn":
    //                 setIsAuth(true);
    //                 break;
    //         }
    //     });
    // };

    return (
        <>
            {isAuth && <Suspense fallback={<div/>}>
                <NavBar history={history} setIsAuth={setIsAuth}/>
            </Suspense>}
            <Switch>
                {pages.map((page, index) => 
                    <Route
                        exact
                        path={page.pageLink}
                        render={(props: any) => 
                            <>
                                {loading && <div className="loader--global">
                                    <Loader />
                                </div>}
                                <page.view {...{...props}} setIsAuth={setIsAuth} isAuth={isAuth}/>
                            </>
                        }
                        key={index}
                    />
                )}
                <Redirect to="/" />
            </Switch>
        </>
    )
}

const mapStateToProps = (state: StateTypes) => ({
    userType: state.userType,
    isAuth: state.isAuth,
    loading: state.loading
});
  
const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    setIsAuth, 
    setUserType
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Routes);