import { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({title, info}) => {
    const [expand, setExpand] = useState(false);

    const expandQuestion = () => {
        setExpand(!expand)
    }

    return (
        <div className="question">
            <header>
                <h4>{title}</h4>
                <button onClick={() => expandQuestion()}>{expand ? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
            </header>
            <p className='text'>{expand && info}</p>
        </div>
    );
}

export default Question
