import { cn } from "@/lib/utils"
import GridPattern from "../ui/grid-pattern"

export default function Week13() {
    return (
        <section id="week13" className="relative min-h-screen pb-4 lg:pb-0 w-full bg-[radial-gradient(circle_at_right_top,_var(--tw-gradient-stops))] from-zinc-100 from-50% via-sky-100 via-55% to-zinc-200 to-75% text-slate-900 flex flex-col gap-y-8 pt-16 px-8 lg:p-20">
            <div className="flex flex-col gap-y-8 z-10 whitespace-pre-wrap">
                <h1 className="text-4xl lg:text-[2.5rem] text-center lg:text-left redhat-medium">
                    Week 13: Progress Presentation 📄
                </h1>
                <div className="flex flex-col gap-y-8 items-center mx-auto lg:items-start 3xl:mt-20">
                    <div className="flex flex-col-reverse w-full lg:flex-row gap-x-12 gap-y-4 lg:gap-y-0">
                        <div className="flex flex-col gap-y-2 lg:gap-y-4">
                            <img className="lg:max-h-[370px] object-contain rounded-md drop-shadow-xl" src="https://res.cloudinary.com/dynrld3nm/image/upload/cpe101viewbook/week13/IMG_3010_sg11oy.jpg"/>
                            <p className="caveat-medium text-zinc-800 text-lg lg:text-2xl text-center">Another group's presentation <br />(obviously we don't have our own pic cuz we're presenting)</p>
                        </div>
                        <div className="flex flex-col gap-y-3 max-w-screen-md inter-regular">
                            <p className="text-lg lg:text-xl text-left">
                                &nbsp;&nbsp;&nbsp;&nbsp;This week, we present our final project progress so far to the sharks, I mean, the Professors and TAs. Each group got up to 5 minutes to <span className="font-bold">present their idea and their progress</span> to the class, then our committee ask questions and judge each group. We got to go as the first group to present.
                            </p>
                            <p className="text-lg lg:text-xl text-left">
                                &nbsp;&nbsp;&nbsp;&nbsp;Our presentation went better than expected, not sure if we're actually doing good or we set the expectation too low. The commitee gave some comments and concerns to us, and then we got to watch our friends' presentation. A lot of our friends actually have a really brilliant idea. There's a group that made <a href="https://github.com/3raphat/assign-watch" target="_blank" rel="noopener noreferrer" className="underline">Assign Watch</a>, which is a browser extension that adds an assignment summary pane to <a href="http://leb2.org" target="_blank" rel="noopener noreferrer" className="underline">LEB2</a>. A lot of my friends are actually using this now.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <GridPattern
                width={60}
                height={60}
                x={-1}
                y={-1}
                strokeDasharray={"4 2"}
                className={cn(
                    "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
                )}
            />
        </section>
    )
}
