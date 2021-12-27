import React, {useEffect} from "react";
import {motion} from "framer-motion"
import {animBounceRight, transitSpring} from "../../misc/Animations";
import "../../css/core.scss";
import "../../css/home.scss";
import Jumbotron from "../generic/Jumbotron";
import JumbotronImage from "../../img/arknights-home.jpg";
import FadeInOnce from "../generic/FadeInOnce";
import Button from "../generic/Button";
import {sinInterpolate} from "../../misc/Misc";

export default function Home(props: {}) {

    return <motion.div className="home-top col-cc"
                       variants={animBounceRight(-1 * window.innerWidth, 200, 0, 50, 1)}
                       initial="inactive"
                       whileInView="active"
                       exit="inactive"
                       viewport={{once: true}}>
        <Jumbotron imgsrc={JumbotronImage}>
            <FadeInOnce duration={1} className="main-banner row-sc">
                <div className="col-ss h-100">
                    <div className="font-400">
                        Welcome to wikiLabs
                    </div>
                    <div className="font-150">
                        Stay awhile and explore.
                    </div>
                    <div className="f-grow"/>
                    <Button style={{marginBottom: "1rem"}}>{"</>"}</Button>
                </div>
            </FadeInOnce>
        </Jumbotron>

        <div className="intro w-100 col-sc">
            <div className="wave" />
            <div className="row-cc">
                <motion.img className="profile" whileHover={{scale: 1.05, transition: transitSpring(200, 0, 10)}} variants={animBounceRight(-10, 100, 0.5, 10)}
                            initial="inactive" whileInView="active" viewport={{once: true}}
                            src={"https://static.zerochan.net/Weedy.full.2982430.jpg"}/>
                <div className="intro-fan col-cs">
                    {
                        introBlips.map((value, ind, arr) =>
                            <motion.div key={"" + ind} variants={animBounceRight(-10, 100, 0.5, 10)} initial="inactive"
                                        whileInView="active" whileHover={{color: "#8993d7", textShadow: "1px 1px 0 black"}} viewport={{once: true}} className="intro-fan-blip col-cs"
                                        style={{marginLeft: Math.round(sinInterpolate(48, ind, arr.length - 1))}}>
                                <div className="intro-fan-blip-title font-70">
                                    {value.title}
                                    <div className="h-bar"/>
                                </div>
                                {value.desc}
                            </motion.div>
                        )
                    }
                </div>
            </div>
        </div>

        <div className="more w-100 col-cc">

        </div>

    </motion.div>
}

const introBlips: Array<IntroBlipData> = [
    {
        title: "Name",
        desc: "Jackie Liu",
    },
    {
        title: "Alma Mater",
        desc: "Princeton University",
    },
    {
        title: "Year",
        desc: "Freshman (1st)",
    },
    {
        title: "Major",
        desc: "BSE, Computer Engineering",
    },
    {
        title: "Occupation",
        desc: "Freelance Programmer",
    },
]

type IntroBlipData = {
    title: string,
    desc: string,
}