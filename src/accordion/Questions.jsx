import "./Questions.css"
import {createContext, useState} from "react";
import Question from "./Question.jsx";
import {questions} from "./data.js"
export const QuestionsContext = createContext()
const Questions = () => {
    const [Active,setActive] = useState({})
    const handlerClick = (id)=>{
        if (Active[id] === true) {
            setActive({...Active,[id]:false})
        }
        else {
            setActive({...Active,[id]:true})
        }
    }
    return (
        <>
            <section className={"questions"}>
            <h1 className={"section-title"}>Questions</h1>
                {
                    questions.map((questionObj,i)=>{
                        return (
                            <QuestionsContext.Provider value={{questionObj,handlerClick,Active}} key={i}>
                                <Question />
                            </QuestionsContext.Provider>
                        )
                    })
                }
            </section>
        </>
    )
}
export default Questions