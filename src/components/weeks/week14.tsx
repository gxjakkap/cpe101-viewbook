import { cn } from "@/lib/utils"
import GridPattern from "../ui/grid-pattern"

export default function Week14() {
    return (
        <section id="week14" className="relative min-h-screen bg-neutral-100 pb-4 lg:pb-0 w-full text-slate-900 flex flex-col gap-y-8 pt-16 px-8 lg:p-20">
            <div className="flex flex-col gap-y-8 z-10 whitespace-pre-wrap">
                <h1 className="text-5xl lg:text-6xl text-center lg:text-left zf-regular">
                    Week 14: Game day 🎮
                </h1>
                <div className="flex flex-col gap-y-8 items-center mx-auto lg:items-start 3xl:mt-20">
                    <div className="flex flex-col w-full lg:flex-row-reverse gap-x-12 gap-y-4 lg:gap-y-0">
                        <div className="flex flex-col gap-y-2 lg:gap-y-4">
                            <img className="lg:max-h-[370px] object-contain rounded-md drop-shadow-xl" src="https://res.cloudinary.com/dynrld3nm/image/upload/cpe101viewbook/week14/390a0018-af4b-4693-ad0b-c75599869ef5_vllamu.jpg"/>
                            <p className="zf-regular text-zinc-800 text-xl lg:text-3xl text-center">Gunt and Naan won the VALORANT tournament!</p>
                        </div>
                        <div className="flex flex-col gap-y-3 max-w-screen-md inter-regular">
                            <p className="text-lg lg:text-xl text-left">
                                &nbsp;&nbsp;&nbsp;&nbsp;After 13 weeks of serious college stuff, we finally got to relax!
                            </p>
                            <p className="text-lg lg:text-xl text-left">
                                &nbsp;&nbsp;&nbsp;&nbsp;<span>Game day</span> is an event in CPE101 which features <span className="font-bold">competitions</span> for you to take part in. There's a lot of games for you to choose from, VALORANT, Among Us, Nintendo Switch Sports, UNO, even ModTank. Winners of each game get 10% towards their grade.
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
