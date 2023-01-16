import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import "./buttons.scss";

export default function RenderButtons( props ){
    return <motion.div className="details__links">
        { props.buttons.map( (button, index ) => {
            return <>
            { button.link.type=="page" && 
                <Link to={ button.link.url } key={`link_key_${index}`}>
                    <div className={"button__"+button.style}>
                        <span>{button.label}</span>
                        <Icon icon={button.icon} />
                    </div>
                </Link> }
            { button.link.type=="url" && 
                <a href={ button.link.url } target={ button.target } noreferrer key={`link_key_${index}`}> 
                    <div className={"button__"+button.style}>
                        <span>{button.label}</span>
                        <Icon icon={button.icon} />
                    </div>
                </a> }
            </>
        })} 
    </motion.div>
}
