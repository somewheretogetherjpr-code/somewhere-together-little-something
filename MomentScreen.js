import { AnimatePresence, motion } from "framer-motion";
import { CATEGORIES } from "@/data/moments";

const EASE = [0.25, 1, 0.5, 1];

const MomentScreen = ({ step, category, message, onNext }) => {
    const isLast = step === 4;

    return (
        <motion.main
            data-testid="moment-screen"
            className="relative z-10 flex min-h-[100dvh] w-full flex-col items-center px-6 pb-8 pt-10 sm:px-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.55, ease: EASE }}
        >
            <div className="flex w-full max-w-md flex-col items-center gap-4">
                <div data-testid="progress-dots-container" className="flex items-center gap-3">
                    {[0, 1, 2, 3, 4].map((i) => {
                        const active = i === step;
                        const done = i < step;
                        return (
                            <motion.span
                                key={i}
                                data-testid={`progress-dot-${i + 1}`}
                                className="block rounded-full"
                                initial={false}
                                animate={{
                                    width: active ? 11 : 8,
                                    height: active ? 11 : 8,
                                    backgroundColor: active || done ? CATEGORIES[i].color : "rgba(0,0,0,0)",
                                    boxShadow:
                                        active || done
                                            ? "0 0 0 0 rgba(0,0,0,0)"
                                            : "inset 0 0 0 1.5px #D9CFBE",
                                }}
                                transition={{ duration: 0.5, ease: EASE }}
                            />
                        );
                    })}
                </div>
            </div>

            <div className="my-auto flex w-full max-w-md flex-col items-center py-10 text-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={step}
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -14 }}
                        transition={{ duration: 0.55, ease: EASE }}
                    >
                        <span
                            data-testid="moment-category-badge"
                            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.28em]"
                            style={{
                                color: category.color,
                                borderColor: `${category.color}45`,
                                backgroundColor: `${category.color}0D`,
                            }}
                        >
                            <span aria-hidden="true" className="text-sm tracking-normal">{category.emoji}</span>
                            {category.label}
                        </span>
                        <p
                            data-testid="moment-content-text"
                            className="font-display mt-8 max-w-[22ch] text-[1.75rem] leading-[1.35] text-[#3D382F] sm:text-4xl sm:leading-[1.3]"
                        >
                            {message}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>

            <motion.button
                data-testid="moment-next-button"
                onClick={onNext}
                className="st-btn-ghost inline-flex items-center gap-2 rounded-full border border-[#E7E0D5] px-7 py-3.5 text-[15px] font-medium tracking-wide text-[#3D382F]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
                whileTap={{ scale: 0.97 }}
            >
                {isLast ? "That’s my little something" : "A little more"}
                <span aria-hidden="true" className="translate-y-[0.5px]">→</span>
            </motion.button>
        </motion.main>
    );
};

export default MomentScreen;
