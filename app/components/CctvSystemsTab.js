const CctvSystemsTab = () => {

    return(
        <>
            <div className="flex gap-5 justify-between items-center">
                <div className={`space-y-5 text-lg w-full`}>
                    <div>
                        <span className={`text-base font-semibold leading-7 text-red-500`}>Surveillance for Safety</span>
                        <h1 className={`mt-2 onyx-heading text-3xl tracking-tight text-white sm:text-4xl`}>CCTV <span
                            className={`text-red-500`}>systems</span>
                        </h1>
                    </div>
                    <p className={``}>
                        Onyx Security specialise in Installing, maintaining and repairing CCTV systems. By utilising the latest technology and cost effective equipment, we can design and install anything from a small covert installation to a large HD IP system.
                    </p>
                    <p>
                        All our engineers are friendly, approachable and IT trained. We can set your system up for remote viewing and playback on a wide range of devices from mobile phones to desktop PC&quot;s.
                    </p>
                    <p>
                        All our work is covered by our 12 month installation guarantee.
                    </p>
                </div>
                <div className={`w-full flex justify-center items-center`}>
                    <img src={"/images/onyx_cctv.png"} className={`w-96`} />
                </div>
            </div>
        </>
    )
}

export default CctvSystemsTab