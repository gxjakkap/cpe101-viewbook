/* export default function WhatsEE() {
    return (
        <div className="h-screen w-full bg-neutral-100 flex flex-col">
            <div className="relative w-screen min-h-screen flex-grow text-slate-900">
                <div className="absolute inset-0 bg-cover bg-center">
                    <img className="w-screen h-screen" src="https://res.cloudinary.com/dynrld3nm/image/upload/cpe101viewbook/bg-g_y2msew.avif"/>
                </div>
                <div className="relative flex flex-col gap-y-8 z-10 h-full pt-16 px-8 lg:p-20">
                    <h1 className="text-4xl lg:text-4xl text-center lg:text-left redhat-medium">What's Engineering Exploration?</h1>
                    <div className="flex flex-col lg:flex-row-reverse gap-y-8 gap-x-20 xl:gap-x-32">
                        <img className="max-w-screen-sm" src="https://res.cloudinary.com/dynrld3nm/image/upload/cpe101viewbook/maincomponent/7c1bcd02-8666-4666-97bf-ee4ee1392015_jbrggq.jpg" alt="" />
                        <p className="text-lg lg:text-xl mx-auto lg:mx-0 inter-regular">
                            &emsp;&emsp;Engineering Exploration is designed as an introductory course for Computer Engineering freshmen, painting them a picture of what they&apos;ll be learning over the next four years. It doesn&apos;t just cover core computer engineering topics but also cover the broader principles of engineering, including analysis, design, and experimentation. Through hands-on labs and project-based learning, students will develop teamwork, communication, and problem-solving skills through tasks like designing a robot or final projects.
                        </p>
                    </div>              
                </div>
            </div>
        </div>
    )
} */

export default function WhatsEE() {
    return (
        <section className="min-h-screen w-full from-[#ECE9E6] to-white flex flex-col relative">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    className="w-full h-full object-cover"
                    src="https://res.cloudinary.com/dynrld3nm/image/upload/cpe101viewbook/bg-g_y2msew.avif"
                    alt="Background"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-y-8 pt-16 px-8 lg:p-20">
                <h1 className="text-4xl lg:text-4xl text-center lg:text-left redhat-medium">
                    What's Engineering Exploration?
                </h1>
                <div className="flex flex-col lg:flex-row-reverse gap-y-8 gap-x-20 xl:gap-x-32 items-center lg:items-start">
                    <img
                        className="max-w-full lg:max-w-md"
                        src="https://res.cloudinary.com/dynrld3nm/image/upload/cpe101viewbook/maincomponent/7c1bcd02-8666-4666-97bf-ee4ee1392015_jbrggq.jpg"
                        alt="Engineering Exploration"
                    />
                    <p className="text-lg lg:text-xl inter-regular">
                        &emsp;&emsp;Engineering Exploration is designed as an introductory course for Computer Engineering freshmen, painting them a picture of what they'll be learning over the next four years. It doesn't just cover core computer engineering topics but also cover the broader principles of engineering, including analysis, design, and experimentation. Through hands-on labs and project-based learning, students will develop teamwork, communication, and problem-solving skills through tasks like designing a robot or final projects.
                    </p>
                </div>
            </div>
        </section>
    )
}
    

