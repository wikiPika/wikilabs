import React, {useState} from "react";
import "../../scss/core.scss";
import "../../scss/layout.scss";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function Layout(props: {
    children: any,
}) {

    const [scrollY, setScrollY] = useState(0);

    onscroll = (e) => {
        setScrollY(window.scrollY / document.body.clientHeight)
    }

    return <div className="layout-apex w-100 h-100">
        <Navigation scrollY={scrollY} />
        <div className="layout-body w-100 row-ct">
            {props.children}
        </div>
        <Footer />
    </div>
}