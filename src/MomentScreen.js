import { motion } from "framer-motion";

export default function MomentScreen({ step, category, message, onNext }) {
  return <motion.main className="moment" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.4 }}>
    <div className="progress" aria-label={`Moment ${step + 1} of 5`}>{[0,1,2,3,4].map((i) => <span key={i} className={i === step ? "dot active" : "dot"} />)}</div>
    <div className="moment-inner">
      <span className="category" style={{ "--accent": category.color }}>{category.icon} {category.label}</span>
      <p className="message">{message}</p>
      <button className="next" onClick={onNext}>{step === 4 ? "That’s enough for now →" : "Next little something →"}</button>
    </div>
  </motion.main>;
}
