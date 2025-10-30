import React from "react";
import { FAQHeader } from "../../components/FAQHeader/FAQHeader";
import { FAQS } from "../../data/FAQQuestions";
import { FAQAccordion } from "../../components/FAQAccordion/FAQAccordion";

const Breadcrumb = (
    <nav aria-label="Breadcrumb" className="w-10/12 py-5 sm:w-11/12 md:w-full lg:w-11/12 xl:w-9/12 2xl:w-8/12">
      <p>Início {'>'} Central de Ajuda {'>'} Perguntas Frequentes</p>
    </nav>
);

export const FAQ = () => {
  return (
    <div>
        <FAQHeader />

        <div className="w-full py-14 flex flex-col items-center">
            {Breadcrumb}

            <div className="w-10/12 grid gap-0.5 grid-cols-1 sm:w-11/12 md:w-full lg:w-11/12 xl:w-9/12 2xl:w-8/12">
                {
                    FAQS.map((item) => (
                        <FAQAccordion key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    </div>
  );
};