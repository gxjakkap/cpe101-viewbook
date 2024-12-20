import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

// @ts-ignore
import 'swiper/css'
import Meteors from './ui/meteors'

export default function Hero() {
    return (
        <section className="h-screen lg:h-[102vh] w-full relative z-0 scroll-mt-[-10px]" id="hero">
            <div className="relative h-full w-full bg-black text-white">
                <div className="absolute inset-0 bg-cover bg-center">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="opacity-35 lg:opacity-45 blur-[2px]"
                    >
                        <SwiperSlide>
                            <img className="w-screen h-screen object-cover" src="https://res.cloudinary.com/dynrld3nm/image/upload/cpe101viewbook/maincomponent/7c1bcd02-8666-4666-97bf-ee4ee1392015_jbrggq.jpg"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="w-screen h-screen object-cover" src="https://res.cloudinary.com/dynrld3nm/image/upload/cpe101viewbook/maincomponent/IMG_1373_cc7cef.jpg"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="w-screen h-screen object-cover" src="https://res.cloudinary.com/dynrld3nm/image/upload/cpe101viewbook/maincomponent/IMG_1833_twe7qv.jpg"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="w-screen h-screen object-cover" src="https://res.cloudinary.com/dynrld3nm/image/upload/cpe101viewbook/maincomponent/7c1bcd02-8666-4666-97bf-ee4ee1392015_jbrggq.jpg"/>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="relative flex flex-col z-10 h-full overflow-x-hidden pt-8 pb-32 lg:p-12 lg:pb-48 xl:p-12">
                    <Meteors number={50} />
                    <div className="m-auto">
                        <h1 className="text-5xl lg:text-6xl redhat-medium text-center">CPE101:</h1>
                        <h2 className="text-2xl lg:text-4xl redhat-bold text-center">Engineering Exploration</h2>
                        <p className="text-lg lg:text-xl inter-regular text-center text-gray-200 mt-6">A brief introduction to most of Computer Engineering principles. Here's what we experienced this year as a freshmen in this course.</p>
                        <p className="text-lg lg:text-xl inter-regular text-center text-gray-200 mt-6">Made by <a href="/members" className="underline">B01 (Click here for a list of members)</a></p>
                    </div>
                    <p className="text-lg lg:text-xl inter-regular text-center">Scroll down to <span className="ml-2 text-base lg:text-lg press-start-2p-regular">Get Started!</span></p>
                    
                </div>
            </div>
        </section>
    )
}
