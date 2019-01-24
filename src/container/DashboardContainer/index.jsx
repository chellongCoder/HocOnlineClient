import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomeContainer from './HomeContainer';

const DashboardContainer = ({
    match
}) => {
    console.log("match", match);
    return (
        <div>
            <Route path={`${match.url}/home`} component={HomeContainer} />
        </div>
    );
}

export default DashboardContainer;
