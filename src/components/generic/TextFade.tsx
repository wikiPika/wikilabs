import React from "react";
import {Anim} from "../../Animation";
import {motion} from "framer-motion";

const base = Anim.bounceY(50).spring(120, 0.5, 20).delay_children(0).stagger().build()
const bounce = Anim.bounceY(20).build()

export default function TextFade(props: {
    text: string,
    className?: string,
    parentAnim?: any,
    textAnim?: any,
    intoView?: boolean
}) {
    return <motion.div variants={props.parentAnim ?? base} initial="inactive" animate={props.intoView ? "" : "active"} whileInView={props.intoView ? "active" : ""} viewport={props.intoView ? {once: true} : {}}>
        {
            props.text.split("").map((v, i) =>
                <motion.span key={i} variants={props.textAnim ?? bounce} className={props.className ?? ""} style={v != " " ? {display: "inline-block"} : {}}>
                    {v}
                </motion.span>
            )
        }
    </motion.div>
}