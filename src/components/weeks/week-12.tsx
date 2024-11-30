import { cn } from "@/lib/utils"
import GridPattern from "../ui/grid-pattern"

export default function Week12() {
    return (
        <section id="week12" className="relative consolas-regular min-h-screen pb-4 w-full bg-neutral-900 text-lime-400 flex flex-col gap-y-8 pt-16 px-8 lg:p-20 lg:scroll-mt-[-54px] 3xl:scroll-mt-0 lg:pb-4">
            <div className="flex flex-col z-10 whitespace-pre-wrap">
                <h1 className="text-4xl lg:text-[2.5rem] text-center lg:text-left consolas-medium scroll-mt-14">
                    Week 12: Network Security 🧑🏼‍💻
                </h1>
                <div className="flex flex-col gap-y-8 lg:gap-y-2 items-center mx-auto lg:mt-4 lg:items-start py-2">
                    <div className="flex flex-col-reverse w-full lg:flex-row-reverse gap-x-12 gap-y-4 lg:gap-y-0">
                        <div className="flex flex-col gap-y-3 max-w-screen-md ">
                            <p className="text-lg lg:text-xl text-left">
                                <span className="font-bold">*In some random movie*</span>
                            </p>
                            <p className="text-lg lg:text-xl text-left">
                                &nbsp;&nbsp;&nbsp;&nbsp;&apos;<span className="italic">You want me to hack into this site? Ha! That is easy.</span>&apos; said the hackerguy, and then he proceeded to mash his keyboard into the random word.  &apos;<span className="italic">Just need to get to the Firewall, and AHA I&apos;m hacking this site successfully</span>&apos;. Within a minute, this hackerguy just miraculously hacked the website…. 
                            </p>
                            <p className="text-lg lg:text-xl text-left">
                                &nbsp;&nbsp;&nbsp;&nbsp;That is just a plain <span className="font-bold">LIE</span>. Even the first problem in <a href="http://hackthissite.org/" className="underline">hackthissite</a> (the website that gives an example to trying to learn how to hack) takes me more time than whatever happens in the movie to pass the test. (Editor's note: might be P'Ham's skill issue, the first few challenge took me no time 😎)
                            </p>
                        </div>
                        <div className="flex flex-col gap-y-1 lg:gap-y-3 mx-auto">
                            <img className="max-h-[250px] rounded-md object-contain drop-shadow-xl" src="https://res.cloudinary.com/dynrld3nm/image/upload/cpe101viewbook/week12/ciatriad_t4nhor.jpg"/>
                            <p className="text-lg text-center">The CIA triad, a foundation of a secure and reliable system</p>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse w-full lg:flex-row-reverse gap-x-12 gap-y-4 lg:gap-y-0">
                        <div className="flex flex-col gap-y-1">
                            <img className="max-h-[250px] rounded-md object-contain drop-shadow-xl" src="https://res.cloudinary.com/dynrld3nm/image/upload/cpe101viewbook/week12/firefox_1saHZlqCP4_jgvvgl.png"/>
                            <p className="text-lg text-center">hackthissite's interface</p>
                        </div>
                        <div className="flex flex-col gap-y-3 lg:mt-4 max-w-screen-lg w-full">
                            <p className="text-lg lg:text-xl text-left">
                                &nbsp;&nbsp;&nbsp;&nbsp;Week 12th is the last week we got to learn in this course; the rest of the course is presentation. This week is about Network Security. We get to learn about what it is and also what is the opposite of it. Network Security is an action that is used to protect valuable information. And the opposite of Network Security is ‘Cyber Threats’, like the name itself. Cyber Threats are the threat that can be caused on the internet. It can be a scam, a call center or even a hacker.
                            </p>
                            <p className="text-lg lg:text-xl text-left">
                                &nbsp;&nbsp;&nbsp;&nbsp;After we learning about Cyber Security, we also get to try hacking something. By doing this, it can help you check the website if it is secure or not. We use <a href="http://hackthissite.org" target="_blank" rel="noopener noreferrer">hackthissite</a> to try hacking.
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
