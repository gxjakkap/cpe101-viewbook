export default function Week1() {
    return (
        <section className="min-h-screen w-full bg-gradient-to-br from-[#ECE9E6] from-70% via-blue-100 via-75% to-white to-85% text-slate-900 flex flex-col gap-y-8 pt-16 px-8 lg:p-20">
            <h1 className="text-4xl lg:text-[2.5rem] text-center lg:text-right redhat-medium scroll-mt-14" id="week1">
                Week 1: What does an engineer do? ⚙️🦺
            </h1>
            <div className="flex flex-col gap-y-8 lg:gap-y-4 items-center mx-auto lg:items-start py-2">
                <div className="flex flex-col w-full lg:flex-row gap-x-12 gap-y-4 lg:gap-y-0">
                    <div className="flex flex-col gap-y-3 max-w-screen-md inter-regular">
                        <p className="text-lg lg:text-xl text-left">
                            <span className="font-bold">Sorting hat:</span> <span className="italic">"Hmm. Difficult. Very difficult. Plenty of courage, I see. Not a bad mind either. There's talent, oh my goodness, yes — and a nice thirst to prove yourself, now that's interesting... So where shall I put you?"</span> sorting hat mumbling to me
                        </p>
                        <p className="italic text-lg lg:text-xl text-left">
                            “The <span className="font-bold">black team&apos;s</span> fits are cool. Maybe you can gi-“
                        </p>
                        <p className="italic text-lg lg:text-xl text-left">
                            <span className="text-blue-500 font-bold">"Blue!"</span> the sorting hat announced, and I just sat there grieving in silence because blue is not my personal color!
                        </p>
                        <p className="text-lg lg:text-xl text-left">
                            &nbsp;&nbsp;&nbsp;&nbsp;Week 1 is a class introduction week. We get to know more about engineering and also introduce us to the <span className="font-bold">CPE101 course</span>. What we'll be learning and what we have to prepare for. Not only that, we also get a group that we will have to spend time together for around half of the course, assigned by Dr.Jumpol and his trustworthy assistant &apos;sorting hat&apos;.
                        </p>
                    </div>
                    <div className="flex flex-col gap-y-2 lg:gap-y-4">
                        <img className="max-h-[270px] object-contain drop-shadow-xl" src="https://res.cloudinary.com/dynrld3nm/image/upload/cpe101viewbook/week1/5599667e-07e6-429c-b39f-8400e61347da_xyws5b.jpg"/>
                        <p className="caveat-medium text-zinc-800 text-xl text-center">We got to go through a sorting hat, just like in Harry Potter!</p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row-reverse gap-x-12 gap-y-4 lg:gap-y-0">
                    <p className="text-lg lg:text-xl lg:pt-3 inter-regular max-w-screen-md">
                        &nbsp;&nbsp;&nbsp;&nbsp;After we get our group, we also have challenges to working with our new group. It&apos;s also our first opportunity to get to work in a team with our group, so this is essential to <span className="font-bold">build our teamwork!</span>
                    </p>
                    <div className="flex flex-col gap-y-2 lg:gap-y-4">
                        <img className="max-h-[220px] object-contain rounded-md drop-shadow-xl" src="https://res.cloudinary.com/dynrld3nm/image/upload/cpe101viewbook/week1/20240809_1556241_zl0ck0.jpg"/>
                        <p className="caveat-medium text-zinc-800 text-xl text-center">This is one of the challenges we got. 😖</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
