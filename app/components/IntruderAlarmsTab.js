const IntruderAlarmsTab = () => {

    return(
        <>
            <div className="flex gap-5 justify-between items-center">
                <div className={`space-y-5 text-lg w-full`}>
                    <div>
                        <span className={`text-base font-semibold leading-7 text-red-500`}>Securing Peace of Mind</span>
                        <h1 className={`mt-2 onyx-heading text-3xl tracking-tight text-white sm:text-4xl`}>Intruder <span
                            className={`text-red-500`}>alarm systems</span>
                        </h1>
                    </div>
                    <div className={`text-gray-300 space-y-5`}>
                        <div className="text-white font-medium">
                            <p>
                                We Install, maintain and repair wired and wireless burglar alarm systems. From small
                                domestic to
                                large commercial we are big enough to cope but small enough to care.
                            </p>
                        </div>
                        <p>
                            Our systems can be monitored as well as notifying key-holders or the Police upon activation.
                            Covered
                            by our industry leading SSAIB accreditation you can be sure you are in safe hands.
                        </p>
                        <p>
                            All our work is covered by our 12 month installation guarantee.
                        </p>
                    </div>
                </div>
                <div className={`w-full flex justify-center items-center`}>
                    <img src={"/images/onyx_bell-box.png"} className={`w-96`}/>
                </div>
            </div>
        </>
    )
}

export default IntruderAlarmsTab