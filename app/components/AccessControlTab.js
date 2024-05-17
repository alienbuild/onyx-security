const AccessControlTab = () => {

    return(
        <>
            <div className="flex gap-5 justify-between items-center">
                <div className={`space-y-5 text-lg w-full`}>
                    <div>
                        <span
                            className={`text-base font-semibold leading-7 text-red-500`}>Controlled Access, Enhanced Security</span>
                        <h1 className={`mt-2 onyx-heading text-3xl tracking-tight text-white sm:text-4xl`}>Access <span
                            className={`text-red-500`}>control</span>
                        </h1>
                    </div>
                    <p className={``}>
                        Stop people gaining access to certain areas of your property with an access control system.
                        Using powerful magnetic locks fitted to your door/gates, people can only gain access through a
                        variety of methods including code, swipe card/fob and biometric fingerprint readers. </p>
                    <p>
                        We can fit audio and video access systems from just a small domestic front door to multiple
                        doors in commercial properties with PC based systems.
                    </p>
                    <p>
                        All our work is covered by our 12 month installation guarantee.
                    </p>
                </div>
                <div className={`w-full flex justify-center items-center`}>
                    <img src={"/images/onyx_access-control.png"} className={`w-80`}/>
                </div>
            </div>
        </>
    )
}

export default AccessControlTab