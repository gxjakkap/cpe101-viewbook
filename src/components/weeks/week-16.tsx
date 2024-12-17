import { cn } from "@/lib/utils"
import GridPattern from "../ui/grid-pattern"

export default function Week16() {
    return (
        <section id="week16" className="relative min-h-screen bg-white pb-4 lg:pb-0 w-full text-slate-900 flex flex-col gap-y-8 pt-16 px-8 lg:p-20">
            <div className="flex flex-col gap-y-8 z-10 whitespace-pre-wrap">
                <h1 className="text-4xl lg:text-[2.5rem] text-center lg:text-left redhat-medium">
                    Week 16: Final Project Showcase 💻
                </h1>
                <div className="flex flex-col gap-y-8 items-center mx-auto lg:mx-0 lg:items-start 3xl:mt-20">
                    <div className="flex flex-col w-full lg:flex-row gap-x-12 gap-y-4 lg:gap-y-0">
                        <div className="flex flex-col gap-y-4 inter-regular">
                            <p className="text-lg lg:text-2xl text-left">
                                &nbsp;&nbsp;&nbsp;&nbsp;We completely forgot that we have never mentioned our final project in this viewbook. It has been in the cooking since <a href="#week9" className="underline">week 9</a>. 
                            </p>
                            <p className="text-lg lg:text-2xl text-left">
                                &nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/gxjakkap/ubillize" target="_blank" rel="noopener noreferrer" className="underline">Ubillize</a> is a platform for apartments to manage and notify their tenants about rent and utility bills. Built with Next.js, TailwindCSS, TypeScript, and Docker.
                            </p>
                            <p className="text-lg lg:text-2xl text-left">
                                &nbsp;&nbsp;&nbsp;&nbsp;This week is our project showcase week. We set up a panel and TAs will walk around grading and providing feedback. We got a lot of feedbacks from this and even some complements. This project taught us a lot, especially that poor planning can come back and bite us. However it's also been fun developing this project.
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
