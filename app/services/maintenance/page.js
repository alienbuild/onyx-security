import Container from "@/components/Container";

const MaintenancePage = () => {

    return (
        <div className={`space-y-10`}>
            <section>
                <Container>
                    <div className="mx-auto max-w-3xl lg:text-center pt-10 space-y-5">
                        <div>
                            <span className={`block text-lg onyx-heading`}>Reliable Maintenance, Lasting Safety</span>
                            <h1 className={`text-5xl onyx-heading`}>Maintenance</h1>
                        </div>
                        <div className="text-lg font-medium">
                            <p>
                                As with any electrical equipment, parts can break down and fail and it is a good idea to get them regularly tested/serviced. Your alarm system however is responsible for protecting your property and your family and so should be a much higher priority.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            <section className={`border-t border-b py-16 text-white`}
                     style={{backgroundImage: 'url("/images/brick_wall.jpg")'}}>
                <Container>
                    <div className="flex gap-5 items-center">
                        <div className={`w-1/2 space-y-5`}>
                            <h2 className={`mt-2 onyx-heading text-3xl tracking-tight text-white sm:text-4xl`}>Benefits
                                of
                                <br/>
                                <span className={`text-red-500`}>Maintenance</span>
                            </h2>
                            <div className="space-y-5">
                                <p>
                                    Having your system annually serviced can help diagnose any current faults and also could help stop any potential future faults from occurring. During your annual service we carry out many tests including:-
                                </p>

                                <p>
                                    Detection devices walk tested to check correct operation and also that they have correct coverage of the area. External siren tested including back-up battery. Mains voltage tested for any irregular occurrences Wiring checked and on-board PSU voltages checked Fuses checked Backup batteries tested and checked. General visual checks/cleaning of spiders/cobwebs and items that may affect the alarm sensors.
                                </p>

                                <p>
                                    Once satisfied that your system is working as it should our engineer will then leave you with a service sheet. Most insurance companies stipulate that your alarm system should be annually serviced, your service sheet should be kept each year for proof of this.
                                </p>

                                <p>
                                    Onyx Security offer basic annual services and also fully comprehensive service contracts, they include the above but also call-outs, labour and parts for fault calls throughout the year.
                                </p>
                            </div>
                        </div>
                        <div className={`w-1/2`}>
                            <img src="/images/onyx_maintenance.png" alt="" className={`mx-auto max-w-md`}/>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    )
}

export default MaintenancePage