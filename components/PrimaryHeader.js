"use client"

import Logo from "@/components/Logo";
import Link from "next/link";
import Container from "@/components/Container";
import {ChevronDownIcon, EnvelopeIcon, MapPinIcon, PhoneIcon} from "@heroicons/react/24/solid";
import {
    Button,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle
} from "@nextui-org/react";
import {useState} from "react";
import ServicesNav from "@/components/ServicesNav";
import Login from "@/components/Login";
import Contact from "@/components/Contact";

const PrimaryHeader = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false)

    return(
        <>
            <header className={`bg-red-700 text-white z-20 sticky`}>
                <Container>
                    <div className="flex gap-5 items-center text-sm py-1">
                        <Link href={`https://goo.gl/maps/ONWUW`} target={"_blank"} className={`flex items-center gap-1`}><MapPinIcon className={`w-4 inline`} /> Rushden, Northants</Link>
                        <Link href={"mailto:info@onyxsecurity.com"} className={`flex items-center gap-1`}><EnvelopeIcon className={`w-4 inline`} /> info@onyxsecurity.com</Link>
                        <Link href={"tel:01933392992"} className={`flex items-center gap-1`}><PhoneIcon className={`w-4 inline`} /> 01933 392 992</Link>
                    </div>
                </Container>
            </header>
            <div className={`relative`}>
                <header className={`bg-black text-white py-2 border-b border-gray-700 shadow relative z-30`}>
                    <Container>
                        <Navbar
                            isBordered
                            isMenuOpen={isMenuOpen}
                            onMenuOpenChange={setIsMenuOpen}
                            maxWidth={"full"}
                            className={`bg-transparent`}
                        >
                            <NavbarContent className="sm:hidden" justify="start">
                                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"}/>
                            </NavbarContent>

                            <NavbarContent className="sm:hidden pr-3" justify="center">
                                <NavbarBrand>
                                    <Logo classes={`w-40`}/>
                                </NavbarBrand>
                            </NavbarContent>

                            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                                <NavbarBrand>
                                    <Link href={`/`}>
                                        <Logo classes={`w-40`}/>
                                    </Link>
                                </NavbarBrand>
                                <NavbarItem>
                                    <Link color="foreground" href="/about"
                                          className={`onyx-heading hover:text-red-500 transition-colors duration-300`}>
                                        About
                                    </Link>
                                </NavbarItem>
                                <NavbarItem>
                                    <Button
                                        disableRipple
                                        className="p-0 bg-transparent data-[hover=true]:bg-transparent text-base text-white onyx-heading  hover:text-red-500 transition-colors duration-300"
                                        endContent={<ChevronDownIcon className={`w-5`}/>}
                                        radius="sm"
                                        variant="light"
                                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                                    >
                                        Services
                                    </Button>
                                </NavbarItem>
                                <NavbarItem>
                                    <Link color="foreground" href="/project-gallery"
                                          className={`onyx-heading hover:text-red-500 transition-colors duration-300`}>
                                        Project gallery
                                    </Link>
                                </NavbarItem>
                                <NavbarItem>
                                    <Link color="foreground" href="/frequently-asked-questions"
                                          className={`onyx-heading hover:text-red-500 transition-colors duration-300`}>
                                        FAQ
                                    </Link>
                                </NavbarItem>
                            </NavbarContent>

                            <NavbarContent justify="end">
                                <NavbarItem className="hidden lg:flex">
                                    <Login />
                                </NavbarItem>
                                <NavbarItem className="hidden lg:flex">
                                    <Contact />
                                </NavbarItem>
                            </NavbarContent>
                        </Navbar>
                    </Container>
                </header>
                <ServicesNav isServicesOpen={isServicesOpen} setIsServicesOpen={setIsServicesOpen} />
            </div>
        </>
    )
}

export default PrimaryHeader