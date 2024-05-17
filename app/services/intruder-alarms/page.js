import Container from "@/components/Container";

const IntruderAlarmsPage = () => {

    return(
        <div className={`space-y-10`}>
            <section>
                <Container>
                    <div className="mx-auto max-w-3xl lg:text-center pt-10 space-y-5">
                        <div>
                            <span className={`block text-lg onyx-heading`}>Securing Peace of Mind</span>
                            <h1 className={`text-5xl onyx-heading`}>Intruder <span
                                className={`text-red-500`}>Alarms</span>
                            </h1>
                        </div>
                        <div className="text-lg font-medium">
                            <p>
                                A home alarm system can be a highly effective deterrent; 60% of burglars say they would be discouraged from targeting a house if they knew it had a home alarm. An intruder alarm is the first essential step to protecting your property.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            <section className={`border-t border-b py-16 text-white`} style={{ backgroundImage: 'url("/images/brick_wall.jpg")'}}>
                <Container>
                    <div className="flex gap-5 items-center">
                        <div className={`w-1/2 space-y-5`}>
                            <h2 className={`mt-2 onyx-heading text-3xl tracking-tight text-white sm:text-4xl`}>Benefits of an
                                <br/>
                                <span className={`text-red-500`}>Intruder Alarm System</span>
                            </h2>
                            <div className="space-y-5">
                                <p>
                                    The intruder alarms external siren is the first deterrent a would be burglar would see, this straight away reduces the risk of a break-in compared to a house with no outside siren.
                                </p>

                                <p>
                                    Burglars want an easy life, the quicker your alarm activates the quicker they will leave sometimes straight away once the sirens start.
                                </p>

                                <p>
                                    Your intruder alarm can also call key-holders family/friends and the Police. This can help you be prepared for the worst but also a chance of catching them in the act.
                                </p>

                                <p>
                                    Whilst asleep you are at your most vulnerable and night time break-ins are the most traumatic.
                                </p>

                                <p>
                                    Your alarm system can protect you at night, and you can sleep sound knowing your family is protected
                                </p>
                            </div>
                        </div>
                        <div className={`w-1/2`}>
                            <img src="/images/onyx_bell-box.png" alt="" className={`mx-auto max-w-md`}/>
                        </div>
                    </div>
                </Container>
            </section>

        </div>
    )
}

export default IntruderAlarmsPage