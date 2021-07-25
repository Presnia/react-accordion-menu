import {useRef} from "react";
import './AccordionItem.css';

const AccordionItem = ({ faq: {question, answer}, active, onToggle }) => {
    const contentElement = useRef();

    return (
        <li className={`accordion_item ${active ? 'active' : ''}`}>
            <button className="button" onClick={onToggle}>
                {question}
                <span className="control">{active ? '-' : '+'}</span>
            </button>
            <div
                ref={contentElement}
                className={`answer_wrapper ${active ? 'open' : ''}`}
                style={
                    active ? { height: contentElement.current.scrollHeight } : { height: '0px'}
                }
            >
                <div className="answer">{answer}</div>
            </div>
        </li>
    )
};

export default AccordionItem;