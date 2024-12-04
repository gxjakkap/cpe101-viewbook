import { cn } from "@/lib/utils"
import GridPattern from "../ui/grid-pattern"
import { CSSProperties } from "react"

export default function Week10() {
    const bg: CSSProperties = {
        backgroundColor: '#DCD9D4',
        backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%), radial-gradient(at 50% 0%, rgba(255,255,255,0.10) 0%, rgba(0,0,0,0.50) 50%)',
        backgroundBlendMode: 'soft-light,screen'
    }
    return (
        <section id="week10" className="relative min-h-screen pb-4 w-full text-neutral-900 flex flex-col gap-y-8 pt-16 px-8 lg:p-20" style={bg}>
            <div className="flex flex-col z-10 whitespace-pre-wrap">
                <h1 className="text-4xl lg:text-[2.5rem] text-center lg:text-left redhat-medium scroll-mt-14">
                    Week 10: Build a simple game🎮
                </h1>
                <div className="flex flex-col gap-y-8 lg:gap-y-2 items-center mx-auto lg:mt-4 lg:items-start py-2">
                    <div className="flex flex-col-reverse w-full lg:flex-row-reverse gap-x-12 gap-y-4 lg:gap-y-0">
                        <div className="flex flex-col gap-y-3 max-w-screen-md inter-regular">
                            <p className="text-lg lg:text-xl text-left">
                                &nbsp;&nbsp;&nbsp;&nbsp;Ah, after we finished the exam period, now it is time to play a game. Oh wait that&apos;s a typo. It&apos;s *<span className="font-bold">MAKE</span>* a game.
                            </p>
                            <p className="text-lg lg:text-xl text-left">
                                &nbsp;&nbsp;&nbsp;&nbsp;Now we are back at studying period. This week we get to learn about how to make a video game. Playing a game is one of the usual hobbies you can see people have. So, this is a good chance to try and make a game that will make them enjoy it (hopefully).
                            </p>
                        </div>
                        <div className="flex flex-col gap-y-1 lg:gap-y-3">
                            <iframe
                                src="https://player.cloudinary.com/embed/?public_id=cpe101viewbook%2Fweek10%2FIMG_2361_y10fi8&cloud_name=dynrld3nm&profile=new2"
                                width="480"
                                height="240"
                                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                                allowFullScreen
                                className="mx-auto"
                            />
                            <p className="caveat-medium text-xl text-center">Gunt's laptop strugling to run Unity😔</p>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse w-full lg:flex-row-reverse gap-x-12 gap-y-4 lg:gap-y-0">
                        <div className="flex flex-col gap-y-1">
                            <img className="max-h-[250px] rounded-md object-contain drop-shadow-xl" src="https://res.cloudinary.com/dynrld3nm/image/upload/cpe101viewbook/week10/Unity_iH24tCro72_hezlwm.png"/>
                            <p className="caveat-medium text-xl text-center">Unity's interface</p>
                        </div>
                        <div className="flex flex-col gap-y-3 lg:mt-4 max-w-screen-md inter-regular">
                            <p className="text-lg lg:text-xl text-left">
                                &nbsp;&nbsp;&nbsp;&nbsp;There are plenty of ways to make a video game, and in this class we make it with <a href="https://unity.com/" target="_blank" rel="noopener,noreferrer" className="underline">Unity</a>. Unity is a game engine where you can make a game in both 2D and 3D. You have to learn the <a href="https://learn.microsoft.com/en-us/dotnet/csharp/" className="underline">C#</a> to make your game function. Starting making a game might be hard, but Unity community has assets that you can download (both free and paid) and use in your game. At the end of this class, we are assigned to make a game with a partner.
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
