import "./Questions.css"
import {QuestionsContext} from "./Questions.jsx";
import {useContext} from "react";
import {AiOutlineMinus} from "react-icons/ai";
import {AiOutlinePlus} from "react-icons/ai";


const Question = () => {
    const {questionObj,handlerClick,Active} = useContext(QuestionsContext)
    const {id,title,info} = questionObj
    return (
        <article className={"question"}>
            <h4 className={"title"}>{title}</h4>
            <button className={"iconToggle"} onClick={()=>handlerClick(id)}>{Active[id] ? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
            {Active[id] ? <div className={"info"}>{info}</div> : "" }
        </article>
    )
}

export default Question