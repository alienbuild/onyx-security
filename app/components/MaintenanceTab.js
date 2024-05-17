const MaintenanceTab = () => {

    return(
        <>
            <div className="flex gap-5 justify-between items-center">
                <div className={`space-y-5 text-lg w-full`}>
                    <div>
                        <span
                            className={`text-base font-semibold leading-7 text-red-500`}>Reliable Maintenance, Lasting Safety</span>
                        <h1 className={`mt-2 onyx-heading text-3xl tracking-tight text-white sm:text-4xl`}>Maintenance</h1>
                    </div>
                    <p className={``}>
                        Annual servicing of security systems. Fully comprehensive contracts. 24/7 Support
                    </p>
                    <p>
                        Annual servicing and repairs of security systems. Fully comprehensive contracts. 24/7 Support
                    </p>
                    <p>
                        All our work is covered by our 12 month installation guarantee.
                    </p>
                </div>
                <div className={`w-full flex justify-center items-center`}>
                    <img src={"/images/onyx_maintenance.png"} className={`w-96`}/>
                </div>
            </div>
        </>
    )
}

export default MaintenanceTab