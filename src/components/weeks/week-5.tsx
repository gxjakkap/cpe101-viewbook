import { cn } from "@/lib/utils"
import GridPattern from "../ui/grid-pattern"

export default function Week5() {
    return (
        <section id="week5" className="relative min-h-screen w-full bg-gradient-to-bl from-[#0d1a2d] from-40% via-[#204753] via-55% to-[#0d1a2d] to-65% text-neutral-100 flex flex-col gap-y-8 pt-16 px-8 lg:p-20">
            <div className="z-10 whitespace-pre-wrap">
                <h1 className="text-4xl lg:text-[2.5rem] text-center lg:text-left redhat-medium scroll-mt-14">
                    Week 5: Intelligence Systems
                </h1>
                <div className="flex flex-col gap-y-8 lg:gap-y-4 items-center mx-auto lg:mt-4 lg:items-start py-2">
                    <div className="flex flex-col-reverse w-full lg:flex-row gap-x-12 gap-y-4 lg:gap-y-0">
                        <div className="flex flex-col gap-y-3 lg:mt-4 max-w-screen-md inter-regular">
                            <p className="text-lg lg:text-xl text-left">
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="italic">“AI will take over our job!”</span> be fraid not, this &apos;ChatGPT&apos; man is just a nice person who helps me do my homework when I&apos;m struggling…
                            </p>
                            <p className="text-lg lg:text-xl text-left">
                                &nbsp;&nbsp;&nbsp;&nbsp;In this class we learned about <span className="font-bold">AI (Artificial Intelligence)</span> and <span className="font-bold">ML (Machine Learning)</span>. This field of work is a hot-topic right now, so knowing a little about them won&apos;t hurt. AI and ML can help us do a lot of things, they also reduce time doing some operations. If they are used with the right person, they can become some of the <span className="font-bold">most powerful tools</span> for them.
                            </p>
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <img className="max-h-[250px] object-contain drop-shadow-xl" src="https://res.cloudinary.com/dynrld3nm/image/upload/cpe101viewbook/week5/IMG_2220_be7u7y.jpg"/>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse w-full lg:flex-row gap-x-12 gap-y-4 lg:gap-y-0">
                        <div className="flex flex-col gap-y-1">
                            <img className="max-h-[250px] object-contain drop-shadow-xl" src="https://res.cloudinary.com/dynrld3nm/image/upload/cpe101viewbook/week5/firefox_UwBC9mBFyQ_wyvina.png"/>
                            <p className="caveat-medium text-zinc-200 text-xl text-center">What Teachable Machine look like</p>
                        </div>
                        <div className="flex flex-col gap-y-3 lg:mt-4 max-w-screen-md inter-regular">
                            <p className="text-lg lg:text-xl text-left">
                                &nbsp;&nbsp;&nbsp;&nbsp; We used <a className="underline" href="https://teachablemachine.withgoogle.com/" target="_blank" rel="noopener,noreferrer">Teachable Machine</a> for this class. We get to train our AI to recognize and detect what items we are showing to them, or which of our fingers are showing to them.
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
