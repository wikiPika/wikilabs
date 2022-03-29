import React, {useEffect, useState} from "react";
import "../../scss/core.scss";
import "../../scss/layout.scss";
import mainLogo from "../../img/main-logo-cropped.png";
import {Anim} from "../../Animation";
import {AnimatePresence, motion} from "framer-motion";
import {useNavigate} from "react-router";

const navigationData = {
    "Home": "/",
    "Projects": "/projects",
}

export default function Navigation(props: {
    scrollY: number,
}) {

    const nav = useNavigate();
    const [width, setWidth] = useState(window.innerWidth);
    const listener = (e: any) => {
        setWidth(e.target.innerWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", listener);
        return () => {
            window.removeEventListener("resize", listener);
        }
    }, [])

    return <motion.div className="layout-navigation w-100 row-bc"
                       variants={new Anim().add("backgroundColor", "rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0.1)")
                           .add("color", "rgb(0, 0, 0)", "rgb(255, 255, 255)")
                           .spring(120, 0, 20).build()}
                       initial="inactive" animate={props.scrollY > 0 ? "active" : "inactive"}
    >
        <motion.img style={{cursor: "pointer"}} whileHover={{backgroundColor: "rgba(0, 0, 0, 0.12)"}} onClick={() => nav("/")} src={mainLogo} />
        {
            width > 540 &&
            <div className="row-cc">
                <AnimatePresence>
                    {
                        Object.entries(navigationData).map((k, i) =>
                            <React.Fragment key={i}>
                                <motion.span variants={Anim.bounceY(-10).spring(100, 0.1 * i).build()}
                                             initial="inactive" animate="active">•
                                </motion.span>
                                <motion.p variants={Anim.bounceY(-10).spring(100, 0.1 * i + 0.05).build()}
                                          initial="inactive" animate="active"
                                          whileHover={{backgroundColor: "rgba(0, 0, 0, 0.12)"}}
                                          onClick={() => nav(k[1])}
                                >{k[0]}</motion.p>
                                {
                                    i == Object.keys(navigationData).length - 1 &&
                                    <motion.span variants={Anim.bounceY(-10).spring(100, 0.1 * i + 0.1).build()}
                                                 initial="inactive" animate="active">•</motion.span>
                                }
                            </React.Fragment>
                        )
                    }
                </AnimatePresence>
            </div>
        }
        {
            width <= 540 && <div>borger</div>
        }
    </motion.div>
}