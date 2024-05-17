"use client"

import Container from "@/components/Container";
import {Accordion, AccordionItem} from "@nextui-org/react";

const FaqPage = () => {

    const faqs = [
        {
            id: 1,
            question: "What is a Nacoss/SSAIB alarm?",
            answer:
                "While anyone can start an alarm company, security industry certification bodies like NSI and SSAIB enforce strict guidelines. These include CRB checks for engineers and mandatory insurance. Additionally, these bodies conduct annual inspections to ensure high-standard work and adherence to regulations. Insurance companies often require systems to be installed by certified companies, which also ensures eligibility for local police response. Onyx Security is SSAIB certified, a certification regulated by UKAS.",
        },
        {
            id: 2,
            question: "How often should I get my alarm system serviced if at all?",
            answer:
                "Like all technology, security systems can degrade over time. Annual professional servicing ensures they remain effective in protecting your family and property. Also, if your home insurance offers a discount for having an operational alarm system, they typically require annual servicing by a certified company.",
        },
        {
            id: 3,
            question: "What if my alarm activates in the early hours of the morning and I cannot stop it?",
            answer:
                "Onyx Security Ltd has engineers on call 24/7, 365 days a year. Should you have any problems with your system even if we didn't install it just give our office a call 24/7 and we will help you.",
        },
        {
            id: 4,
            question: "If you take over the maintenance of my security system, will the previous security company take my equipment away?",
            answer:
                "If you own your security system outright or have taken over one due to a property move, the equipment is yours. However, systems installed at a low cost under a long-term contract may still belong to the provider until the contract ends. It's important to verify the terms with your provider. Typically, to switch to a new maintenance service, you just need to notify your current company of the change.",
        },
        {
            id: 5,
            question: "Can I use CCTV to record the paths/street outside my property?",
            answer:
                "Recording anybody in a public space is not against the law. What is important is that you don't knowingly record private property without the owners consent. Where your cameras overlap a neighbours property, your CCTV system can be set up to block out and not record these areas.",
        },

        {
            id: 6,
            question: "Can I upgrade my existing alarm system?",
            answer:
                "Yes, upgrading an existing alarm system is possible and often recommended to enhance security and incorporate new technology. Upgrades can include adding new sensors, integrating smart home features, or replacing outdated components. It's important to consult with a security expert to assess your current system and recommend the most effective upgrades tailored to your needs and budget."
        }
    ]

    return(
        <>
            <div className="bg-white">
                <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="onyx-heading text-3xl tracking-tight sm:text-4xl">Frequently asked <span className={`text-red-500`}>questions</span>
                        </h2>
                        <p className="mt-6 text-lg  leading-7 text-gray-600">
                            Have a different question and can’t find the answer you’re looking for? Reach out to our
                            support team by{' '}
                            <a href="#" className="font-semibold text-red-500 hover:text-red-500">
                                sending us an email
                            </a>{' '}
                            and we’ll get back to you as soon as we can.
                        </p>
                    </div>
                    <div className="mt-20">
                        <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
                            {faqs.map((faq) => (
                                <div key={faq.id}>
                                    <dt className="text-base onyx-heading font-semibold leading-7 text-gray-900">{faq.question}</dt>
                                    <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FaqPage