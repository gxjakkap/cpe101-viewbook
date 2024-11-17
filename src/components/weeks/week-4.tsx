export default function Week4() {
    return (
        <section className="min-h-screen w-full bg-gradient-to-br from-zinc-100 from-40% via-[#e0fef8] via-65% to-zinc-100 to-70% text-slate-900 flex flex-col gap-y-8 pt-16 px-8 lg:p-20">
            <h1 className="text-4xl lg:text-[2.5rem] text-center lg:text-left redhat-medium scroll-mt-14" id="week4">
                Week 4: Basic Embedding System 🧑🏼‍🔧
            </h1>
            <div className="flex flex-col gap-y-8 lg:gap-y-4 items-center mx-auto lg:items-start py-2">
                <div className="flex flex-col w-full lg:flex-row gap-x-12 gap-y-4 lg:gap-y-0">
                    <div className="flex flex-col gap-y-3 max-w-screen-md inter-regular">
                        <p className="text-lg lg:text-xl text-left">
                            &nbsp;&nbsp;&nbsp;&nbsp;Now, after we are done learning how to make our robot body, we have to learn how to make it move! In the 4th week, we learnt about <span className="font-bold">the embedded system</span>. This system is everywhere you are just not aware of it; ATM, the car's infotainment system, vending machine, or even our wireless earbuds.
                        </p>
                        <p className="text-lg lg:text-xl text-left">
                            &nbsp;&nbsp;&nbsp;&nbsp;We get to try to make our own embedded system by using <span className="font-bold">micro:bit</span>; which is a beginner-friendly board you can start learning with. From the knowledge we get, we have to use it and make our robot do the tasks in the specific ways the TAs want. This helps us know the way to imply to our robot like, how to make them collect treasures and make them move like we intended to.
                        </p>
                    </div>
                    <div className="flex flex-col gap-y-2 lg:gap-y-5">
                        <img className="max-h-[250px] object-contain drop-shadow-xl" src="https://res.cloudinary.com/dynrld3nm/image/upload/cpe101viewbook/week4/IMG_0559_n0suuc.jpg"/>
                        <div className="flex flex-col gap-y-1">
                            <img className="max-h-[250px] object-contain drop-shadow-xl" src="https://res.cloudinary.com/dynrld3nm/image/upload/cpe101viewbook/week4/IMG_0560_bc25lj.jpg"/>
                            <p className="caveat-medium text-zinc-800 text-xl text-center">Here's me and my group writing programs for the micro:bit on MakeCode</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
