import React, {lazy, Suspense,} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Loading from "./components/sitewide/Loading";
import Layout from "./components/sitewide/Layout";

function Core() {
    return (
        <Router>
            <Suspense fallback={<Loading />}>
                <Layout>

                </Layout>
            </Suspense>
        </Router>
    )
}

export default Core;
