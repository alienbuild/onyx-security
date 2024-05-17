import Container from "@/components/Container";

const CctvSystemsPage = () => {

    return (
        <div className={`space-y-10`}>
            <section>
                <Container>
                    <div className="mx-auto max-w-3xl lg:text-center pt-10 space-y-5">
                        <div>
                            <span className={`block text-lg onyx-heading`}>Surveillance for Safety</span>
                            <h1 className={`text-5xl onyx-heading`}>CCTV <span
                                className={`text-red-500`}>Systems</span>
                            </h1>
                        </div>
                        <div className="text-lg font-medium">
                            <p>
                                It is crucial to take security seriously in this day and age. It is not just businesses and commercial properties that have a need for security, but our homes also. With crime and burglaries increasing it is important to consider your available security options.
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
                                of a
                                <br/>
                                <span className={`text-red-500`}>CCTV System</span>
                            </h2>
                            <div className="space-y-5">
                                <strong className={`text-lg`}>
                                    CCTV is great tool for watching over your property and providing evidence for any criminal activities that may occur.
                                </strong>

                                <p>
                                    When your alarm activates if it is monitored and informs you, you can then log in remotely on your mobile device and check your CCTV.
                                </p>

                                <p>
                                    This helps evaluate the risk and also whether you need to contact the Police or not.
                                </p>

                                <p>
                                    Your CCTV evidence can be used to help convict criminals and answer many questions that you would not know without it e.g. entry routes/times/how many people etc.
                                </p>

                                <p>
                                    CCTV can be useful in many ways including: checking your kids are ok playing in the street or garden, keeping an eye on the dogs when they bark or even double checking when a delivery company has said they have been but you don&quot;t think they have.
                                </p>

                            </div>
                        </div>
                        <div className={`w-1/2`}>
                            <img src="/images/onyx_cctv.png" alt="" className={`mx-auto max-w-md`}/>
                        </div>
                    </div>
                </Container>
            </section>

        </div>
    )
}

export default CctvSystemsPage