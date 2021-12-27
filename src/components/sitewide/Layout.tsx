import React from "react";
import {motion, AnimateSharedLayout} from "framer-motion";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function Layout(props: {
    currentHref: any,
    children: any,
}) {
    return <AnimateSharedLayout>
        <div className="peak col-cc w-100">
            <Navigation currentHref={props.currentHref} />
            <div className="w-100">
                {props.children}
            </div>
            <Footer />
        </div>
    </AnimateSharedLayout>
}
