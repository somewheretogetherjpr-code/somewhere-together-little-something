import { motion } from "framer-motion";

export default function Hero({ onStart }) {
  return <motion.main className="hero" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.55 }}>
    <div className="brand"><img src="/logo-lockup.png" alt="Somewhere Together" /></div>
    <div className="content">
      <h1>A little something<br />for you.</h1>
      <p>No reason. No occasion.<br />Just because you’re here.</p>
      <button onClick={onStart}>Give me a little something <span aria-hidden="true">→</span></button>
      <span className="note">Take a tiny pause.</span>
    </div>
  </motion.main>;
}
