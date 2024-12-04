import { cn } from "@/lib/utils"
import GridPattern from "../ui/grid-pattern"

export default function Week15() {
    return (
        <section id="week15" className="relative min-h-screen bg-slate-900 pb-4 lg:pb-0 w-full text-slate-100 flex flex-col gap-y-8 pt-16 px-8 lg:p-20">
            <div className="flex flex-col gap-y-8 z-10 whitespace-pre-wrap">
                <h1 className="text-4xl lg:text-[2.5rem] text-center lg:text-left redhat-medium">
                    Week 15: Final Exam (and final goodbye 👋🏼)
                </h1>
                <div className="flex flex-col gap-y-8 items-center mx-auto lg:mx-0 lg:items-start 3xl:mt-20">
                    <div className="flex flex-col w-full lg:flex-row gap-x-12 gap-y-4 lg:gap-y-0">
                        <div className="flex flex-col gap-y-4 inter-regular">
                            <p className="text-lg lg:text-2xl text-left">
                                &nbsp;&nbsp;&nbsp;&nbsp;By the time you read our viewbook, we'd have finished our final test (I wrote this before taking the test so I have no clue what it's like).
                            </p>
                            <p className="text-lg lg:text-2xl text-left">
                                &nbsp;&nbsp;&nbsp;&nbsp;Alas, our final test is where we prove everything we've learned this semester. Every assignment, every classes, every project leads to this. I don't know what it will be like, I've heard quite a fair share of rumors from sophomore guys that it's kinda hard. But I guess I'll do my best.
                            </p>
                            <p className="text-lg lg:text-2xl text-left">
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold">Thank you</span>, for taking your time to read through our viewbook. It has been quite a fun journey through this course.
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
