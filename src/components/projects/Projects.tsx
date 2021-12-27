import React, {useEffect, useState} from "react";
import {motion, AnimateSharedLayout, AnimatePresence} from "framer-motion"
import {animBounceRight, animBounceUp, animOpacity, transitSpring} from "../../misc/Animations";
import "../../css/core.scss";
import "../../css/projects.scss";
import {projectFiles, firstPage} from "./Pages";
import Markdown from "../generic/Markdown";

export default function Projects(props: {

}) {

    const [currentProject, setCurrentProject] = useState(firstPage);

    return (
            <motion.div className="projects-apex row-ct w-100 h-100"
                        variants={animBounceRight(-1 * window.innerWidth, 200, 0, 50,1)}
                        initial={"inactive"}
                        whileInView="active"
                        exit="inactive"
                        viewport={{once: true}}
            >
                    <motion.div className="projects-bar col-sc">
                        {
                            projectFiles.map((value, index) => {
                                    if (value[0].charAt(0) !== '>') return (<motion.div onClick={() => setCurrentProject(index)} key={"" + index} id={"" + index} layout
                                                className={"project-tab row-sc " + (currentProject === index ? "selected" : "")}
                                                whileHover={{
                                                    backgroundColor: "rgba(0, 0, 0, 0.2)",
                                                    transition: transitSpring(1000, 0, 100)
                                                }}>
                                        {value[0]}
                                    </motion.div>)
                                    else return <div className="project-tab-index font-90" key={"" + index}>{value[0].substring(1)}</div>
                                }
                            )
                        }
                    </motion.div>
                    <motion.div layout className="project-display row-ss w-100">
                        <AnimatePresence exitBeforeEnter>
                            {
                                projectFiles.map((value, index) => {
                                    if (currentProject === index) return <Markdown variants={animOpacity(0.5)}
                                                                                   initial="inactive"
                                                                                   animate="active"
                                                                                   exit="inactive"
                                                                                   key={"" + value[0]}
                                                                                   layoutId={value[0]}
                                    >{value[1]}</Markdown>
                                })
                            }
                        </AnimatePresence>
                    </motion.div>
            </motion.div>
    )
}