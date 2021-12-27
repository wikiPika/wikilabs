import React, {useEffect, useState} from "react";
import "../../css/core.scss";
import "../../css/layout.scss";
import mainLogo from "../../img/main-logo-cropped.png";
import {motion, AnimateSharedLayout} from "framer-motion";
import {transitSpring} from "../../misc/Animations";
import {Link, useNavigate} from "react-router-dom";

const leftButtonBarData = [
    {
        text: "Home",
        color: "#0042B0",
        href: "/",
    },
    {
        text: "Projects",
        color: "#0042B0",
        href: "/projects",
    },
]

export default function Navigation(props: {
    currentHref: any;
}) {

    const [leftBarSelected, setLeftBarSelected] = useState(0);
    const navigate = useNavigate();
    const [hovering, setHovering] = useState(-1);

    useEffect(() => {
        for (let i = 0; i < leftButtonBarData.length; i++) {
            if (leftButtonBarData[i].href == props.currentHref.pathname) {
                setLeftBarSelected(i);
                return;
            }
        }
    }, [])

    return <div className="apex col-cc w-100" onMouseLeave={() => setHovering(-1)}>
        {/*Just the top*/}
        <div className="top row-bc w-100">
            {/* Left chunk */}
            <div className="row-cc">
                <img className="main-logo" src={mainLogo} alt="wikiLabs logo" />

                {/* Navigation-y Thingies*/}
                <AnimateSharedLayout>
                    <div className="left-button-bar row-cc">
                        {leftButtonBarData.map(({text, color, href}, index) => {
                            return <motion.div key={index} onMouseEnter={() => setHovering(index)} className="nav-button" style={{color: index === leftBarSelected ? color : ""}} onClick={() => {
                                setLeftBarSelected(index);
                                navigate(href);
                            }} animate layout>
                                {text}
                                {index === leftBarSelected && (
                                    <motion.div layoutId="underline" className="underline" style={{borderColor: color}} transition={transitSpring(1000, 0, 100)} />
                                )}
                            </motion.div>
                        })}
                    </div>
                </AnimateSharedLayout>
            </div>

            {/* Right chunk */}
            <div className="row-cc">
                <motion.div className="nav-button right-button" onMouseEnter={() => setHovering(4)}>
                    Login
                    <motion.div className="underline" />
                </motion.div>
            </div>
        </div>
    </div>
}
