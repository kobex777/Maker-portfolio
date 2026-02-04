import { motion, useScroll } from 'framer-motion';
import { useRef, useState } from 'react';

const projects = [
    {
        id: 1,
        year: 2026,
        title: "AnyMaps",
        desc: "AI-Powered custom diagrams builder SaaS.",
        stack: [
            "React + Typescript",
            "GenAI",
            "Prompt Engineering",
            "Postgres Database",
            "Mermaid.js, parsing, elk.js, react flow"
        ],
        tag: "GenAI / SaaS / React",
        color: "bg-purple-400",
        videoId: "",
        github: "https://github.com/kobex777/AnyMaps",
        link: "https://any-maps.vercel.app/",
        gifs: [
            "/assets/Anymaps gif 1.gif",
            "/assets/Anymaps gif 2.gif"
        ]
    },
    {
        id: 2,
        year: 2026,
        title: "NeuroAtlas",
        desc: "World's first Neuropathologies 3D Visualizer.",
        stack: [
            "React + Typescript",
            "3D Engine: Three.js with R3F system",
            "Framer Motion",
            "Zustand"
        ],
        tag: "3D / MedTech / Three.js",
        color: "bg-teal-400",
        videoId: "",
        github: "https://github.com/kobex777/NeuroAtlas",
        link: "https://neuro-atlas-beta.vercel.app/",
        gifs: [
            "/assets/neuroatlas gif 1.gif",
            "/assets/neuroatlas gif 2.gif"
        ]
    },
    {
        id: 3,
        year: 2025,
        title: "ESP32 Robot Arm",
        desc: "5 Axis, powered by ESP32 and controlled with potentiometers, printed in 3D.",
        stack: [
            "C++",
            "Math",
            "3D Printing",
            "CAD",
            "Electronics"
        ],
        tag: "Robotics / C++ / 3D Printing",
        color: "bg-orange-400",
        images: [
            "/assets/Robot  arm 1.jpeg",
            "/assets/Robot arm 2.jpeg",
            "/assets/Robot arm 3 .jpeg"
        ],
        github: "https://github.com/kobex777/Robot-arm-2025"
    },
    {
        id: 4,
        year: 2025,
        title: "Quote Generator",
        desc: "A random quotes generator that reinvents itself with every generation.",
        stack: [
            "React: State management",
            "CSS",
            "Node.js",
            "Express.js"
        ],
        tag: "Web / React / Node.js",
        color: "bg-pink-400",
        videoId: "",
        github: "https://github.com/kobex777/quote-generator",
        link: "https://quote-generator-two-taupe.vercel.app/",
        gif: "/assets/Quote generator gif.gif"
    },
    {
        id: 5,
        year: 2024,
        title: "Arduino musical Alarm",
        desc: "An alarm clock that can play any song by regulating voltages in a buzzer with a keypad.",
        stack: [
            "C++",
            "Arduino",
            "Buzzer",
            "Keypad",
            "7S4D Display"
        ],
        tag: "Hardware / C++ / Arduino",
        color: "bg-red-400",
        videoId: "SI7LDO2bTRo",
        github: "https://github.com/kobex777/Arduino-Alarm-buzzer"
    },
    {
        id: 6,
        year: 2024,
        title: "Weather APP",
        desc: "An effective weather webapp that displays the real-time weather using openweather API.",
        stack: [
            "JavaScript",
            "CSS",
            "OpenWeather API",
            "HTML"
        ],
        tag: "Web / API / JS",
        color: "bg-sky-400",
        images: ["/assets/Weather app 1.jpeg", "/assets/Weather app 2.jpeg"],
        github: "https://github.com/kobex777/Final-Project-JS-Weather-App"
    },
    {
        id: 9,
        year: 2023,
        title: "Mundo Deportivo website",
        desc: "My first website ever, made for a fictional athletic goods company.",
        stack: [
            "HTML",
            "CSS"
        ],
        tag: "Web / HTML / CSS",
        color: "bg-green-400",
        images: ["/assets/Mundo Deportivo 1.png", "/assets/Mundo deportivo 2.png"],
        github: "https://github.com/kobex777/Clinique.github.io"
    }
];

