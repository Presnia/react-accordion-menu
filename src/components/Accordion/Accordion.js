import { useState } from "react";
import { faqs } from "../../data";
import AccordionItem from "../AccordionItem/AccordionItem";
import './Accordion.css';

const Accordion = () => {
    const [clicked, setClicked] = useState('0');

    const handleToggle = index => {
        if (clicked === index) {
            return setClicked('0');
        }
        setClicked(index);
    };

    return (
        <ul className='accordion'>
            {faqs.map((faq, index) => (
                <AccordionItem
                    key={index}
                    faq={faq}
                    active={clicked === index}
                    onToggle={() => handleToggle(index)}
                />
            ))}
        </ul>
    );
};

export default Accordion;