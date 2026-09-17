import { useCallback, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import "@/App.css";
import { CATEGORIES, pickSession } from "@/data/moments";
import Hero from "@/components/Hero";
import MomentScreen from "@/components/MomentScreen";
import Ending from "@/components/Ending";

function App() {
    const [phase, setPhase] = useState("hero");
    const [step, setStep] = useState(0);
    const [session, setSession] = useState(() => pickSession());

    useEffect(() => {
        const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
        let raf;
        const loop = (t) => {
            lenis.raf(t);
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        return () => {
            cancelAnimationFrame(raf);
            lenis.destroy();
        };
    }, []);

    const start = useCallback(() => {
        setSession((prev) => pickSession(prev));
        setStep(0);
        setPhase("journey");
    }, []);

    const next = useCallback(() => {
        setStep((s) => {
            if (s < CATEGORIES.length - 1) return s + 1;
            setPhase("done");
            return s;
        });
    }, []);

    return (
        <div
            data-testid="app-container"
            className="relative min-h-[100dvh] w-full overflow-x-hidden bg-[#FAF7F0] text-[#3D382F]"
        >
            <div className="st-grain" aria-hidden="true" />
            <AnimatePresence mode="wait">
                {phase === "hero" && <Hero key="hero" onStart={start} />}
                {phase === "journey" && (
                    <MomentScreen
                        key="journey"
                        step={step}
                        category={CATEGORIES[step]}
                        message={session[step]}
                        onNext={next}
                    />
                )}
                {phase === "done" && <Ending key="ending" onRestart={start} />}
            </AnimatePresence>
        </div>
    );
}

export default App;
