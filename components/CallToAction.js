import {Button} from "@nextui-org/react";

const CallToAction = () => {

    return(
        <>
            <div className="relative bg-black/95 border-t border-red-500">
                <div
                    className="relative h-80 overflow-hidden bg-red-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
                    <img
                        className="h-full w-full object-cover"
                        src="/images/onyx-lifestyle.jpg"
                        alt=""
                    />
                    <svg
                        viewBox="0 0 926 676"
                        aria-hidden="true"
                        className="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"
                    >
                        <path
                            fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
                            fillOpacity=".4"
                            d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
                        />
                        <defs>
                            <linearGradient
                                id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
                                x1="926.392"
                                x2="-109.635"
                                y1=".176"
                                y2="321.024"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#ef4444"/>
                                <stop offset={1} stopColor="#ef4444"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
                    <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
                        <h2 className="text-base font-semibold leading-7 text-red-500">Award winning support</h2>
                        <p className="mt-2 onyx-heading text-3xl tracking-tight text-white sm:text-4xl">
                            We’re here to help</p>
                        <p className="mt-6 text-base leading-7 text-gray-300">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
                            sed. Quam a
                            scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut
                            interdum
                            tincidunt duis.
                        </p>
                        <div className="mt-8">
                            <Button
                                color={"danger"}
                                variant={"flat"}
                                className={`onyx-heading`}
                            >
                                Contact
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CallToAction