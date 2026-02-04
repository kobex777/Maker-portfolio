import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const certifications = [
    {
        id: 1,
        title: "Microsoft Office Specialist: Associate (Office 2019)",
        issuer: "Microsoft",
        year: "2025",
        desc: "Demonstrated proficiency in multiple Microsoft Office applications, validating essential productivity skills.",
        color: "from-orange-500 to-red-500",
        link: "https://www.credly.com/users/bryan-alexander-munguia-ramos"
    },
    {
        id: 2,
        title: "Microsoft Office Specialist: Excel Associate (Office 2019)",
        issuer: "Microsoft",
        year: "2025",
        desc: "Certified competency in creating and managing worksheets, cells, tables, formulas, and charts.",
        color: "from-emerald-500 to-green-400",
        link: "https://www.credly.com/users/bryan-alexander-munguia-ramos"
    },
    {
        id: 3,
        title: "Microsoft Office Specialist: PowerPoint Associate (Office 2019)",
        issuer: "Microsoft",
        year: "2024",
        desc: "Validated skills in creating, editing, and enhancing presentations using slide shows and transitions.",
        color: "from-orange-500 to-amber-500",
        link: "https://www.credly.com/users/bryan-alexander-munguia-ramos"
    },
    {
        id: 4,
        title: "Microsoft Office Specialist: Word Associate (Office 2019)",
        issuer: "Microsoft",
        year: "2023",
        desc: "Proven ability to create and maintain professional-looking reports, multilumn newsletters, and business correspondence.",
        color: "from-blue-600 to-indigo-500",
        link: "https://www.credly.com/users/bryan-alexander-munguia-ramos"
    }
];

const roboCompetitions = [
    {
        id: 1,
        year: "2024",
        title: "Marist schools robotics competition",
        role: "Team Captain & Lead Programmer",
        result: "Sparkfun redbot",
        desc: "Designed an automatic navigation algorithm for the redbot car which detects the enviroment with multiple gyro sensors and adjusts voltage to the motors to navigate through any path.",
        code: "Arduino / C++",
        color: "border-cyan-500/50",
        link: "/assets/Robotic competition 2.jpeg"
    },
    {
        id: 2,
        year: "2025",
        title: "Nation-wide robotics competitons",
        role: "Hardware Specialist",
        result: "Freestyle",
        desc: "Developed the 5-DOF robotic arm for this competition winning the 1st place",
        code: "ESP32 / C++",
        color: "border-indigo-500/50",
        link: "/assets/Robotic competition 1.jpeg"
    }
];

const courses = [
    {
        id: 1,
        title: "The Origins I: HTML",
        instructor: "Sonny Li",
        platform: "codedex",
        desc: "The fundamental building blocks of the web. Structure content with semantic tags and create your first multipage website.",
        color: "from-orange-500 to-red-500",
        tags: ["HTML", "Web", "Frontend"],
        link: "https://www.credential.net/675dba8c-0b27-44af-9ea7-6f2492053a2e#acc.bBYT7oZE"
    },
    {
        id: 2,
        title: "The Origins II: CSS",
        instructor: "Sonny Li",
        platform: "codedex",
        desc: "Bring your website to life. Master styling, layouts, and responsive design principles to create visually stunning interfaces.",
        color: "from-blue-500 to-cyan-500",
        tags: ["CSS", "Design", "Styling"],
        link: "https://www.credential.net/4bd3f2d7-af7d-4eb9-a920-997ed5c9cdb1#acc.89g1VILD"
    }
];

