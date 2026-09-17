import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const EASE = [0.25, 1, 0.5, 1];

const MaskedLine = ({ children, delay, className }) => (
    <span className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
        <motion.span
            className={`block ${className}`}
            initial={{ y: "115%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.1, delay, ease: EASE }}
        >
            {children}
        </motion.span>
    </span>
);

const Hero = ({ onStart }) => {
    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const sx = useSpring(mx, { stiffness: 40, damping: 15 });
    const sy = useSpring(my, { stiffness: 40, damping: 15 });
    const logoX = useTransform(sx, [-0.5, 0.5], [-7, 7]);
    const logoY = useTransform(sy, [-0.5, 0.5], [-5, 5]);

    const onMouseMove = (e) => {
        mx.set(e.clientX / window.innerWidth - 0.5);
        my.set(e.clientY / window.innerHeight - 0.5);
    };

    return (
        <motion.main
            data-testid="hero-screen"
            className="relative z-10 flex min-h-[100dvh] w-full flex-col items-center justify-between px-6 pb-7 pt-10 sm:px-10"
            onMouseMove={onMouseMove}
            exit={{ opacity: 0, y: -24, transition: { duration: 0.55, ease: EASE } }}
        >
            <div className="h-4" aria-hidden="true" />

            <div className="flex w-full max-w-md flex-col items-center text-center">
                <motion.div style={{ x: logoX, y: logoY }} className="will-change-transform">
                    <motion.img
                        src="/logo-lockup.png"
                        alt="Somewhere Together"
                        data-testid="hero-logo"
                        className="w-48 select-none sm:w-60"
                        draggable="false"
                        initial={{ opacity: 0, scale: 0.94, y: 10 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: [0, -5, 0],
                        }}
                        transition={{
                            opacity: { duration: 1.2, delay: 0.15, ease: EASE },
                            scale: { duration: 1.2, delay: 0.15, ease: EASE },
                            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.4 },
                        }}
                    />
                </motion.div>

                <h1
                    data-testid="hero-title"
                    className="font-display mt-9 text-[2.55rem] leading-[1.12] text-[#3D382F] sm:mt-11 sm:text-6xl"
                >
                    <MaskedLine delay={0.55}>A little something</MaskedLine>
                    <MaskedLine delay={0.72} className="italic">
                        for you.
                    </MaskedLine>
                </h1>

                <motion.p
                    data-testid="hero-subtitle"
                    className="mt-7 max-w-[26ch] text-[15px] leading-relaxed text-[#81796E] sm:text-base"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 1.05, ease: EASE }}
                >
                    No reason.
                    <br />
                    No occasion.
                    <br />
                    Just because you’re here.
                </motion.p>

                <motion.button
                    data-testid="hero-cta-button"
                    onClick={onStart}
                    className="st-btn-primary mt-10 inline-flex items-center gap-2 rounded-full bg-[#3D382F] px-8 py-4 text-[15px] font-medium tracking-wide text-[#FAF7F0]"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 1.25, ease: EASE }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                >
                    Give me a little something
                    <span aria-hidden="true" className="translate-y-[0.5px]">→</span>
                </motion.button>
            </div>

            <motion.p
                data-testid="hero-small-text"
                className="text-[13px] italic text-[#81796E]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.7 }}
            >
                Take a tiny pause.
            </motion.p>
        </motion.main>
    );
};

export default Hero;
