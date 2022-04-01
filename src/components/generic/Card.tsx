import React from "react";
import {motion} from "framer-motion";
import "../../scss/core.scss";
import "../../scss/generic.scss";
import {Anim} from "../../Animation";
import {useScreen} from "../layout/ScreenContext";
import {useInView} from "react-intersection-observer";

export default function Card(props: {
    title: string,
    children?: any,
    img?: any,
    single?: boolean,
    style?: any,
    custom?: any,

}) {

    const {ref, inView} = useInView({
        delay: 0.5,
        triggerOnce: true,
    });

    const screen = useScreen();

    return <motion.div ref={ref} className="card col-st w-100" variants={Anim.bounceX(-10).delay_children(0.1).build()}>
        <motion.div className="title" variants={Anim.bounceY(50).spring(120, 0, 20).delay_children(0).stagger(0.02).build()}>
            {
                ("// " + props.title).split("").map((v, i) =>
                    <motion.span key={i} variants={Anim.point([-10, 10]).build()} className={"h-3"} style={v != " " ? {display: "inline-block"} : {}}>
                        {v}
                    </motion.span>
                )
            }
        </motion.div>
        <motion.div variants={Anim.bounceY(5).spring(120, 0, 20).when().delay_children(0.2).build()} initial={"inactive"} animate={inView ? "active" : ""}  className="body w-100 row-ct" style={props.style ?? {}}>
            <div className="left" style={(props.single || screen.width < 768) ? {width: "100%"} : {width: "50%"}}>
                <motion.div variants={Anim.bounceY(10).delay_children(0.2).stagger(0.2).build()}
                            className="p"
                >
                    {props.children}
                </motion.div>
            </div>
            { !props.single && inView &&
                ( props.custom ??
                    <motion.div variants={Anim.bounceY(20).stagger(0.2).build()} className="right col-ct" style={(screen.width < 768) ? {width: "100%"} : {width: "50%", margin: "0 0.5rem"}}>
                        <motion.img variants={Anim.point([5, 20]).build()} src={props.img} className="card-img"/>
                        <motion.div variants={Anim.point([5, 20]).build()} className="fake-shadow"/>
                        <motion.div variants={Anim.point([5, 20]).build()} className="fake-shadow2"/>
                    </motion.div>
                )
            }
        </motion.div>
    </motion.div>
}
