"use client"

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from "@/components/Container";
import {Button} from "@nextui-org/react";
import Link from "next/link";

const testimonials = [
    { quote: "We had an attempted break in on Sunday night...", cite: "— Mr and Mrs.Smith, Rushden" },
    { quote: "Our alarm bell kept ringing for no reason, Onyx came out within the hour and did a service on the system. Fast and efficient very pleased.", cite: "— Mr.Croft, Northampton" },
    { quote: "Thanks again for your hard work fixing our ever ending problems!", cite: "Mr.Yale, Rushden"}
];

const Testimonials = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial((prevActiveTestimonial) =>
                (prevActiveTestimonial + 1) % testimonials.length
            );
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className={`py-16 bg-onyx-dark-gray text-white border-t border-red-500`}>
            <Container>
                <div className={`mx-auto`}>
                    <AnimatePresence>
                        <motion.blockquote
                            key={activeTestimonial}
                            initial={{opacity: 0, position: 'absolute'}}
                            animate={{opacity: 1, position: 'relative'}}
                            exit={{opacity: 0, position: 'absolute'}}
                            transition={{duration: 0.5}}
                            className="text-lg leading-7 text-slate-100"
                            style={{top: 0, left: 0, right: 0}}
                        >
                            &quot;{testimonials[activeTestimonial].quote}&quot;
                            <cite className={`block mt-5 text-base leading-7 text-slate-300`}>
                                {testimonials[activeTestimonial].cite}
                            </cite>
                        </motion.blockquote>
                    </AnimatePresence>
                </div>
                <Button
                    as={Link}
                    href={"https://www.yell.com/biz/onyx-security-ltd-rushden-7535344/"}
                    target={"_blank"}
                    variant={"bordered"}
                    color={"danger"}
                    className={`mt-5`}
                >
                    <div>
                        Check out more reviews on <strong>Yell.com</strong>
                    </div>
                </Button>
            </Container>
        </section>
    );
}

export default Testimonials;
