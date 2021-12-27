import React, {useState} from "react";
import "../../css/core.scss";
import "../../css/subponent.scss";
import {motion} from "framer-motion";
import {transitSpring} from "../../misc/Animations";

export default function Button(props: {
    size?: number;
    fontSize?: number;
    onClick?: Function;
    id?: number;
    ref?: React.Ref<HTMLDivElement>;
    className?: string;
    style?: any;
    children?: any;
    [otherProps: string]: any;
}) {
    return <motion.div className={`button ${props.className ?? ""}`}
                       ref={props.ref}
                       style={Object.assign({
                           width: (props.size ?? 6) + "rem",
                           fontSize: (props.fontSize ?? 100) + "%",
                       }, (props.style ?? {}))}
                       id={props.id ?? ""}
                       whileHover={{
                           backgroundColor: "rgba(0, 0, 0, 0.5)",
                           transition: transitSpring(5000, 0, 100, ),
                       }}
                       onClick={props.onClick ?? undefined}
                       {...props.otherProps}>
        {props.children}
    </motion.div>
}