import { useCallback, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Hero from "./Hero";
import MomentScreen from "./MomentScreen";
import Ending from "./Ending";
import { CATEGORIES, pickSession } from "./moments";
import "./styles.css";

export default function App() {
  const [phase, setPhase] = useState("hero");
  const [step, setStep] = useState(0);
  const [session, setSession] = useState(() => pickSession());
  const start = useCallback(() => { setSession((prev) => pickSession(prev)); setStep(0); setPhase("journey"); }, []);
  const next = useCallback(() => { if (step < CATEGORIES.length - 1) setStep((s) => s + 1); else setPhase("done"); }, [step]);
  return <div className="app"><div className="grain" aria-hidden="true" /><AnimatePresence mode="wait">
    {phase === "hero" && <Hero key="hero" onStart={start} />}
    {phase === "journey" && <MomentScreen key="journey" step={step} category={CATEGORIES[step]} message={session[step]} onNext={next} />}
    {phase === "done" && <Ending key="ending" onRestart={start} />}
  </AnimatePresence></div>;
}
