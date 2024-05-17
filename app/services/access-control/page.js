import Container from "@/components/Container";

const AccessControlPage = () => {

    return (
        <div className={`space-y-10`}>
            <section>
                <Container>
                    <div className="mx-auto max-w-3xl lg:text-center pt-10 space-y-5">
                        <div>
                            <span className={`block text-lg onyx-heading`}>Controlled Access, Enhanced Security</span>
                            <h1 className={`text-5xl onyx-heading`}>Access <span
                                className={`text-red-500`}>Control</span>
                            </h1>
                        </div>
                        <div className="text-lg font-medium">
                            <p>
                                Access control does exactly what it implies and does not give access to any unwanted individuals. These systems act as your personal bouncers.
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
                                of an
                                <br/>
                                <span className={`text-red-500`}>Access Control System</span>
                            </h2>
                            <div className="space-y-5">
                                <p>
                                    On open sites that allow public access e.g. schools, retail shops and commercial offices, it is important that that members of the public/criminals can not enter certain areas.
                                </p>

                                <p>
                                    An access control system controls the access through a door/gate/barrier, normally by means of a pin code or proximity tag.
                                </p>

                                <p>
                                    Sometimes the access is granted remotely by a receptionist, member of staff or monitoring station.
                                </p>

                                <p>
                                    Intercoms can be used to talk to the owner of the property and tell them your business before they decide to let you in or not.
                                </p>

                                <p>
                                    These can also be integrated with CCTV so they can see who you are for security reasons.
                                </p>

                                <p>
                                    Some advanced access systems use biometric fingerprint readers and facial recognition to allow access.
                                </p>

                                <p>
                                    Larger systems can be programmed so that certain members of staff can only access certain areas of the site e.g. warehouse & office areas.
                                </p>

                            </div>
                        </div>
                        <div className={`w-1/2`}>
                            <img src="/images/onyx_access-control.png" alt="" className={`mx-auto max-w-md`}/>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    )
}

export default AccessControlPage