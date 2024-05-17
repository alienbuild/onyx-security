import {AnimatePresence, motion} from "framer-motion";
import Container from "@/components/Container";
import Link from "next/link";
import {Button} from "@nextui-org/react";

const ServicesNav = ({ isServicesOpen, setIsServicesOpen }) => {

    const servicesVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return(
        <AnimatePresence>
            {isServicesOpen && (
                <>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={overlayVariants}
                        transition={{duration: 0.5}}
                        className="fixed inset-0 bg-black bg-opacity-50 z-10"
                        onClick={() => setIsServicesOpen(false)}
                    />
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={servicesVariants}
                        transition={{duration: 0.5}}
                        className={`absolute w-full border-b border-red-500 shadow left-0 z-20 py-5 top-[80px]`}
                        style={{
                            backgroundImage: 'url("/images/dark_wall.png")'
                        }}
                    >
                        <Container>
                            <div className="flex justify-between gap-5 items-stretch">
                                <Button
                                    as={Link}
                                    href={"/services/intruder-alarms"}
                                    className="text-gray-300 h-auto bg-transparent max-h-none text-center w-full p-5 rounded-lg shadow-lg flex flex-wrap flex-col border-b-5 border-transparent gap-3 justify-between items-center hover:bg-white/5 hover:border-b-red-500 transition-all duration-500"
                                    style={{
                                        boxShadow: '0 -5px 0 0 transparent inset, 2px 1px 0px 1px rgba(0, 0, 0, 0.8), inset 1px 1px 0px rgba(255, 255, 255, 0.1)',
                                        whiteSpace: 'normal'
                                    }}
                                    onClick={() => setIsServicesOpen(false)}
                                >
                                    <h2 className={`onyx-heading text-xl text-white`}>Intruder <span className={`text-red-500`}>Alarms</span></h2>
                                    <img src="/images/onyx_bell-box.png" alt="" className={`w-40`}/>
                                    <p className={`text-sm`}>We install wired, wireless and monitored burglar
                                        alarm
                                        systems. From small domestic to large commercial properties.</p>
                                </Button>
                                <Button
                                    as={Link}
                                    href={"/services/cctv-systems"}
                                    className="text-gray-300 h-auto bg-transparent max-h-none text-center w-full p-5 rounded-lg shadow-lg flex flex-wrap flex-col border-b-5 border-transparent gap-3 justify-between items-center hover:bg-white/5 hover:border-b-red-500 transition-all duration-500"
                                    style={{
                                        boxShadow: '0 -5px 0 0 transparent inset, 2px 1px 0px 1px rgba(0, 0, 0, 0.8), inset 1px 1px 0px rgba(255, 255, 255, 0.1)',
                                        whiteSpace: 'normal'
                                    }}
                                    onClick={() => setIsServicesOpen(false)}
                                >
                                    <h2 className={`onyx-heading text-xl text-white`}>CCTV <span
                                        className={`text-red-500`}>Systems</span></h2>
                                    <img src="/images/onyx_cctv.png" alt="" className={`w-40`}/>
                                    <p className="text-sm">
                                        We specialise at installing CCTV systems in domestic and commercial
                                        properties. HD, IP and remote viewing
                                    </p>

                                </Button>
                                <Button
                                    as={Link}
                                    href={"/services/access-control"}
                                    className="text-gray-300 h-auto bg-transparent max-h-none text-center w-full p-5 rounded-lg shadow-lg flex flex-wrap flex-col border-b-5 border-transparent gap-3 justify-between items-center hover:bg-white/5 hover:border-b-red-500 transition-all duration-500"
                                    style={{
                                        boxShadow: '0 -5px 0 0 transparent inset, 2px 1px 0px 1px rgba(0, 0, 0, 0.8), inset 1px 1px 0px rgba(255, 255, 255, 0.1)',
                                        whiteSpace: 'normal'
                                    }}
                                    onClick={() => setIsServicesOpen(false)}
                                >
                                    <h2 className={`onyx-heading text-xl text-white`}>Access <span
                                        className={`text-red-500`}>Control</span></h2>
                                    <img src="/images/onyx_access-control.png" alt="" className={`w-32`}/>
                                    <p className="text-sm">
                                        Stop people gaining access to certain areas of your premises with an
                                        access control system.
                                    </p>
                                </Button>
                                <Button
                                    as={Link}
                                    href={"/services/maintenance"}
                                    className="text-gray-300 h-auto bg-transparent max-h-none text-center w-full p-5 rounded-lg shadow-lg flex flex-wrap flex-col border-b-5 border-transparent gap-3 justify-between items-center hover:bg-white/5 hover:border-b-red-500 transition-all duration-500"
                                    style={{
                                        boxShadow: '0 -5px 0 0 transparent inset, 2px 1px 0px 1px rgba(0, 0, 0, 0.8), inset 1px 1px 0px rgba(255, 255, 255, 0.1)',
                                        whiteSpace: 'normal'
                                    }}
                                    onClick={() => setIsServicesOpen(false)}
                                >
                                    <h2 className={`onyx-heading text-xl text-white`}>Maintenance</h2>
                                    <img src="/images/onyx_maintenance.png" alt="" className={`w-40`}/>
                                    <div className="text-sm">
                                        Annual servicing of security systems. Fully comprehensive contracts. 24/7 Support.
                                    </div>
                                </Button>

                            </div>
                        </Container>
                    </motion.div>
                </>

            )}
        </AnimatePresence>
    )
}

export default ServicesNav