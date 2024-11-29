import { cn } from "@/lib/utils"
import GridPattern from "../ui/grid-pattern"

export default function Week9() {
    return (
        <section id="week9" className="relative min-h-screen pb-4 w-full bg-[radial-gradient(circle_at_right_top,_var(--tw-gradient-stops))] from-[#120d22] from-50% via-[#8f3021] via-55% to-[#120d22] to-65% text-neutral-100 flex flex-col gap-y-8 pt-16 px-8 lg:p-20 3xl:scroll-mt-0 lg:pb-4">
            <div className="flex flex-col z-10 whitespace-pre-wrap">
                <h1 className="text-4xl lg:text-[2.5rem] text-center lg:text-left redhat-medium">
                    Week 9: The three challenges 3️⃣
                </h1>
                <div className="flex flex-col gap-y-8 lg:gap-y-2 items-center mx-auto lg:mt-4 lg:items-start py-2">
                    <div className="flex flex-col-reverse w-full lg:flex-row-reverse gap-x-12 gap-y-4 lg:gap-y-0">
                        <div className="flex flex-col gap-y-3 max-w-screen-md inter-regular">
                            <p className="text-lg lg:text-xl text-left">
                                &nbsp;&nbsp;&nbsp;&nbsp;This course also has exams…. In week 9 we get to do the midterm test. Unlike the other courses, these midterm exams don&apos;t make you sit and circle the correct answer. All you need to do is pass the challenges.
                            </p>
                            <p className="text-lg lg:text-xl text-left">
                                &nbsp;&nbsp;&nbsp;&nbsp;&apos;<span className="font-bold">The Three Challenges</span>&apos;, like how it is named, you have to do 3 challenges. However, you don&apos;t need to pass all the challenges. You just will not get a full score. This test is a paired test. You have to find a partner to do this test with you. You need to make your robot move in specific ways using Arduino coding and some other gadgets: the infrared sensor and the bumpers.
                            </p>
                        </div>
                        <div className="flex flex-col gap-y-1 lg:gap-y-3">
                            <iframe
                                src="https://player.cloudinary.com/embed/?public_id=cpe101viewbook%2Fweek9%2FIMG_4670_b4jaae&cloud_name=dynrld3nm&profile=new2"
                                width="480"
                                height="240"
                                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                                allowFullScreen
                            />
                            <p className="caveat-medium text-zinc-200 text-xl text-center">Challenge 1: Blind Maze (or something along this line iirc)</p>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse w-full lg:flex-row-reverse gap-x-12 gap-y-4 lg:gap-y-0">
                        <div className="flex flex-col gap-y-1">
                            <img className="max-h-[250px] rounded-md object-contain drop-shadow-xl" src="https://res.cloudinary.com/dynrld3nm/image/upload/cpe101viewbook/week9/IMG_4674_zoqope.jpg"/>
                            <p className="caveat-medium text-zinc-200 text-xl text-center">Challenge 3: Distance measure something I can&apos;remember it.</p>
                        </div>
                        <div className="flex flex-col gap-y-3 lg:mt-4 max-w-screen-md inter-regular">
                            <p className="text-lg lg:text-xl text-left">
                                &nbsp;&nbsp;&nbsp;&nbsp; 3 sounds like a few, but in reality, it pretty much took almost every group full 4 hours of the test. The first test is to move your robot in a specific way. This one is pretty simple yet can be the one that takes most of the time. You have to code your robot to move to the goal and can only use the code with no other help. The second is you have to bump the figure that TA&apos;s put on the map and make your robot move around until it bumps about 6 to 7 figures. Since the map is like a maze, the bumper can help you indicate the way you want to move your robot. And the last challenge is to use the infrared sensor to help you move your robot along the path that TAs made.
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
