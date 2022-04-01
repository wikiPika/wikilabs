import React, {lazy, Suspense} from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import Layout from "./components/layout/Layout";
import ScreenProvider from "./components/layout/ScreenContext";

const Home = lazy(() => import("./components/pages/Home"));

function Core() {

    return <Suspense fallback={<div />}>
        <ScreenProvider>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path={"/projects"} element={<div />}/>
                    <Route path={"/resume"} element={<div />}/>
                    <Route path={"/contact"} element={<div />}/>
                </Routes>
            </Layout>
        </ScreenProvider>
    </Suspense>
}

export default Core;
