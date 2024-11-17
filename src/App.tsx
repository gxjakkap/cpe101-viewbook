import { useState, useEffect } from "react"

import Hero from "./components/hero"
import WhatsEE from "./components/whats-ee"
import Week1 from "./components/weeks/week-1"
import Week2 from "./components/weeks/week-2"
import Week3 from "./components/weeks/week-3"
import Week4 from "./components/weeks/week-4"
import Week5 from "./components/weeks/week-5"
import Week6 from "./components/weeks/week-6"
import Week7 from "./components/weeks/week-7"

function App() {
    const sectionIds = [
        "hero",
        "intro",
        "week1",
        "week2",
        "week3",
        "week4",
        "week5",
        "week6",
        "week7"
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    /* const touchStartY = useRef(0)
    const touchEndY = useRef(0)

    const isAtEnd = (direction: "up" | "down") => {
        const currentSection = document.getElementById(sectionIds[currentIndex])
        if (!currentSection) return false

        const scrollTop = currentSection.scrollTop
        const scrollHeight = currentSection.scrollHeight
        const clientHeight = currentSection.clientHeight

        if (direction === "up") {
            return scrollTop === 0
        }
        if (direction === "down") {
            return scrollTop + clientHeight >= scrollHeight
        }
        return false;
    } */

    const handleScroll = (e: React.WheelEvent) => {
        if (e.deltaY > 0 && currentIndex < sectionIds.length - 1) setCurrentIndex(currentIndex + 1)
        else if (e.deltaY < 0 && currentIndex > 0) setCurrentIndex(currentIndex - 1)
    }

    /* const handleTouchStart = (e: React.TouchEvent) => {
        touchStartY.current = e.touches[0].clientY
    }

    const handleTouchEnd = (e: React.TouchEvent) => {
        touchEndY.current = e.changedTouches[0].clientY
        const yDiff = touchStartY.current - touchEndY.current
        if (yDiff > 50 && currentIndex < sectionIds.length - 1 && isAtEnd("up")) setCurrentIndex(currentIndex + 1)
        else if (yDiff < -50 && currentIndex > 0 && isAtEnd("down")) setCurrentIndex(currentIndex - 1)
    } */

    useEffect(() => {
        const section = document.getElementById(sectionIds[currentIndex]);
        section?.scrollIntoView({ behavior: "smooth" })
    }, [currentIndex])

    return (
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
        </div>
    )
}

export default App;
