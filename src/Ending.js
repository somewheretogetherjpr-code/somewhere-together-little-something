import { motion } from "framer-motion";
export default function Ending({ onRestart }) {
  return <motion.main className="ending" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
    <div className="ending-mark">✦</div>
    <h2>That was your little something. 💛</h2>
    <p>Maybe you needed one.<br />Maybe you didn’t.<br />Either way, we’re glad you stopped by.</p>
    <button onClick={onRestart}>Give me another little something →</button>
    <div className="marquee" aria-hidden="true">Where connections begin, stories unfold. • Somewhere Together • Where connections begin, stories unfold. •</div>
  </motion.main>;
}
