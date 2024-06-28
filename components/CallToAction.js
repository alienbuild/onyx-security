"use client"

import {Button} from "@nextui-org/react";
import Link from "next/link";

const CallToAction = () => {

    return (
        <>
            <div className="relative bg-black/95 border-t border-red-500">
                <div
                    className="relative h-80 overflow-hidden bg-red-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
                    <img
                        className="h-full w-full object-cover"
                        src="/images/onyx-lifestyle.jpg"
                        alt="Onyx Lifestyle"
                    />
                </div>
                <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
                    <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
                        <h2 className="text-base font-semibold leading-7 text-red-500">When you need us</h2>
                        <p className="mt-2 onyx-heading text-3xl tracking-tight text-white sm:text-4xl">
                            We’re here to help</p>
                        <p className="mt-6 text-base leading-7 text-gray-300">
                            Whether you&apos;re facing a challenge or just need some advice, our team is ready to assist you. We provide expert support and personalized solutions to meet your needs. Don&apos;t hesitate to reach out and let us know how we can help you today.
                        </p>
                        <div className="mt-8">
                            <Button
                                as={Link}
                                href={"mailto:info@onyxsecurity.com"}
                                color={"danger"}
                                variant={"flat"}
                                className={`onyx-heading`}
                            >
                                Contact
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CallToAction
