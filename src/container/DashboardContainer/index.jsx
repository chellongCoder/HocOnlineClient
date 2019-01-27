import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomeContainer from './HomeContainer';
import Sidebar from '../../components/Sidebar';

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
                <Route path={`${match.url}/home`} component={HomeContainer} />
            </div>
        </div>
    );
}

export default DashboardContainer;
