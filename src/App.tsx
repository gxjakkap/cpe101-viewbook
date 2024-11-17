/* import { useState, useEffect } from "react"


import MainSection from "./components/main"
import WhatsEE from "./components/whats-ee"
import Week1 from "./components/weeks/week-1"
import Week2 from "./components/weeks/week-2"
import Week3 from "./components/weeks/week-3"
import Week4 from "./components/weeks/week-4"
import Week5 from "./components/weeks/week-5"
import Week6 from "./components/weeks/week-6"

function App() {
    return (
        <div className="min-h-screen w-full">
            <Element>

            </Element>
            <WhatsEE />
            <Week1 />
            <Week2 />
            <Week3 />
            <Week4 />
            <Week5 />
            <Week6 />
        </div>
    )
}

export default App
 */

import { useState, useEffect } from "react";

import MainSection from "./components/main"
import WhatsEE from "./components/whats-ee";
import Week1 from "./components/weeks/week-1";
import Week2 from "./components/weeks/week-2";
import Week3 from "./components/weeks/week-3";
import Week4 from "./components/weeks/week-4";
import Week5 from "./components/weeks/week-5";
import Week6 from "./components/weeks/week-6";

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
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleScroll = (e: React.WheelEvent) => {
        if (e.deltaY > 0 && currentIndex < sectionIds.length - 1) {
            setCurrentIndex(currentIndex + 1); // Scroll down
        } else if (e.deltaY < 0 && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1); // Scroll up
        }
    }

    useEffect(() => {
        const section = document.getElementById(sectionIds[currentIndex]);
        section?.scrollIntoView({ behavior: "smooth" });
    }, [currentIndex])

    return (
        <div className="min-h-screen w-full" onWheel={handleScroll}>
            <MainSection />
            <WhatsEE />
            <Week1 />
            <Week2 />
            <Week3 />
            <Week4 />
            <Week5 />
            <Week6 />
        </div>
    );
}

export default App;
