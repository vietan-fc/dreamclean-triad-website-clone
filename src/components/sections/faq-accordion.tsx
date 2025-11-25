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
    question: 'What makes Dream & Clean stand out?',
    answer:
      "Dream & Clean is dedicated to exceeding expectations by providing reliable and efficient cleaning \nsolutions. We utilize contemporary cleaning techniques and environmentally safe cleaning products to guarantee your residence or workplace is spotless, tidy, and hygienic. We deliver personalized cleaning \nsolutions because we understand that every client has unique cleaning \nrequirements.\n\nAt Dream & Clean, we love what we do and are proud of offering superior cleaning \nsolutions that positively impact our clients' lives. Select us for all your cleaning \nsolution requirements and discover the difference it makes when you work with Dream & Clean.",
  },
  {
    value: 'item-2',
    question: 'What is the frequency of your cleaning services?',
    answer:
      'We recognize that each residence and business has unique cleaning requirements, which is why we provide adaptable cleaning timetables. We can deliver services on a daily, weekly, bi-weekly, or monthly basis, based on your choices and needs. Our objective is to make sure your area remains spotless and properly maintained.',
  },
  {
    value: 'item-3',
    question: 'Are your cleaning products environmentally safe?',
    answer:
      'Absolutely, we are devoted to utilizing environmentally safe cleaning products that protect your loved ones, workforce, and the planet. Our cleaning solutions are chemical-free, naturally decomposing, and contain no aggressive substances. We are convinced that employing sustainable cleaning solutions is crucial for preserving a wholesome and eco-conscious environment.',
  },
  {
    value: 'item-4',
    question: 'Do you bring your own cleaning materials and tools?',
    answer:
      'Yes, we supply all required cleaning materials and tools for our services. Our group of expert cleaners comes to your site completely prepared with all items necessary to finish the work at the highest level. Furthermore, our cleaning solutions are planet-friendly and safe for your residence or business location.\n\nIf there are particular cleaning solutions or tools you prefer us to utilize, please inform us and we will strive to fulfill your preference.',
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
                    Common Questions Answered
                </h3>
                <p className="text-white text-xl mb-12 max-w-2xl mx-auto">
                    Curious about our offerings? Find answers here.
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