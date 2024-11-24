import { cn } from "@/lib/utils"
import GridPattern from "../ui/grid-pattern"

export default function Week6() {
    return (
        <section id="week6" className="relative min-h-screen pb-4 lg:pb-0 w-full bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-[#0d1a2d] from-50% via-[#51235e] via-55% to-[#0d1a2d] to-65% text-neutral-100 flex flex-col gap-y-8 pt-16 px-8 lg:p-20">
            <div className="flex flex-col z-10 whitespace-pre-wrap">
                <h1 className="text-4xl lg:text-[2.5rem] text-center lg:text-left redhat-medium scroll-mt-14">
                    Week 6: Application Design
                </h1>
                <div className="flex flex-col gap-y-8 lg:gap-y-4 items-center mx-auto lg:mt-4 lg:items-start py-2">
                    <div className="flex flex-col-reverse w-full lg:flex-row gap-x-12 gap-y-4 lg:gap-y-0">
                        <div className="flex flex-col gap-y-3 lg:mt-4 max-w-screen-md inter-regular">
                            <p className="text-lg lg:text-xl text-left">
                                I wanted to start creating a website. Let&apos;s see what I need to know to make them….. WHAT! 3 WHOLE NEW LANGUAGE?!?!
                            </p>
                            <p className="text-lg lg:text-xl text-left">In the 6th week we have an opportunity to learn about  Web Application Development. We learn about what it is and what we need to learn. And you need to learn A LOT about it. Web Applications are split into two parts, which are Frontend and Backend. Frontend is like the face of your Web App, it is the website, and it is used to display information for the user and also show how creative you can put into your design. For the Backend, it is about managing how your Web App functions; storing database, managing data and sending it to the Frontend. </p>
                            <p className="text-lg lg:text-xl text-left">Since there is a lot of information, you need to learn to become a FullStack; a person who can do both Frontend and Backend. That makes the instructors focus on the Frontend. To start making a website, you will use 3 languages, which are HTML, CSS and Javascript. HTML is the body of your website. It contains information or things you want to show on the site. CSS is the make-up for your site. You can use this language to make your website fabulous. And lastly, JavaScript is a programming language that we use to control all the functions on the website. It helps you do a lot of bizarre things on your site. After learning the basics of how to make a website, we are assigned to creating our portfolio website.</p>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <div className="grid grid-cols-2 grid-rows-2 gap-2">
                                <a href="https://next.guntxjakka.me/" target="_blank" rel="noopener,noreferrer">
                                    <img className="max-h-[250px] rounded-md object-contain drop-shadow-xl hover:scale-[1.02] transition" src="https://res.cloudinary.com/dynrld3nm/image/upload/cpe101viewbook/week6/firefox_pKmJQKF1Zm_zs6qe1.png"/>
                                </a>
                                <a href="https://vocal-caramel-499977.netlify.app/" target="_blank" rel="noopener,noreferrer">
                                    <img className="max-h-[250px] rounded-md object-contain drop-shadow-xl hover:scale-[1.02] transition" src="https://res.cloudinary.com/dynrld3nm/image/upload/cpe101viewbook/week6/Screenshot_2024-11-24_154804_d1febq.png"/>
                                </a>
                                
                                <img className="max-h-[250px] rounded-md object-contain drop-shadow-xl" src="https://res.cloudinary.com/dynrld3nm/image/upload/cpe101viewbook/week6/firefox_pKmJQKF1Zm_zs6qe1.png"/>
                                <img className="max-h-[250px] rounded-md object-contain drop-shadow-xl" src="https://res.cloudinary.com/dynrld3nm/image/upload/cpe101viewbook/week6/firefox_pKmJQKF1Zm_zs6qe1.png"/>
                            </div>
                            <p className="caveat-medium text-zinc-200 text-xl text-center">Here's our site! (ps: some of them are clickable!)</p>
                        </div>
                    </div>
                    {/* <div className="flex flex-col-reverse w-full lg:flex-row gap-x-12 gap-y-4 lg:gap-y-0">
                        <div className="flex flex-col gap-y-1">
                            <img className="max-h-[250px] object-contain drop-shadow-xl" src="https://res.cloudinary.com/dynrld3nm/image/upload/cpe101viewbook/week5/firefox_UwBC9mBFyQ_wyvina.png"/>
                            <p className="caveat-medium text-zinc-200 text-xl text-center">What Teachable Machine look like</p>
                        </div>
                        <div className="flex flex-col gap-y-3 lg:mt-4 max-w-screen-md inter-regular">
                            <p className="text-lg lg:text-xl text-left">
                                &nbsp;&nbsp;&nbsp;&nbsp; We used <a className="underline" href="https://teachablemachine.withgoogle.com/" target="_blank" rel="noopener,noreferrer">Teachable Machine</a> for this class. We get to train our AI to recognize and detect what items we are showing to them, or which of our fingers are showing to them.
                            </p>
                        </div>
                    </div> */}
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
