import { cn } from "@/lib/utils";
import GridPattern from "../ui/grid-pattern";

export default function Week3() {
    return (
        <section id="week3" className="relative min-h-screen pb-4 lg:pb-0 w-full bg-gradient-to-tr from-zinc-100 from-10% via-[#cbe1f7] via-15% to-zinc-100 to-40% text-slate-900 flex flex-col gap-y-8 pt-16 px-8 lg:p-20">
            <div className="flex flex-col gap-y-4 lg:gap-y-8 z-10 whitespace-pre-wrap">
                <h1 className="text-4xl lg:text-[2.5rem] text-center lg:text-left redhat-medium">
                    Week 3: Computer Aided Design📜
                </h1>
                <div className="flex flex-col gap-y-8 items-center mx-auto lg:items-start 3xl:mt-20">
                    <div className="flex flex-col-reverse w-full lg:flex-row gap-x-12 gap-y-4 lg:gap-y-0">
                        <div className="flex flex-col gap-y-2 lg:gap-y-4">
                            <img className="lg:max-h-[370px] object-contain rounded-md drop-shadow-xl" src="https://res.cloudinary.com/dynrld3nm/image/upload/cpe101viewbook/week3/IMG_0406-cropped_h5wx1u.jpg"/>
                        </div>
                        <div className="flex flex-col gap-y-3 max-w-screen-md inter-regular">
                            <p className="text-lg lg:text-xl text-left">
                                &nbsp;&nbsp;&nbsp;&nbsp;This class is not just important, it's <span className="font-bold">NEEDED</span> for this course. Last week we got assigned the project about building a cool treasure robot. And how can your robot work properly if you don&apos;t even build the body for it? To be frank, you can skip this week and make your robot with another method. For example, by building it at a welding shop, building your robot frame with your own sweat like how Tony Stark built his Mark I, but that does not suit the CPE student! We don&apos;t have knowledge in that field <span className="italic">(yet?)</span>.
                            </p>
                            <p className="text-lg lg:text-xl text-left">
                                &nbsp;&nbsp;&nbsp;&nbsp;This week we learned about how to use programs called <span className="font-bold">TinkerCAD</span> and <span className="font-bold">AutoCAD</span>. These programs help us build a model in 2D and even 3D! At the end of the class, TAs also took us to <span className="font-bold">INNO-X</span>, which is a workshop at KMUTT where you can print your model you built prior. Not just these can help us build our robot frame. It'll give you the foundation, helping you know how you can make your own model for your upcoming project if you are interested.
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
