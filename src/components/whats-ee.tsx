export default function WhatsEE() {
    return (
        <section className="min-h-screen pb-4 lg:pb-0 w-full from-[#ECE9E6] to-white flex flex-col relative" id="intro">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    className="w-full h-full object-cover"
                    src="https://res.cloudinary.com/dynrld3nm/image/upload/cpe101viewbook/bg-g_y2msew.avif"
                    alt="Background"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-y-6 pt-16 px-8 lg:p-20">
                <h1 className="text-4xl lg:text-5xl text-center lg:text-left redhat-medium inline gap-x-3 items-center">
                    What's Engineering Exploration? 👨🏼‍💻
                </h1>
                <div className="flex flex-col lg:mt-12 lg:flex-row-reverse gap-y-8 gap-x-20 xl:gap-x-32 items-center lg:items-start">
                    <img
                        className="max-w-full lg:max-w-md rounded-md drop-shadow-lg"
                        src="https://res.cloudinary.com/dynrld3nm/image/upload/cpe101viewbook/maincomponent/7c1bcd02-8666-4666-97bf-ee4ee1392015_jbrggq.jpg"
                        alt="Engineering Exploration"
                    />
                    <p className="text-lg lg:text-xl xl:text-2xl inter-regular">
                        &emsp;&emsp;<span className="text-sky-500 font-bold">Engineering Exploration</span> is designed as an introductory course for Computer Engineering freshmen, painting them a picture of what they'll be learning over the next four years. It doesn't just cover core computer engineering topics but also cover the <span className="font-bold">broader principles of engineering</span>, including analysis, design, and experimentation. Through hands-on labs and project-based learning, students will develop teamwork, communication, and problem-solving skills through tasks like designing a robot or final projects.
                    </p>
                </div>
            </div>
        </section>
    )
}
    

