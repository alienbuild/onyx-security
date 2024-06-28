"use client"

import Logo from "@/components/Logo";
import Link from "next/link";
import Container from "@/components/Container";
import {Button} from "@nextui-org/react";
import {ArrowUpIcon} from "@heroicons/react/24/outline";

const PrimaryFooter = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return(
        <>
            <footer className={`bg-onyx-light-gray py-10 text-white border-t border-red-500`}>
                <Container>
                    <div className="flex gap-5 justify-between">
                        <section className="w-full space-y-3 max-w-lg">
                            <h3 className={`text-xl onyx-heading`}>Onyx <span className={`text-red-500`}>security</span></h3>
                            <p>
                                For reliable and advanced security solutions, trust Onyx Security. Our specialized services in CCTV, access control, and alarm systems ensure your safety and peace of mind. Dedicated to protecting what matters most to you.
                            </p>
                        </section>
                        <section className="w-1/3 pl-10 space-y-3">
                            <h3 className={`text-xl onyx-heading`}>Contact <span className={`text-red-500`}>us</span></h3>
                            <address className={`not-italic`}>
                                Onyx Security
                                <br/>
                                Unit A, Mark Grove House
                                <br/>
                                Allen Road
                                <br/>
                                Rushden, Northants
                                <br/>
                                NN10 0DU
                            </address>

                            <div className={`font-medium`}>
                                <Link href={"mailto:info@onyxsecurity.com"}
                                      className={`block text-red-500 hover:text-white transition-colors duration-300`}>info@onyxsecurity.com</Link>
                                <Link href={"tel:01933 392 992"}
                                      className={`block text-red-500 hover:text-white transition-colors duration-300`}>+44(0)1933
                                    392 992</Link>
                            </div>

                        </section>
                        <section className="w-1/3 space-y-3">
                            <h3 className={`text-xl onyx-heading`}>Opening <span className={`text-red-500`}>times</span></h3>
                            <div>
                                <span className={`block`}>Monday: 9am - 5pm</span>
                                <span className={`block`}>Tuesday: 9am - 5pm</span>
                                <span className={`block`}>Wednesday: 9am - 5pm</span>
                                <span className={`block`}>Thursday: 9am - 5pm</span>
                                <span className={`block`}>Friday: 9am - 5pm</span>
                                <span className={`block text-gray-300 mt-3`}>Saturday: Closed</span>
                                <span className={`block text-gray-300`}>Sunday: Closed</span>
                                <span className={`block text-gray-300 mt-3`}>Emergecy: 24/7</span>
                            </div>
                        </section>
                    </div>
                </Container>
            </footer>
            <footer className={`bg-slate-950 border-t-2 border-red-500 py-2 px-1 text-slate-100`}>
                <Container>
                    <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                            <Link href={`/`}><Logo classes={`w-28`}/></Link>
                            <div className={`text-xs`}>
                                <span className={`block text-gray-400`}>All rights reserved.</span>
                                <span className={`block font-medium`}>Copyright © 2009-2024 by Onyx Security</span>
                            </div>
                        </div>
                        <div className={`flex gap-5 items-center`}>
                            <Link href={`/privacy-policy`}
                                  className={`block text-sm text-red-500 hover:text-white transition-colors duration-300`}>Privacy
                                policy</Link>
                            <Button
                                isIconOnly
                                variant={"flat"}
                                color={"danger"}
                                onClick={scrollToTop}
                            >
                                <ArrowUpIcon className={`w-5`} />
                            </Button>
                        </div>
                    </div>
                </Container>
            </footer>
        </>
    )
}

export default PrimaryFooter