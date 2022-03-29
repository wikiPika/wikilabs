import React, {useEffect} from "react";
import "../../scss/core.scss";
import "../../scss/pages.scss";
import topBanner from "../../img/arknights-home.jpg"
import {Anim} from "../../Animation";
import {motion} from "framer-motion";
import TextFade from "../generic/TextFade";

const topBannerParent = new Anim().spring(120, 0, 20).delay_children(0.4).stagger().build()
const topBannerLetters = Anim.origin([-5, 10]).build()
const topBannerSubtextParent = new Anim().spring(120, 0, 20).delay_children(0.6).stagger(0.03).build()

const sideBounceParent = new Anim().spring(120, 0, 20).delay_children(0.5).stagger(0.03).build()
const sideBounceLetters = Anim.origin([-10, 5]).build()

export default function Home(props: {}) {

    return <div className="apex col-sc w-100">
        <div className="top-banner page">
            <motion.img variants={Anim.bounceY(-100).spring(120, 0, 20).build()}
                        initial="inactive" animate="active"
                        src={topBanner} className="top-banner-img"/>
            <div className="top-container col-se w-100">
                <TextFade text={"Landing..."} parentAnim={topBannerParent} textAnim={topBannerLetters} className="h-1"/>
                <TextFade text={"Where progress is made, I think."} parentAnim={topBannerSubtextParent} textAnim={topBannerLetters} className="h-6" />
            </div>
        </div>
        <div className="page col-ss">
            <div className="w-50">
                <TextFade intoView text={"// Introduction"} parentAnim={sideBounceParent} textAnim={sideBounceLetters} className="h-3" />
                <TextFade intoView text={"Hi, I'm Jackie. I'm from Vernon Hills, IL. Who are you?"} parentAnim={sideBounceParent} textAnim={sideBounceLetters} className="p" />
            </div>
        </div>
    </div>
}