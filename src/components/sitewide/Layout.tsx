import React from "react";
import {motion, AnimateSharedLayout} from "framer-motion";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function Layout(props: {
    children: any,
}) {
    return <AnimateSharedLayout>
        <div>
            <Navigation />
            {props.children}
            <Footer />
        </div>
    </AnimateSharedLayout>
}
