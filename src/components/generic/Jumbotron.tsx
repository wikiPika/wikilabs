import React from "react";
import "../../css/core.scss";
import "../../css/subponent.scss";

export default function Jumbotron(props: {
    imgsrc: any,
    children: any,
}) {
    return <div className="jumbotron w-100 row-sc">
        <img className="jumbotron-img" src={props.imgsrc} />
        {props.children}
    </div>
}