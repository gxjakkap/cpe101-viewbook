import { cn } from "@/lib/utils"
import GridPattern from "../ui/grid-pattern"
import { CSSProperties } from "react"

export default function Week11() {
    const bg: CSSProperties = {
        /* backgroundColor: 'rgba(245,212,212,1)', */
        
        background: 'linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)',
        backgroundBlendMode: 'soft-light,screen'
    }
    return (
        <section id="week11" className="relative min-h-screen pb-4 w-full text-neutral-900 flex flex-col gap-y-8 pt-16 px-8 lg:p-20" style={bg}>
            <div className="flex flex-col z-10 whitespace-pre-wrap">
                <h1 className="text-4xl lg:text-[2.5rem] text-center lg:text-left redhat-medium scroll-mt-14">
                    Week 11: Linux and Virtual Machines 🐧
                </h1>
                <div className="flex flex-col gap-y-8 lg:gap-y-2 items-center mx-auto lg:mt-4 lg:items-start py-2">
                    <div className="flex flex-col-reverse w-full lg:flex-row-reverse gap-x-12 gap-y-4 lg:gap-y-0">
                        <div className="flex flex-col gap-y-3 max-w-screen-md inter-regular">
                            <p className="text-lg lg:text-xl text-left">
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold">OS</span> or <span className="font-bold">Operating System</span> is what we are all familiar with but might not recognize: Windows and macOS, for example. And this week we get to learn more about it.
                            </p>
                            <p className="text-lg lg:text-xl text-left">
                                &nbsp;&nbsp;&nbsp;&nbsp;OS is a type of software used to <span className="font-bold">manage the resources and operation of our computers</span>. It also helps the interface of our computer become user-friendly and makes users more comfortable to interact with it. And here is what they can do:  Memory management, Security, Process management, Device management, File management, and a lot more.
                            </p>
                        </div>
                        <div className="flex flex-col gap-y-1 lg:gap-y-3 mx-auto">
                            <img className="max-h-[250px] rounded-md object-contain drop-shadow-xl" src="https://res.cloudinary.com/dynrld3nm/image/upload/cpe101viewbook/week11/IMG_2501_rg3nbq.jpg"/>
                            <p className="caveat-medium text-xl text-center">Gunt&apos;s super cool webpage 😎</p>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse w-full lg:flex-row-reverse gap-x-12 gap-y-4 lg:gap-y-0">
                        <div className="flex flex-col gap-y-1">
                            <img className="max-h-[250px] rounded-md object-contain drop-shadow-xl" src="https://res.cloudinary.com/dynrld3nm/image/upload/cpe101viewbook/week11/IMG_4896_pkbkpn.jpg"/>
                            <p className="caveat-medium text-xl text-center">Navigating in Linux CLI could be confusing for beginner.</p>
                        </div>
                        <div className="flex flex-col gap-y-3 lg:mt-4 max-w-screen-md inter-regular">
                            <p className="text-lg lg:text-xl text-left">
                                &nbsp;&nbsp;&nbsp;&nbsp;In the lab part, the instructors taught us how to use <a href="https://ubuntu.com" className="underline">Ubuntu</a>, which is an open-source <span className="font-bold">Linux operating system</span>. They also teach us about how to make a web-server with Ubuntu, which can be hard to follow because they have a lot of steps you need to do, so you have to concentrate on what you need to do. This class also has an assignment; they want us to create a website in <span className="font-bold">PHP</span> capable of reading data from <span className="font-bold">MySQL</span> database and visualizing it on the site.
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
