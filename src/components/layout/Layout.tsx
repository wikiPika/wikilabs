import React, {useState} from "react";
import "../../scss/core.scss";
import "../../scss/layout.scss";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function Layout(props: {
    children: any,
}) {

    return <div className="layout-apex w-100 h-100">
        <Navigation />
        <div className="layout-body w-100 row-ct">
            {props.children}
        </div>
        <Footer />
    </div>
}
