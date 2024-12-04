import { cn } from "@/lib/utils"
import GridPattern from "../ui/grid-pattern"

export default function Week8() {
    return (
        <section id="week8" className="relative min-h-screen pb-4 w-full bg-[radial-gradient(circle_at_right_bottom,_var(--tw-gradient-stops))] from-[#120d22] from-50% via-[#8f3021] via-55% to-[#120d22] to-65% text-neutral-100 flex flex-col gap-y-8 pt-16 px-8 lg:p-20 lg:scroll-mt-[-54px] 3xl:scroll-mt-0 lg:pb-12">
            <div className="flex flex-col z-10 whitespace-pre-wrap">
                <h1 className="text-4xl lg:text-[2.5rem] text-center lg:text-left redhat-medium scroll-mt-14">
                    Week 8: Project competition 🤖
                </h1>
                <div className="flex flex-col gap-y-8 lg:gap-y-2 items-center mx-auto lg:mt-4 lg:items-start py-2">
                    <div className="flex flex-col-reverse w-full lg:flex-row-reverse gap-x-12 gap-y-4 lg:gap-y-0">
                        <div className="flex flex-col gap-y-3 max-w-screen-md inter-regular">
                            <p className="text-lg lg:text-xl text-left">
                                &nbsp;&nbsp;&nbsp;&nbsp;Now, the time has come. It is the time for your work of art to show its performance.
                            </p>
                            <p className="text-lg lg:text-xl text-left">
                                &nbsp;&nbsp;&nbsp;&nbsp;From week 2 we got assigned to work on our group project called &apos;A Treasure Hunter Robot&apos;. And this is the time for us to put our robot hunting treasures. The rules are pretty simple; you have to go into the maze, pick up the treasure, and get out to put the treasure outside to collect scores. The scores depend on what you picked from inside the maze. There is also a time limit for this test, so you have to be wary about what you are planning to do.
                            </p>
                        </div>
                        <div className="flex flex-col gap-y-1 lg:gap-y-3">
                            <iframe
                                src="https://player.cloudinary.com/embed/?public_id=cpe101viewbook%2Fweek8%2FIMG_2213_j5pscf&cloud_name=dynrld3nm&profile=new"
                                width="480"
                                height="210"
                                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                                allowFullScreen
                                className="mx-auto"
                            />
                            <p className="caveat-medium text-zinc-200 text-xl text-center">Gunt's robot first step after receiving it in week 3</p>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse w-full lg:flex-row-reverse gap-x-12 gap-y-4 lg:gap-y-0">
                        <div className="flex flex-col gap-y-1">
                            <div className="flex">
                                <div className="grid grid-cols-2 grid-rows-2 gap-2 mx-auto">                           
                                    <img className="max-h-[150px] 3xl:max-h-[200px] rounded-md object-contain drop-shadow-xl" src="https://res.cloudinary.com/dynrld3nm/image/upload/cpe101viewbook/week8/20241011_152756_wlmlzo.jpg"/>
                                    <img className="max-h-[150px] 3xl:max-h-[200px] rounded-md object-contain drop-shadow-xl" src="https://res.cloudinary.com/dynrld3nm/image/upload/cpe101viewbook/week8/IMG_4541_id1zeh.jpg"/>
                                    <img className="max-h-[150px] 3xl:max-h-[200px] rounded-md object-contain drop-shadow-xl" src="https://res.cloudinary.com/dynrld3nm/image/upload/cpe101viewbook/week8/IMG_0553_hr5jjd.jpg"/>
                                    <img className="max-h-[150px] 3xl:max-h-[200px] rounded-md object-contain drop-shadow-xl" src="https://res.cloudinary.com/dynrld3nm/image/upload/cpe101viewbook/week8/IMG_0546_ywzwxo.jpg"/>
                                </div>
                            </div>
                            <p className="caveat-medium text-zinc-200 text-xl text-center">(Top) Ham's team and them during the test, (Bottom) Gunt and Naan's team and their robot</p>
                        </div>
                        <div className="flex flex-col gap-y-3 lg:mt-4 max-w-screen-md inter-regular">
                            <p className="text-lg lg:text-xl text-left">
                                &nbsp;&nbsp;&nbsp;&nbsp; The test itself is a fun experience. We brainstormed and planned how we wanted to collect the score. The plans for each team will also be different, because it depends on the design of their robot. You also have to assign each role to your group to perform an efficient performance. For example, one person should control the robot, one or two should keep ready to repair your robot, and some other should also help by remembering the map.
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
