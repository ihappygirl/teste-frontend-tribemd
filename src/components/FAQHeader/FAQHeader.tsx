import React from "react";
import styles from "./FAQHeader.module.css";

export const FAQHeader = () => {
    return (
        <header className={`${styles.heading} grid grid-cols-1 gap-4 text-center`}>
            <h1 className={`${styles.headingTitle}`}>Perguntas Frequentes</h1>
            <p className="my-4">Confira as dúvidas mais comuns e encontre respostas</p>
        </header>
    )
};