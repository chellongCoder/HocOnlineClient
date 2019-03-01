import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import HomeContainer from './HomeContainer';
import Sidebar from '../../components/Sidebar';
import AllNewContainer from './AllNewContainer';
import DashBoard from '../../pages/Dashboard';
import LoginContainer from './../LoginContainer';

const DashboardContainer = ({
    match, history
}) => {
    if(match.url === '/') {
        history.push("/dashboard/home");
    }
    console.log("match", match, history);
    return (
        <div>
            <div>
                <Sidebar path={`${match.url}`}/>
            </div>
            <div>
                <Route path={`${match.url}/`} render={(props) => {
                    return false ? (
                        <DashBoard />
                    ) : (
                            <Redirect to={{
                                pathname: `${match.url}/allnew`,
                            }} />
                    )
                }} />
                <Route path={`${match.url}/home`} component={HomeContainer} />
                <Route path={`${match.url}/allnew`} component={AllNewContainer} />
            </div>
        </div>
    );
}

export default DashboardContainer;
