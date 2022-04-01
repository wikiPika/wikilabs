import React, {useEffect} from "react";
import "../../scss/core.scss";
import "../../scss/pages.scss";
import topBanner from "../../img/arknights-home.jpg"
import {Anim} from "../../Animation";
import {motion} from "framer-motion";
import TextFade from "../generic/TextFade";
import Card from "../generic/Card";
import {useScreen} from "../layout/ScreenContext";

const topBannerParent = new Anim().spring(120, 0, 20).delay_children(0.4).stagger().build()
const topBannerLetters = Anim.point([-5, 10]).build()
const topBannerSubtextParent = new Anim().spring(120, 0, 20).delay_children(0.6).stagger(0.03).build()

const sideBounceParent = new Anim().spring(120, 0, 20).delay_children(0.5).stagger(0.03).build()
const sideBounceLetters = Anim.point([-10, 5]).build()

const cardParent = new Anim().spring(120, 0, 20).delay_children(0.6).stagger(0.3).when(true).build()

const barParent = new Anim().spring(120, 1, 20).delay_children(1.2).stagger(0.2).build()
const barAnim = Anim.bounceY(10).build()

const barParent2 = new Anim().spring(120, 1, 20).delay_children(1.6).stagger(0.2).build()


export default function Home(props: {}) {

    const screen = useScreen();

    return <div className="apex col-sc w-100">
        <div className="top-banner page">
            <motion.img variants={Anim.bounceY(-100).spring(120, 0, 20).build()}
                        initial="inactive" animate="active"
                        src={topBanner} className="top-banner-img"/>
            <motion.div variants={Anim.bounceY(-100).spring(120, 0.2, 20).build()}
                        initial="inactive" animate="active" className="fake-top-shadow"/>
            <motion.div variants={Anim.bounceY(-100).spring(120, 0.4, 20).build()}
                        initial="inactive" animate="active" className="fake-top-shadow2"/>
            <div className="top-container col-se w-100">
                <TextFade text={"Jackie Liu"} parentAnim={topBannerParent} textAnim={topBannerLetters} className="h-1"/>
                <TextFade text={"Freelance programmer, composer, student"} parentAnim={topBannerSubtextParent} textAnim={topBannerLetters} className="h-6" />
            </div>
        </div>
        <motion.div style={{paddingTop: "1rem"}}className="page col-ss" variants={cardParent} initial="inactive" animate="active">
            <Card title={"Introduction"} img={"https://i.ytimg.com/vi/N3jubvVvLRc/maxresdefault.jpg"}>
                Hi, I'm Jackie, a high school senior from Vernon Hills High School. I'm a programmar, scholar, and aspiring engineer. Wherever I go, I aim to bring forth tides of determination and progress through strong leadership and creativity.
                <br/>
                <br/>
                On an unrelated sidenote, don't you think it's weird that the saying goes "the world is your oyster"? That's not too considerate to those who have shellfish allergies. Plus, most people don't carry swords around.
                <br/>
                <br/>
                Reach me at any of the following:
                <br/>
                <strong>Phone:</strong> <a href={"tel:+1847-922-0269"}>+1 847-922-0269</a>
                <br/>
                <strong>Email:</strong> <a href={"mailto:liuj731@gmail.com"}>liuj731@gmail.com</a>
            </Card>
            <Card single style={{padding: 0}} title={"Experience"} img={"https://i.ytimg.com/vi/N3jubvVvLRc/maxresdefault.jpg"} >
                <Bar>
                    <div className="bar-top">
                        <div>
                            <strong>Kiwoon Learning</strong>, Lead Web Developer
                        </div>
                        <div>
                            May 2021 - Present
                        </div>
                    </div>
                    <ul>
                        <li>Co-founder of financial education startup service, Kiwoon Learning</li>
                        <li>Designed entire website from scratch following modern UX language conventions</li>
                        <li>Website is at <a target="_blank" href={"https://www.kiwoonlearning.com"}>www.kiwoonlearning.com</a></li>
                    </ul>
                </Bar>
                <Bar>
                    <div className="bar-top">
                        <div>
                            <strong>VHHS CS Club</strong>, Lead Web Developer
                        </div>
                        <div>
                            Aug 2021 - Present
                        </div>
                    </div>
                    <ul>
                        <li>Officer of CS Club, jointly responsible for organizing events</li>
                        <li>Designed website for recent district-wide hackathon, the <a target="_blank" href={"https://d128steam.web.app"}>D128 ST3AM Showcase</a></li>
                    </ul>
                </Bar>
                <Bar>
                    <div className="bar-top">
                        <div>
                            <strong>VHHS Science Olympiad</strong>, Event Captain
                        </div>
                        <div>
                            Aug 2019 - Present
                        </div>
                    </div>
                    <ul>
                        <li>Engage with a variety of science topics through written exams and hands-on assignments</li>
                        <li>Foster engagement with science through establishing sources of knowledge for each event</li>
                        <li>(Events: Sounds of Music, Astronomy, Chem Lab, Experimental Design, Codebusters, Trajectory, Wifi Lab, It's About Time)</li>
                    </ul>
                </Bar>
                <Bar>
                    <div className="bar-top">
                        <div>
                            <strong>VHHS Robotics</strong>, Team Captain
                        </div>
                        <div>
                            Aug 2018 - Dec 2021
                        </div>
                    </div>
                    <ul>
                        <li>Implemented creative solutions to physical problems through hands-on engineering with Lego NXT</li>
                        <li>Led small group to success in various autonomous and remote-controlled tasks</li>
                    </ul>
                </Bar>
            </Card>
            <Card single style={{padding: 0}} title={"Skillset"} img={"https://i.ytimg.com/vi/N3jubvVvLRc/maxresdefault.jpg"}>
                <Bar>
                    <div className="bar-top">
                        <div>
                            <strong>Web Stack: TS/React/Node.js</strong>
                        </div>
                        <div className="row-cc">
                            Proficient
                            <Progress amount={0.7} />
                        </div>
                    </div>
                    <ul>
                        <li>Self-taught over one school semester.</li>
                        <li> Familiar with Framer Motion, React Router, and other supporting libraries.</li>
                    </ul>
                </Bar>
                <Bar>
                    <div className="bar-top">
                        <div>
                            <strong>Java</strong>
                        </div>
                        <div className="row-cc">
                            Moderate
                            <Progress amount={0.5} />
                        </div>
                    </div>
                    <ul>
                        <li>Learned through studying AP Computer Science A at Edhesive</li>
                        <li>Somewhat familiar with JavaFX, Maven, and deployment of executables through NetBeans</li>
                    </ul>
                </Bar>
                <Bar>
                    <div className="bar-top">
                        <div>
                            <strong>Python</strong>
                        </div>
                        <div className="row-cc">
                            Novice
                            <Progress amount={0.4} />
                        </div>
                    </div>
                    <ul>
                        <li>Learned through dual enrolling in Data Structures @ Illinois Institute of Technology</li>
                        <li>Familiar with basic Python idiosyncrasies and implementation of low-level data structures</li>
                    </ul>
                </Bar>
                <Bar>
                    <div className="bar-top">
                        <div>
                            <strong>Unity + C#</strong>
                        </div>
                        <div className="row-cc">
                            Novice
                            <Progress amount={0.4} />
                        </div>
                    </div>
                    <ul>
                        <li>Self-studied Unity through Udemy and other online resources</li>
                        <li>Some knowledge of Unity game engine. C# knowledge is mostly transferred from Java</li>
                    </ul>
                </Bar>
                <Bar>
                    <div className="bar-top">
                        <div>
                            <strong>Tech Literacy</strong>
                        </div>
                        <div className="row-cc">
                            Proficient
                            <Progress amount={0.8} />
                        </div>
                    </div>
                    <ul>
                        <li>Extensive experience with debugging software and hardware situations</li>
                        <li>Some knowledge of GNU Bash and Linux Terminal through Raspberry Pi tinkering</li>
                        <li>Have built several custom computers</li>
                    </ul>
                </Bar>
                <Bar>
                    <div className="bar-top">
                        <div>
                            <strong>Spanish Language</strong>
                        </div>
                        <div className="row-cc">
                            Moderate
                            <Progress amount={0.55} />
                        </div>
                    </div>
                    <ul>
                        <li>Five years of Spanish language schooling up to AP Spanish Language and Culture</li>
                        <li>Attained 5 on the AP exam and earned a Seal of Biliteracy</li>
                    </ul>
                </Bar>
                <Bar>
                    <div className="bar-top">
                        <div>
                            <strong>Chinese Language</strong>
                        </div>
                        <div className="row-cc">
                            Moderate
                            <Progress amount={0.45} />
                        </div>
                    </div>
                    <ul>
                        <li>Native Chinese, immigrated from Fujian at 5 years of age</li>
                        <li>Can read and speak with fluency, but cannot handwrite. Can use pinyin.</li>
                    </ul>
                </Bar>
            </Card>
            <Card single style={{padding: 0}} title={"Awards and Accolades"}>
                <Bar>
                    <div className="bar-top">
                        <div>
                            <strong>Amazon Future Engineer Scholarship</strong>
                        </div>
                        <div className="row-cc">
                            Mar 2022
                        </div>
                    </div>
                    <ul>
                        <li>Prestigious scholarship that includes $40,000 in tuition funding and a paid internship to Amazon after freshman year of college</li>
                    </ul>
                </Bar>
                <Bar>
                    <div className="bar-top">
                        <div>
                            <strong>National Merit Scholarship Winner</strong>
                        </div>
                        <div className="row-cc">
                            Mar 2022
                        </div>
                    </div>
                    <ul>
                        <li>$2,500 scholarship given to those who scored particularly well on the PSAT/NMSQT</li>
                    </ul>
                </Bar>
                <Bar>
                    <div className="bar-top">
                        <div>
                            <strong>Illinois State Scholar</strong>
                        </div>
                        <div className="row-cc">
                            Feb 2022
                        </div>
                    </div>
                    <ul>
                        <li>Identified as high-achieving based on standardized testing, class rank, and GPA.</li>
                    </ul>
                </Bar>
                <Bar>
                    <div className="bar-top">
                        <div>
                            <strong>US Presidential Scholar Candidate</strong>
                        </div>
                        <div className="row-cc">
                            Jan 2022
                        </div>
                    </div>
                    <ul>
                        <li>Established to recognize and honor the US's most distinguished graduating high school seniors.</li>
                        <li>Candidates were selected based on standardized testing scores and nominations from partner organizations</li>
                    </ul>
                </Bar>
                <Bar>
                    <div className="bar-top">
                        <div>
                            <strong>QuestBridge National Match Scholar</strong>
                        </div>
                        <div className="row-cc">
                            Dec 2021
                        </div>
                    </div>
                    <ul>
                        <li>Exhaustive and prestigious full-ride scholarship application for low-income, high-achieving students</li>
                        <li>Matched with Princeton University</li>
                    </ul>
                </Bar>
            </Card>
            <Card single style={{padding: 0}} title={"Education"}>
                <Bar>
                    <div className="bar-top">
                        <div>
                            <strong>Princeton University</strong>, B.S.E. Computer Engineering
                        </div>
                        <div className="row-cc">
                            Aug 2022 - May 2026
                        </div>
                    </div>
                </Bar>
                <Bar>
                    <div className="bar-top">
                        <div>
                            <strong>Illinois Institute of Technology</strong>
                        </div>
                        <div className="row-cc">
                            Spring 2022
                        </div>
                    </div>
                    <ul>
                        <li>Dual enrollment in CS 331: Data Structures.</li>
                    </ul>
                </Bar>
                <Bar>
                    <div className="bar-top">
                        <div>
                            <strong>College of Lake County</strong>
                        </div>
                        <div className="row-cc">
                            Fall 2021, Spring 2022
                        </div>
                    </div>
                    <ul>
                        <li>Dual enrollment in MTH 244: Discrete Mathematics.</li>
                        <li>Dual enrollment in MTH 246: Calculus and Analytic Geometry III.</li>
                    </ul>
                </Bar>
                <Bar>
                    <div className="bar-top">
                        <div>
                            <strong>Stanford Pre-Collegiate Studies</strong>
                        </div>
                        <div className="row-cc">
                            Summer 2021, Spring 2022
                        </div>
                    </div>
                    <ul>
                        <li>Dual enrollment in XP645: Light and Heat.</li>
                        <li>Dual enrollment in XM511: Linear Algebra.</li>
                    </ul>
                </Bar>
                <Bar>
                    <div className="bar-top">
                        <div>
                            <strong>Vernon Hills High School</strong>
                        </div>
                        <div className="row-cc">
                            Aug 2018 - May 2022
                        </div>
                    </div>
                    <ul>
                        <li><strong>GPA</strong>: 4.53</li>
                        <li><strong>SAT</strong>: 1580 (780 + 800)</li>
                        <li><strong>ACT</strong>: 36 (36/36/36/36) </li>
                        <li><strong>AP</strong>: Human Geography (5), World History (5), Computer Science Principles (5), Physics 1 (5), Physics 2 (4), Physics C: Mech (5), Physics C: E&M (5), Calculus BC (5/5), Music Theory (5/5), Spanish Language and Culture (5), Computer Science A (5), Seminar (5), Biology (5), Chemistry (5)</li>
                    </ul>
                </Bar>
            </Card>
        </motion.div>
    </div>
}

function Bar(props: {
    children: any,
}) {
    return <motion.div className="w-100 bar" variants={barAnim}>
        {props.children}
    </motion.div>
}

function Progress(props: {
    amount: number,
}) {
    return <motion.div className="progress-bar">
        <motion.div variants={new Anim().add("left", "-100%", `-${100 - props.amount * 100}%`).build()} className="progress-slider" />
    </motion.div>
}
