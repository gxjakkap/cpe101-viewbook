import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

// @ts-ignore
import 'swiper/css'

export default function MainSection() {
    return (
        <section className="h-screen w-full" id="hero">
            <div className="relative w-screen h-screen bg-black text-white">
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
                <div className="relative flex flex-col z-10 h-full px-8 lg:p-12">
                    <div className="m-auto">
                        <h1 className="text-5xl lg:text-6xl redhat-medium text-center">CPE101:</h1>
                        <h2 className="text-2xl lg:text-4xl redhat-medium text-center">Engineering Exploration</h2>
                        <p className="text-lg lg:text-xl refhat-medium text-center text-gray-200 mt-6">A brief introduction to most of Computer Engineering principles. Here's what we experienced this year as a freshmen in this course.</p>
                        <p className="text-lg lg:text-xl refhat-medium text-center text-gray-200 mt-6">Made by B01</p>
                    </div>                    
                </div>
            </div>
        </section>
    )
}
