'use client';
import React, { useState } from 'react';
import Image from 'next/image';

type Question = {
  id: number;
  question: string;
  answer: string;
};

export default function FAQ() {
  const [openQuestionId, setOpenQuestionId] = useState<number | null>(null);

  const toggleQuestion = (id: number) => {
    setOpenQuestionId(openQuestionId === id ? null : id);
  };

  const questions: Question[] = [
    {
      id: 1,
      question: "How do i know if a product is available in boutiques?",
      answer: "Remember you can query the status of your orders any time in My orders in the My account section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your e-mail address and order number."
    },
    {
      id: 2,
      question: "How can i find the prices or get other information about chanel products?",
      answer: "Remember you can query the status of your orders any time in My orders in the My account section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your e-mail address and order number."
    },
    {
      id: 3,
      question: "How many collections come out every year?",
      answer: "Remember you can query the status of your orders any time in My orders in the My account section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your e-mail address and order number."
    },
    {
      id: 4,
      question: "Are all of the fashion collections features on the website?",
      answer: "Remember you can query the status of your orders any time in My orders in the My account section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your e-mail address and order number."
    },
    {
      id: 5,
      question: "Where do i find products that i have seen in magazines or Social Media?",
      answer: "Remember you can query the status of your orders any time in My orders in the My account section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your e-mail address and order number."
    }
  ];

  return (
    <div className="lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4">      
      <div className="lg:w-8/12 w-full mx-auto">
        {questions.map((q) => (
          <React.Fragment key={q.id}>
            <hr className="w-full lg:mt-10 my-8" />
            
            <div className="w-full md:px-6">
              <div 
                className="flex justify-between items-center w-full cursor-pointer"
                onClick={() => toggleQuestion(q.id)}
              >
                <div>
                  <p className={`flex items-center dark:text-white text-base text-gray-800 ${openQuestionId === q.id ? 'font-semibold' : 'font-medium'}`}>
                    <span className="lg:mr-6 mr-4 dark:text-white lg:text-2xl font-semibold">
                      Q{q.id}.
                    </span>
                    {q.question}
                  </p>
                </div>
                
                {/* Botón de toggle */}
                <button 
                  aria-label={openQuestionId === q.id ? "Hide answer" : "Show answer"}
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                >
                  <Image
                    width={20}
                    height={20}
                    className={`transition-transform ${openQuestionId === q.id ? 'rotate-180' : ''} dark:hidden`}
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
                    alt="toggle"
                  />
                  <Image
                    width={20}
                    height={20}
                    className={`transition-transform ${openQuestionId === q.id ? 'rotate-180' : ''} hidden dark:block`}
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2dark.svg"
                    alt="toggle dark"
                  />
                </button>
              </div>
              
              {/* Respuesta (condicional) */}
              {openQuestionId === q.id && (
                <div className="mt-6 w-full">
                  <p className="text-base leading-6 text-gray-600 dark:text-gray-300 font-normal">
                    {q.answer}
                  </p>
                </div>
              )}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}