export const Certifications = () => {
    return (
        <section className="w-full py-32 px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-6xl font-serif text-day mb-6">Certifications & Diplomas</h2>
                    <p className="text-day/60 font-sans max-w-2xl mx-auto">
                        Official verifications of technical proficiency and professional skills.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mb-32">
                    {certifications.map((cert, index) => (
                        <TiltCard key={cert.id} cert={cert} index={index} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="relative flex flex-col items-center mb-20">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-lg bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none" />

                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            whileInView={{ width: "100px", opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent mb-6"
                        />

                        <h3 className="relative text-3xl md:text-5xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 tracking-tighter mb-6 text-center z-10">
                            <span className="hidden md:inline text-emerald-500/30 font-light mr-4">{`//`}</span>
                            <ScrambleText text="ROBOTIC_COMPETITIONS" />
                            <span className="hidden md:inline text-emerald-500/30 font-light ml-4">{`//`}</span>
                        </h3>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="relative flex items-center gap-3 px-6 py-2 bg-emerald-950/40 border border-emerald-500/20 rounded-full backdrop-blur-sm group hover:border-emerald-500/40 transition-colors"
                        >
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-xs md:text-sm font-mono text-emerald-100/70 tracking-widest uppercase group-hover:text-emerald-100 transition-colors">
                                STATUS: Team Leader (2 Years)
                            </span>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {roboCompetitions.map((comp, index) => (
                            <RoboCard key={comp.id} comp={comp} index={index} />
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative mt-32"
                >
                    <div className="flex items-center gap-4 w-full mb-16 opacity-60">
                        <div className="h-[1px] bg-gradient-to-r from-transparent via-day/30 to-transparent flex-1" />
                        <div className="flex flex-col items-center">
                            <h3 className="font-serif text-day text-3xl md:text-4xl tracking-wide">
                                Coding Courses
                            </h3>
                        </div>
                        <div className="h-[1px] bg-gradient-to-r from-transparent via-day/30 to-transparent flex-1" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {courses.map((course, index) => (
                            <CourseCard key={course.id} course={course} index={index} />
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

const TiltCard = ({ cert, index }: { cert: any, index: number }) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

    function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseXRel = e.clientX - rect.left;
        const mouseYRel = e.clientY - rect.top;

        const xPct = (mouseXRel / width) - 0.5;
        const yPct = (mouseYRel / height) - 0.5;

        x.set(xPct);
        y.set(yPct);
    }

    function onMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            style={{
                perspective: 1000,
            }}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            className="w-full h-full flex items-center justify-center p-8"
        >
            <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full block"
            >
                <motion.div
                    style={{
                        rotateX,
                        rotateY,
                        transformStyle: "preserve-3d",
                    }}
                    className="relative w-full h-[300px] bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl group cursor-pointer"
                >
                    <div
                        className={`absolute -inset-1 bg-gradient-to-br ${cert.color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500 rounded-2xl`}
                        style={{ transform: "translateZ(-50px)" }}
                    />

                    <div
                        className="relative w-full h-full p-8 flex flex-col justify-between overflow-hidden rounded-2xl bg-night/40"
                        style={{ transform: "translateZ(20px)" }}
                    >
                        <div className={`w-12 h-1 bg-gradient-to-r ${cert.color}`} />

                        <div>
                            <span className="text-day/40 font-mono text-sm tracking-widest uppercase mb-2 block">
                                {cert.year} — {cert.issuer}
                            </span>
                            <h3 className="text-2xl font-serif text-day mb-4 group-hover:text-white transition-colors">
                                {cert.title}
                            </h3>
                            <p className="text-day/60 font-sans text-sm leading-relaxed">
                                {cert.desc}
                            </p>
                        </div>

                        <div className="self-end flex items-center gap-3" style={{ transform: "translateZ(30px)" }}>
                            <span className="text-xs font-mono text-day/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase tracking-widest">
                                Verify
                            </span>
                            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${cert.color} p-[1px] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}>
                                <div className="w-full h-full bg-night rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 pointer-events-none bg-gradient-to-tr from-transparent via-white to-transparent transform -translate-x-full group-hover:animate-shine transition-all duration-700" />
                    </div>
                </motion.div>
            </a>
        </motion.div>
    );
};

const ScrambleText = ({ text, className = "" }: { text: string, className?: string }) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";
    const [display, setDisplay] = useState(text);
    const [trigger, setTrigger] = useState(0);

    useEffect(() => {
        let iterations = 0;
        const interval = setInterval(() => {
            setDisplay(
                text
                    .split("")
                    .map((_, index) => {
                        if (index < iterations) {
                            return text[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iterations >= text.length) {
                clearInterval(interval);
            }

            iterations += 1 / 3;
        }, 30);

        return () => clearInterval(interval);
    }, [text, trigger]);

    return (
        <motion.span
            onViewportEnter={() => setTrigger((prev: number) => prev + 1)}
            className={className}
        >
            {display}
        </motion.span>
    );
};

const RoboCard = ({ comp, index }: { comp: any, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="group relative"
        >
            <div className={`absolute top-1/2 ${index % 2 === 0 ? '-right-4' : '-left-4'} w-4 h-[1px] bg-day/20 hidden lg:block`} />

            <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className={`relative bg-night/80 border ${comp.color} border-opacity-30 p-1 overflow-hidden transition-all duration-300 hover:border-opacity-100 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]`}
            >

                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-day/50 transition-all duration-300 group-hover:w-4 group-hover:h-4 group-hover:border-emerald-400" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-day/50 transition-all duration-300 group-hover:w-4 group-hover:h-4 group-hover:border-emerald-400" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-day/50 transition-all duration-300 group-hover:w-4 group-hover:h-4 group-hover:border-emerald-400" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-day/50 transition-all duration-300 group-hover:w-4 group-hover:h-4 group-hover:border-emerald-400" />

                <div className="bg-black/40 p-6 md:p-8 relative z-10 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-6 border-b border-dashed border-day/10 pb-4">
                        <div>
                            <span className="text-xs font-mono text-emerald-400 block mb-1">
                                // SYSTEM.EVENT_ID: 0{comp.id}
                            </span>
                            <h3 className="text-xl md:text-2xl font-mono text-day font-bold uppercase tracking-tight">
                                <ScrambleText text={comp.title} />
                            </h3>
                        </div>
                        <div className="bg-emerald-500/10 px-2 py-1 rounded text-[10px] font-mono text-emerald-400 border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                            {comp.year}
                        </div>
                    </div>

                    <div className="mb-4">
                        <span className="inline-block bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono px-3 py-1 rounded-sm uppercase tracking-wider group-hover:bg-emerald-500/20 transition-colors">
                            ► CATEGORY: {comp.result}
                        </span>
                    </div>

                    <p className="font-sans text-day/70 text-sm mb-6 flex-grow border-l-2 border-day/10 pl-4 py-1 group-hover:border-emerald-500/50 transition-colors">
                        {comp.desc}
                    </p>

                    <div className="mt-auto pt-4 border-t border-day/5 flex flex-wrap gap-4 items-center justify-between">
                        <a
                            href={comp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn flex items-center gap-2 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 px-3 py-1.5 rounded transition-all duration-300"
                        >
                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                            <span className="text-xs font-mono text-emerald-300 uppercase tracking-wider group-hover/btn:text-emerald-200">
                                Verify Cert
                            </span>
                            <svg className="w-3 h-3 text-emerald-400 opacity-60 group-hover/btn:opacity-100 transition-opacity transform group-hover/btn:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                        <div className="text-xs font-mono text-day/40">
                            STACK: <span className="text-day/80 group-hover:text-emerald-300 transition-colors">{comp.code}</span>
                        </div>
                    </div>
                </div>

                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent h-[5px] w-full animate-scan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none mix-blend-screen" />
            </motion.div>
        </motion.div>
    );
};

const CourseCard = ({ course, index }: { course: any, index: number }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative h-full"
            onMouseMove={onMouseMove}
        >
            <motion.div
                animate={{
                    y: [0, -10, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: index * 0.5
                }}
                className="relative h-full"
            >
                <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-lg p-[1px]">

                    <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                            background: useMotionTemplate`
                                radial-gradient(
                                    600px circle at ${mouseX}px ${mouseY}px,
                                    rgba(255, 255, 255, 0.15),
                                    transparent 40%
                                )
                            `
                        }}
                    />

                    <div className="relative h-full bg-night/60 rounded-xl p-8 flex flex-col z-10 transition-colors duration-300 group-hover:bg-night/40">

                        <div className="flex justify-between items-center mb-6">
                            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${course.color} p-[1px] opacity-80`}>
                                <div className="w-full h-full bg-night rounded-full flex items-center justify-center text-xs">
                                    {course.id}
                                </div>
                            </div>
                            <span className="text-xs font-sans text-day/40 uppercase tracking-widest border border-day/10 px-2 py-1 rounded-full">
                                {course.platform}
                            </span>
                        </div>

                        <h3 className="text-2xl font-serif text-day mb-2 group-hover:text-amber-100 transition-colors">
                            {course.title}
                        </h3>
                        <p className="text-sm font-sans text-day/50 mb-4 italic">
                            by {course.instructor}
                        </p>
                        <p className="text-day/70 font-sans text-sm leading-relaxed mb-6 flex-grow">
                            {course.desc}
                        </p>

                        <div className="mb-6">
                            <a
                                href={course.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-xs font-mono text-day/60 hover:text-emerald-400 transition-colors border-b border-transparent hover:border-emerald-400 pb-0.5"
                            >
                                <span>VERIFY CERT</span>
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {course.tags.map((tag: string) => (
                                <span key={tag} className="text-[10px] font-sans text-day/60 bg-white/5 px-2 py-1 rounded border border-white/5 group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};
