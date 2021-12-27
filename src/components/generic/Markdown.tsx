import React, {useState} from "react";
import {motion} from "framer-motion";
import "../../css/core.scss";
import "../../css/subponent.scss";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import {Prism} from "react-syntax-highlighter";
import theme from "./custom-highlight-theme";

export default function Markdown(props: {
    bgColor?: string,
    id?: string,
    layoutId?: string,
    children?: any,
    className?: string,
    variants?: any,
    initial?: string,
    animate?: string,
    exit?: string,
    [otherProps: string]: any,
}) {

    return <motion.div variants={props.variants ?? {}} initial={props.initial ?? ""} animate={props.animate ?? ""} exit={props.exit ?? ""} style={{backgroundColor: props.bgColor}} className={"react-markdown w-100 f-shrink" + (props.className ?? "")} id={props.id ?? ""} layoutId={props.layoutId ?? ""} {...props.otherProps}
    >
        <ReactMarkdown skipHtml={false} className="rmd w-100" plugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} children={props.children}
                       components={{
                           code({node, inline, className, children, ref, ...props}) {
                               const match = /language-(\w+)/.exec(className || '')
                               return !inline && match ? (
                                   <Prism
                                       style={theme}
                                       language={match[1]}
                                       wrapLines
                                       {...props}>
                                       {String(children).replace(/\n$/, '')}
                                   </Prism>

                               ) : (
                                   <code className={className} {...props}>
                                       {children}
                                   </code>
                               )
                           }
                       }}
        />
    </motion.div>
}