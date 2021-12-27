import React, {lazy, Suspense} from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import Loading from "./components/sitewide/Loading";
import Layout from "./components/sitewide/Layout";
import {AnimatePresence} from "framer-motion";

const Home = lazy(() => import("./components/home/Home"));
const Projects = lazy(() => import("./components/projects/Projects"));

function Core() {
    const currentHref = useLocation();

    return (
        <Suspense fallback={<Loading />}>
            <Layout currentHref={currentHref}>
                <AnimatePresence exitBeforeEnter initial={false}>
                    <Routes location={currentHref} key={currentHref.pathname}>
                        <Route path="/" element={<Home />}/>
                        <Route path="/projects" element={<Projects />}/>
                    </Routes>
                </AnimatePresence>
            </Layout>
        </Suspense>
    )
}

export default Core;
