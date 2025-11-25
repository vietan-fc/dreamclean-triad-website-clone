"use client";

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ChevronDown } from 'lucide-react';

const faqItems = [
  {
    value: 'item-1',
    question: 'Why is Dream & Clean so popular?',
    answer:
      "Dream & Clean is committed to going above and beyond to deliver trustworthy and effective cleaning \nservices. We employ modern cleaning methods and eco-friendly cleaning supplies to ensure your home or business is clean, organized, and sanitary. We provide customized cleaning \nservices because we recognize that each customer has different cleaning \nneeds.\n\nAt Dream & Clean, we are passionate about what we do and take pride in delivering exceptional cleaning \nservices that make a difference in the lives of our clients. Choose us for all your cleaning \nservice needs and experience the difference it makes when you partner with Dream & Clean.",
  },
  {
    value: 'item-2',
    question: 'How often do you provide cleaning services?',
    answer:
      'We understand that every home and business has different cleaning needs, which is why we offer flexible cleaning schedules. We can provide services daily, weekly, bi-weekly, or monthly, depending on your preferences and requirements. Our goal is to ensure that your space is always clean and well-maintained.',
  },
  {
    value: 'item-3',
    question: 'Do you use eco-friendly cleaning products?',
    answer:
      'Yes, we are committed to using eco-friendly cleaning products that are safe for your family, employees, and the environment. Our cleaning products are non-toxic, biodegradable, and free from harsh chemicals. We believe that using green cleaning products is essential for maintaining a healthy and sustainable environment.',
  },
  {
    value: 'item-4',
    question: 'Do you provide your own cleaning supplies and equipment?',
    answer:
      'Yes, we provide all necessary cleaning supplies and equipment for our services. Our team of professional cleaners arrives at your location fully equipped with everything they need to complete the job to the highest standard. Additionally, our cleaning products are environmentally friendly and safe for your home or workplace.\n\nIf you have any specific cleaning products or equipment that you would like us to use, please let us know and we will do our best to accommodate your request.',
  },
];

const FaqAccordion = () => {
    return (
        <section
            id="FAQs"
            className="relative bg-cover bg-center py-24 sm:px-8 md:px-16 px-4"
            style={{ backgroundImage: "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b3822b99-555b-49a8-bb83-c8cf38e53eaf-dreamandcleantriad-com/assets/images/pexels-photo-4239104-1920w-7.jpeg')" }}
        >
            <div className="absolute inset-0 bg-black/50 z-0"></div>
            <div className="relative z-10 max-w-[900px] mx-auto text-center">
                <h3 className="text-white text-[36px] italic font-semibold mb-4 font-display">
                    Frequently Asked Questions
                </h3>
                <p className="text-white text-xl mb-12 max-w-2xl mx-auto">
                    Have questions about our services? We've got answers below.
                </p>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqItems.map((item) => (
                        <AccordionItem
                            key={item.value}
                            value={item.value}
                            className="bg-white rounded-lg border-none overflow-hidden shadow-[0_2px_15px_rgba(0,0,0,0.08)]"
                        >
                            <AccordionTrigger className="group flex w-full items-center justify-between p-6 text-lg font-bold text-text-primary hover:no-underline text-left">
                                <span className="flex-1 pr-4">{item.question}</span>
                                <div className="h-8 w-8 rounded-full bg-primary flex-shrink-0 flex items-center justify-center">
                                    <ChevronDown className="h-5 w-5 text-white transition-transform duration-200 group-data-[state=open]:rotate-180" />
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-6 pt-0">
                                {item.answer.split('\n\n').map((paragraph, index) => (
                                    <p key={index} className="text-base text-text-secondary leading-relaxed text-left [&:not(:first-child)]:mt-4">
                                        {paragraph}
                                    </p>
                                ))}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default FaqAccordion;