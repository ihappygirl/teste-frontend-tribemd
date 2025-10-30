import React, { useState } from "react";
import styles from "./FAQAccordion.module.css"
import { FAQItem } from "../../data/FAQQuestions";
import { FaPlus, FaMinus } from "react-icons/fa";

export const FAQAccordion = ({ item }: { item: FAQItem }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return(
        <div key={item.id}>
            <button 
                className={`rounded-xl py-5 px-3 w-full flex flex-row items-center ${styles.accordionTitle} ${isOpen ? styles.activeAccordion : styles.inactiveAccordion}`} 
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{isOpen ? <FaMinus /> : <FaPlus />}</span>
                <span className="px-2">{item.question}</span>
            </button>
            
            {isOpen && (
                <div className="p-4">
                    {item.answer.map((paragraph, index) => (
                        <p key={index} className="my-4">
                            {paragraph}
                        </p>
                    ))}
                    {item.image &&
                        <img src={item.image} alt={item.question}/>
                    }
                </div>
            )}
        </div>
    )
};