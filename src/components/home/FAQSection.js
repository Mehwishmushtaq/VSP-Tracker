import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Can VSP Tracker Be Customized For My Company And Operation?",
    answer:
      "Yes. We understand that each customer needs an individual approach. Our team is ready to customize elements or the entire solution specifically to your company’s individual requirements."
  },
  {
    question: "How Difficult Is It To Set Up The VSP Tracker System?",
    answer: "Setup is straightforward with the help of our support team. We provide step-by-step guidance to ensure a smooth implementation."
  },
  {
    question: "Do You Have A Minimum Sign-Up Term?",
    answer: "There is no minimum sign-up term. Our service is flexible and can adapt to your company’s changing needs."
  },
  {
    question: "Is There A Minimum Number Of Users Required?",
    answer: "No, VSP Tracker is scalable whether you have one user or a large team."
  },
  {
    question: "Can VSP Tracker Integrate With Custom Software Providers?",
    answer: "Yes, our platform is designed to integrate seamlessly with other software providers to support your operations."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <p className="text-sm text-green-700 font-medium text-center mb-2">
        SOLVE YOUR QUIRIES
      </p>
      <h2 className="text-2xl font-bold text-center mb-6">
        FREQUENTLY ASKED QUESTIONS
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-green-600 rounded-md shadow-sm"
          >
            <button
              className="w-full text-left p-4 flex justify-between items-center font-medium"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-green-600" />
              ) : (
                <ChevronDown className="h-5 w-5 text-green-600" />
              )}
            </button>
            {openIndex === index && (
              <div className="p-4 pt-0 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
