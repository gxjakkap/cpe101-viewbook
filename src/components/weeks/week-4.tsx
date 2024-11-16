export default function Week4() {
    return (
        <section className="min-h-screen w-full bg-gradient-to-br from-zinc-100 from-40% via-[#e0fef8] via-65% to-zinc-100 to-70% text-slate-900 flex flex-col gap-y-8 pt-16 px-8 lg:p-20">
            <h1 className="text-4xl lg:text-[2.5rem] text-center lg:text-left redhat-medium scroll-mt-14" id="week4">
                Week 4: Basic Embedding System
            </h1>
            <div className="flex flex-col gap-y-8 lg:gap-y-4 items-center mx-auto lg:items-start py-2">
                <div className="flex flex-col-reverse w-full lg:flex-row gap-x-12 gap-y-4 lg:gap-y-0">
                    <p className="text-lg lg:text-xl text-left lg:pt-3 inter-regular max-w-screen-md">
                        &nbsp;&nbsp;&nbsp;&nbsp;This week, we were introduced to embedded system. Embedded system is all around us, from ATM, Car's infotainment system, vending machine, or even our wireless earbuds. We starts from the very basic though as in this class we used the <span className="font-bold">BBC micro:bit</span> for our challenges. From these challenges, we learnt how to controll servos and motors using micro:bit and iBIT extension board.
                    </p>
                    <div className="flex flex-col gap-y-2 lg:gap-y-5">
                        <img className="max-h-[250px] object-contain" src="https://res.cloudinary.com/dynrld3nm/image/upload/cpe101viewbook/week4/IMG_0559_n0suuc.jpg"/>
                        <div className="flex flex-col gap-y-1">
                            <img className="max-h-[250px] object-contain" src="https://res.cloudinary.com/dynrld3nm/image/upload/cpe101viewbook/week4/IMG_0560_bc25lj.jpg"/>
                            <p className="caveat-medium text-zinc-800 text-xl text-center">Here's me and my group writing programs for the micro:bit on MakeCode</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
