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
            <MainSection />
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
