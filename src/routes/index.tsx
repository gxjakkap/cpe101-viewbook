import { useState, useEffect } from "react"

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "../components/ui/dialog"
import { Switch } from "../components/ui/switch"
import { Button } from "../components/ui/button"

import Hero from "../components/hero"
import WhatsEE from "../components/whats-ee"
import Week1 from "../components/weeks/week-1"
import Week2 from "../components/weeks/week-2"
import Week3 from "../components/weeks/week-3"
import Week4 from "../components/weeks/week-4"
import Week5 from "../components/weeks/week-5"
import Week6 from "../components/weeks/week-6"
import Week7 from "../components/weeks/week-7"
import Week8 from "../components/weeks/week-8"
import Week9 from "../components/weeks/week-9"
import Week10 from "../components/weeks/week-10"
import Week11 from "../components/weeks/week-11"
import Week12 from "../components/weeks/week-12"
import Week13 from "@/components/weeks/week-13"
import Week14 from "@/components/weeks/week-14"
import Week15 from "@/components/weeks/week-15"


export default function IndexPage() {
    const sectionIds = [
        "hero",
        "intro",
        "week1",
        "week2",
        "week3",
        "week4",
        "week5",
        "week6",
        "week7",
        "week8",
        "week9",
        "week10",
        "week11",
        "week12",
        "week13",
        "week14",
        "week15"
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    const [customScrollBehavior, setCustomScrollBehavior] = useState(true)

    const handleScroll = (e: React.WheelEvent) => {
        if (!customScrollBehavior) return
        if (e.deltaY > 0 && currentIndex < sectionIds.length - 1) {
            e.preventDefault()
            setCurrentIndex(currentIndex + 1)
        }
        else if (e.deltaY < 0 && currentIndex > 0) {
            e.preventDefault()
            setCurrentIndex(currentIndex - 1)
        }
    }

    useEffect(() => {
        const section = document.getElementById(sectionIds[currentIndex]);
        section?.scrollIntoView({ behavior: "smooth" })
    }, [currentIndex])

    return (
        <>
            <div 
                className="min-h-screen w-full" 
                onWheel={handleScroll}
                /* onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd} */
            >
                <Hero />
                <WhatsEE />
                <Week1 />
                <Week2 />
                <Week3 />
                <Week4 />
                <Week5 />
                <Week6 />
                <Week7 />
                <Week8 />
                <Week9 />
                <Week10 />
                <Week11 />
                <Week12 />
                <Week13 />
                <Week14 />
                <Week15 />
            </div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="hidden lg:flex fixed bottom-4 right-4 p-4 z-100" variant="outline" size="icon">
                        {/* <button className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                            </svg>
                        </button> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                        </svg>
                    </Button>
                    
                </DialogTrigger>
                <DialogContent>
                    <DialogTitle>Settings</DialogTitle>
                    <div className="flex flex-col w-full">
                        <div className="flex gap-x-3">
                            <p className="text-lg inter-regular">Scroll behavior</p>
                            <Switch
                                checked={customScrollBehavior}
                                onCheckedChange={() => setCustomScrollBehavior(!customScrollBehavior)}
                             />
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}
