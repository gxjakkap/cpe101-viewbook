import { cn } from "@/lib/utils"
import GridPattern from "../ui/grid-pattern"

export default function Week7() {
    return (
        <section id="week7" className="relative min-h-screen pb-4 lg:pb-0 w-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#0d1a2d] from-50% via-[#51235e] via-55% to-[#0d1a2d] to-65% text-neutral-100 flex flex-col gap-y-8 pt-16 px-8 lg:p-20">
            <div className="flex flex-col z-10 whitespace-pre-wrap">
                <h1 className="text-4xl lg:text-[2.5rem] text-center lg:text-left redhat-medium scroll-mt-14">
                    Week 7: Happy Coding 👨🏼‍💻😸
                </h1>
                <div className="flex flex-col gap-y-8 lg:gap-y-4 items-center mx-auto lg:mt-4 lg:items-start py-2">
                    <div className="flex flex-col-reverse w-full lg:flex-row-reverse gap-x-12 gap-y-4 lg:gap-y-0">
                        <div className="flex flex-col gap-y-3 lg:mt-4 max-w-screen-md inter-regular">
                            <p className="text-lg lg:text-xl text-left">
                                &nbsp;&nbsp;&nbsp;&nbsp;Electronic major is one of branches that came from Electric major like us Computer major. Arduino is also one also one of the electronic platforms people start with when they try to build an electronic project. So, this week we get to learn what our niece has to learn(we have to learn it next semester too).
                            </p>
                            <p className="text-lg lg:text-xl text-left">
                                &nbsp;&nbsp;&nbsp;&nbsp;Arduino is an open-source electronics platform based on easy-to-use hardware and software. You can build a lot of creations from an Arduino board: LED lights that turn on periodically, An sound sensor that will turn the light on when it catches a sound, and more. In this class the instructors also give us challenges to do within class too.
                            </p>
                        </div>
                        <div className="flex flex-col gap-y-1 lg:gap-y-3">
                            <iframe
                                src="https://player.cloudinary.com/embed/?public_id=cpe101viewbook%2Fweek7%2FIMG_1219_klnp7m&cloud_name=dynrld3nm&profile=new"
                                width="480"
                                height="270"
                                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                                allowFullScreen
                            />
                            <img className="max-h-[250px] rounded-md object-contain drop-shadow-xl" src="https://res.cloudinary.com/dynrld3nm/image/upload/cpe101viewbook/week7/IMG_1215_lbyjoh.jpg"/>    
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
