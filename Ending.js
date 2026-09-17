import { motion } from "framer-motion";
import { CATEGORIES } from "@/data/moments";

const EASE = [0.25, 1, 0.5, 1];
const MARQUEE_PHRASES = ["Where connections begin, stories unfold.", "Somewhere Together", "a little something, just because"];

const MarqueeRow = () => (
    <div className="flex shrink-0 items-center">
        {[0, 1].map((half) => (
            <div key={half} className="flex items-center" aria-hidden={half === 1}>
                {MARQUEE_PHRASES.map((p, i) => (
                    <span key={i} className="flex items-center whitespace-nowrap">
                        <span className={i === 1 ? "font-display italic text-[#3D382F]" : ""}>{p}</span>
                        <span
                            className="mx-8 inline-block h-1 w-1 rounded-full opacity-70"
                            style={{ backgroundColor: CATEGORIES[i % CATEGORIES.length].color }}
                        />
                    </span>
                ))}
            </div>
        ))}
    </div>
);

const Ending = ({ onRestart }) => (
    <motion.main
        data-testid="ending-screen"
        className="relative z-10 flex min-h-[100dvh] w-full flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: EASE }}
    >
        <div className="flex w-full max-w-md flex-1 flex-col items-center justify-center px-6 py-12 text-center">
            <motion.img
                src="/logo-mark.png"
                alt=""
                aria-hidden="true"
                className="w-14 select-none opacity-90"
                draggable="false"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 0.9, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
            />
            <motion.h2
                data-testid="ending-title"
                className="font-display mt-8 text-[2rem] leading-[1.2] text-[#3D382F] sm:text-5xl"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
            >
                That was your little something. 💛
            </motion.h2>
            <motion.p
                data-testid="ending-subtitle"
                className="mt-6 max-w-[30ch] text-[15px] leading-relaxed text-[#81796E] sm:text-base"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
            >
                Maybe you needed one.
                <br />
                Maybe you didn’t.
                <br />
                Either way, we’re glad you stopped by.
            </motion.p>
            <motion.button
                data-testid="ending-restart-button"
                onClick={onRestart}
                className="st-btn-primary mt-10 inline-flex items-center gap-2 rounded-full bg-[#3D382F] px-8 py-4 text-[15px] font-medium tracking-wide text-[#FAF7F0]"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
            >
                Give me another little something
                <span aria-hidden="true" className="translate-y-[0.5px]">→</span>
            </motion.button>
        </div>

        <motion.div
            data-testid="ending-marquee"
            className="w-full overflow-hidden border-y border-[#E7E0D5] py-3.5 text-[11px] uppercase tracking-[0.3em] text-[#81796E]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
        >
            <div className="st-marquee-track">
                <MarqueeRow />
                <MarqueeRow />
            </div>
        </motion.div>
    </motion.main>
);

export default Ending;
