import Container from "@/components/Container";
import {BriefcaseIcon, HandThumbUpIcon, MapIcon, StarIcon} from "@heroicons/react/24/outline";

const Hero = () => {

    return (
        <section>
            <Container>
                <div className="mx-auto max-w-3xl lg:text-center pt-10 space-y-5">
                    <div>
                        <span className={`block text-lg onyx-heading`}>Welcome to</span>
                        <h1 className={`text-5xl onyx-heading`}>Onyx <span className={`text-red-500`}>Security</span>
                        </h1>
                    </div>
                    <div className="text-lg font-medium">
                        <p>
                            Thank you for taking the time to view the site, we sincerely hope to win your business and
                            make
                            the world a safer place to live in.
                        </p>
                    </div>
                </div>
                <div className={`mx-auto mt-16 mb-16 max-w-2xl sm:mt-20 sm:mb-20 lg:mt-24 lg:mb-24 lg:max-w-none`}>
                    <dl className={`grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2`}>
                        <div className={`flex flex-col`}>
                            <dt className={`flex items-center gap-x-3 font-semibold leading-7 text-gray-900 onyx-heading text-xl`}>
                                <BriefcaseIcon className={`w-8 inline`}/> Professional
                            </dt>
                            <dd className={`mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600`}>
                                <p className="flex-auto text-lg leading-8">
                                    All our engineers are multi-skilled in all security sectors including
                                    telecommunications and IT. They are also CRB checked and regularly have their work
                                    inspected to make sure their workmanship is up to Onyx Security&quot;s high standards
                                </p>
                            </dd>
                        </div>
                        <div className={`flex flex-col`}>
                            <dt className={`flex items-center gap-x-3 font-semibold leading-7 text-gray-900 onyx-heading text-xl`}>
                                <StarIcon className={`w-8 inline`}/> Reputable
                            </dt>
                            <dd className={`mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600`}>
                                <p className="flex-auto text-lg leading-8">
                                    Onyx Security Ltd complies with the highest industry standards as shown by our SSAIB
                                    accreditation. Our SSAIB accreditation means we comply to all insurance providers
                                    and
                                    Police policy requirements. All our alarm and CCTV monitoring is handled by the UK&quot;s
                                    largest independent NSI Gold accredited alarm receiving centre.
                                </p>
                            </dd>
                        </div>
                        <div className={`flex flex-col`}>
                            <dt className={`flex items-center gap-x-3 font-semibold leading-7 text-gray-900 onyx-heading text-xl`}>
                                <MapIcon className={`w-8 inline`}/> Local
                            </dt>
                            <dd className={`mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600`}>
                                <p className="flex-auto text-lg leading-8">
                                    Based in Rushden, Northamptonshire we operate within the UK and are dedicated to
                                    providing an excellent local customer service.
                                </p>
                            </dd>
                        </div>
                        <div className={`flex flex-col`}>
                            <dt className={`flex items-center gap-x-3 font-semibold leading-7 text-gray-900 onyx-heading text-xl`}>
                                <HandThumbUpIcon className={`w-8 inline`}/> Honest
                            </dt>
                            <dd className={`mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600`}>
                                <p className="flex-auto text-lg leading-8">
                                    Fair and very competitive pricing with no hidden charges, our prices are based on
                                    the size of your system, not your property! We are also a member of the FSB (The
                                    Federation of small businesses)
                                </p>
                            </dd>
                        </div>
                    </dl>
                </div>
            </Container>
        </section>
    )
}

export default Hero