export default function Week1() {
    return (
        <section className="min-h-screen w-full bg-gradient-to-tr from-[#ECE9E6] to-white text-slate-900 flex flex-col gap-y-8 pt-16 px-8 lg:p-20">
            <h1 className="text-4xl lg:text-[2.5rem] text-center lg:text-right redhat-medium scroll-mt-14" id="week1">
                Week 1: What does an engineer do?
            </h1>
            <div className="flex flex-col gap-y-8 lg:gap-y-4 items-center mx-auto lg:items-start py-2">
                <div className="flex flex-col w-full lg:flex-row gap-x-12 gap-y-4 lg:gap-y-0">
                    <p className="text-lg lg:text-xl text-left lg:pt-3 inter-regular lg:mt-6 max-w-screen-md">
                        The first class is an introduction to engineering. "What engineers do?" was the main topic of this class.
                    </p>
                    <div className="flex flex-col gap-y-2 lg:gap-y-4">
                        <img className="max-h-[270px] object-contain" src="https://res.cloudinary.com/dynrld3nm/image/upload/cpe101viewbook/week1/5599667e-07e6-429c-b39f-8400e61347da_xyws5b.jpg"/>
                        <p className="caveat-medium text-zinc-800 text-xl text-center">We got to go through a sorting hat, just like in Harry Potter!</p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row-reverse gap-x-12 gap-y-4 lg:gap-y-0">
                    <p className="text-lg lg:text-xl lg:pt-3 inter-regular max-w-screen-md">
                        Aj. Jumpol also gave us challenges to work on as a group. It's mostly "just-for-fun" challenges like "where's this pic" or determining the speed of the car from the video, etc.
                    </p>
                    <div className="flex flex-col gap-y-2 lg:gap-y-4">
                        <img className="max-h-[220px] object-contain" src="https://res.cloudinary.com/dynrld3nm/image/upload/cpe101viewbook/week1/20240809_1556241_zl0ck0.jpg"/>
                        <p className="caveat-medium text-zinc-800 text-xl text-center">This is one of the challenges we got.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
