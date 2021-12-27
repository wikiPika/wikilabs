import React from "react";
import {motion} from "framer-motion"
import {animBounceRight, animBounceUp} from "../../misc/Animations";
import "../../css/core.scss";

export default function FadeInOnce(props: {
    duration?: number,
    children: any,
    className: string,
    [otherProps: string]: any,
}) {

    return <motion.div variants={animBounceUp(20, 200, props.duration ?? 0.5, 100, 2)}
                       initial="inactive"
                       whileInView="active"
                       className={props.className}
                       viewport={{once: true}}
                       {...props.otherProps}
    >
        {props.children}
    </motion.div>
}