const groupedProjects = projects.reduce((acc, project) => {
    if (!acc[project.year]) acc[project.year] = [];
    acc[project.year].push(project);
    return acc;
}, {} as Record<number, typeof projects>);

const sortedYears = Object.keys(groupedProjects).map(Number).sort((a, b) => a - b);

const GLOBAL_GIF = "https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif";

export const ProjectGallery = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    return (
        <section ref={containerRef} className="min-h-screen w-full bg-night py-32 px-6 relative z-10 overflow-hidden">

            <div className="absolute left-4 md:left-1/2 top-[300px] bottom-0 w-[2px] bg-day/10 transform -translate-x-1/2">
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute top-0 left-0 w-full h-full bg-day origin-top shadow-[0_0_10px_rgba(254,241,208,0.5)]"
                />
            </div>

            <motion.div
                className="max-w-4xl mx-auto text-center mb-32 relative z-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl md:text-6xl font-serif text-day mb-6">My Journey</h2>
            </motion.div>

            <div className="max-w-7xl mx-auto flex flex-col gap-24 relative z-20">
                {sortedYears.map((year) => (
                    <div key={year} className="relative">

                        <div className="flex justify-center mb-16 relative">
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="bg-night border border-day/30 px-6 py-2 rounded-full text-day font-serif text-xl z-20 shadow-xl"
                            >
                                {year}
                            </motion.div>
                        </div>

                        <div className="flex flex-col gap-24">
                            {groupedProjects[year].map((project, index) => (
                                <TimelineCard key={project.id} project={project} index={index} yearIndex={year} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

const TimelineCard = ({ project }: { project: any, index: number, yearIndex: number }) => {
    const isEven = project.id % 2 === 0;
    const [isHovered, setIsHovered] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className={`relative flex flex-col md:flex-row items-center gap-12 md:gap-24 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

            <div className="absolute left-4 md:left-1/2 top-1/2 w-4 h-4 bg-day rounded-full transform -translate-x-1/2 -translate-y-1/2 hidden md:block shadow-[0_0_10px_rgba(254,241,208,0.8)]" />

            <motion.div
                className={`flex-1 ${isEven ? 'text-left md:text-right' : 'text-left'} md:w-1/2 pl-12 md:pl-0`}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8 }}
            >
                <span className="text-day/50 font-sans tracking-[0.2em] text-base uppercase mb-4 block">{project.tag}</span>
                <h3 className="text-4xl md:text-5xl font-serif text-day mb-6">{project.title}</h3>
                <p className="font-sans text-day/70 text-lg md:text-xl leading-relaxed mb-8">
                    {project.desc}
                </p>

                {project.stack && (
                    <ul className={`flex flex-col gap-2 ${isEven ? 'items-start md:items-end' : 'items-start'}`}>
                        {project.stack.map((tech: string, i: number) => (
                            <li key={i} className="text-day/50 font-sans text-base flex items-center gap-3">
                                <span className={`w-1.5 h-1.5 rounded-full bg-day/30 ${isEven ? 'order-last md:order-first' : 'order-first'}`} />
                                {tech}
                            </li>
                        ))}
                    </ul>
                )}

                {project.link && (
                    <div className={`mt-8 ${isEven ? 'md:text-right' : 'text-left'}`}>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn inline-flex items-center gap-3 font-sans text-day text-lg tracking-widest border border-day/50 px-8 py-3 rounded-full hover:bg-day hover:text-night transition-all duration-300 shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95"
                        >
                            <span className="font-bold">TRY DEMO</span>
                            <svg className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>
                )}
            </motion.div>

            <motion.div
                className={`flex-1 w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pl-16' : 'md:pr-16'}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8 }}
            >
                {project.gifs && project.gifs.length === 2 ? (
                    <div className="relative w-full group cursor-pointer">
                        <div className="flex flex-col gap-8">
                            {project.gifs.map((gifSrc: string, i: number) => (
                                <div key={i} className={`relative rounded-lg overflow-hidden shadow-2xl border border-day/10 bg-night/50 transform transition-transform duration-500 hover:scale-[1.02]`}>
                                    <div className={`absolute inset-0 ${project.color} opacity-20 pointer-events-none`} />
                                    <img
                                        src={gifSrc}
                                        alt={`${project.title} demo ${i + 1}`}
                                        className="w-full h-auto relative z-0"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-night/50 to-transparent opacity-60 pointer-events-none" />
                                </div>
                            ))}
                        </div>
                    </div>
                ) : project.images && project.images.length === 2 ? (
                    <div className="relative w-full aspect-video group cursor-pointer perspective-1000">
                        {project.images.map((imgSrc: string, i: number) => (
                            <div
                                key={i}
                                className={`
                                    absolute inset-0 rounded-lg overflow-hidden shadow-2xl border border-day/10 bg-night/50 
                                    transition-all duration-700 ease-in-out origin-bottom
                                    ${i === 0
                                        ? 'z-20 group-hover:opacity-0 group-hover:scale-[1.05]'
                                        : 'z-10 scale-95 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-8 group-hover:scale-100'
                                    }
                                `}
                            >
                                <div className={`absolute inset-0 ${project.color} opacity-20 mix-blend-color`} />
                                <img
                                    src={imgSrc}
                                    alt={`${project.title} shot ${i + 1}`}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                            </div>
                        ))}
                    </div>
                ) : project.images ? (
                    <div className="grid grid-cols-3 gap-2 md:gap-4 w-full md:aspect-video items-center">
                        {project.images.map((imgSrc: string, i: number) => (
                            <div key={i} className={`relative rounded-lg overflow-hidden shadow-2xl border border-day/10 bg-night/50 transform transition-transform duration-500 hover:-translate-y-2 ${i === 1 ? 'z-10 scale-105 shadow-day/10' : 'opacity-90'}`}>
                                <div className={`aspect-[9/16] w-full h-full relative`}>
                                    <img
                                        src={imgSrc.includes('path/to') ? "/placeholder_static.png" : imgSrc}
                                        alt={`${project.title} shot ${i + 1}`}
                                        className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-night/90 to-transparent opacity-60 pointer-events-none" />
                                    <div className="absolute bottom-4 left-0 right-0 text-center text-day/50 text-xs font-sans tracking-widest z-10">IMG 0{i + 1}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : project.videoId ? (
                    <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-2xl border border-day/10 bg-black group">
                        {!isPlaying ? (
                            <button
                                onClick={() => setIsPlaying(true)}
                                className="absolute inset-0 w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500"
                            >
                                <img
                                    src={`https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg`}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-transparent to-transparent opacity-60" />
                                <div className="z-10 w-16 h-16 bg-red-600/90 rounded-full flex items-center justify-center pl-1 shadow-[0_0_30px_rgba(220,38,38,0.5)] group-hover:scale-110 transition-transform backdrop-blur-sm">
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                </div>
                            </button>
                        ) : (
                            <iframe
                                src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1`}
                                title={project.title}
                                className="absolute inset-0 w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        )}
                    </div>
                ) : (
                    <div
                        className={`relative aspect-video w-full rounded-lg overflow-hidden shadow-2xl border border-day/10 group cursor-pointer`}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div className={`absolute inset-0 w-full h-full ${project.color} opacity-20`} />
                        <img
                            src={project.gif || "/placeholder_static.png"}
                            alt={project.title}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${project.gif ? '' : 'mix-blend-overlay opacity-50'}`}
                        />

                        <img
                            src={project.gif || GLOBAL_GIF}
                            alt={`${project.title} preview`}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-night/80 to-transparent opacity-60 pointer-events-none" />

                        {project.title !== "Quote Generator" && (
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <span className="font-sans text-day text-sm tracking-widest border border-day px-4 py-2 rounded-full backdrop-blur-sm">PREVIEW</span>
                            </div>
                        )}
                    </div>
                )}

                <div className="mt-6 flex justify-center">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-2.5 rounded-full hover:bg-white/10 hover:border-white/30 hover:scale-105 transition-all duration-300 group/code shadow-lg"
                    >
                        <svg className="w-4 h-4 text-day/70 group-hover/code:text-day transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        <span className="font-mono text-xs uppercase tracking-widest text-day/70 group-hover/code:text-day transition-colors">
                            Code
                        </span>
                    </a>
                </div>
            </motion.div>

        </div>
    );
};
