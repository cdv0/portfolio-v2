import { useEffect } from "react"
import { useParams, useNavigate, useLocation } from "react-router-dom"
import { data } from "../data/data"

export default function ProjectDetails() {
    const { slug } = useParams()
    const navigate = useNavigate()
    const location = useLocation()

    const project = data.projects.find((p) => p.slug === slug)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [slug])

    useEffect(() => {
        if (!location.hash) return
        const el = document.querySelector(location.hash)
        if (el) el.scrollIntoView({ behavior: "smooth" })
    }, [location.hash])

    const handleBack = () => {
        if (window.history.length > 1) {
            navigate(-1)
            return
        }
        navigate("/#projects")
    }

    if (!project) {
        return (
            <div className="min-h-screen bg-white">
                <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
                    <div className="mx-auto max-w-6xl px-8 sm:px-6 md:px-10 lg:px-12 py-5 flex justify-center">
                        <button onClick={handleBack} className="group flex justify-start items-center gap-1 w-full max-w-6xl">
                            <span className="relative w-4 h-4 rotate-180">
                                <img src="/arrow-right.svg" className="absolute inset-0 w-4 h-4 transition-opacity duration-200 opacity-100 group-hover:opacity-0" />
                                <img src="/arrow-right-pink.svg" className="absolute inset-0 w-4 h-4 transition-opacity duration-200 opacity-0 group-hover:opacity-100" />
                            </span>

                            <span>
                                <p className="text-gray-700 text-sm transition-colors group-hover:underline hover:underline-offset-6 hover:text-[#f05776]">Back</p>
                            </span>
                        </button>
                    </div>
                </header>

                <main className="mx-auto px-8 sm:px-6 md:px-10 lg:px-12 pt-10 pb-16">
                    <div className="w-full flex flex-col items-center">
                        <h2 className="text-xl font-bold">Project not found</h2>
                    </div>
                </main>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-white">
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
                <div className="px-8 sm:px-6 md:px-10 lg:px-12 py-5 flex justify-center">
                    <div className="w-full">
                        <button onClick={handleBack} className="group flex justify-start items-center gap-1">
                            <span className="relative w-4 h-4 rotate-180">
                                <img src="/arrow-right.svg" className="absolute inset-0 w-4 h-4 transition-opacity duration-200 opacity-100 group-hover:opacity-0" />
                                <img src="/arrow-right-pink.svg" className="absolute inset-0 w-4 h-4 transition-opacity duration-200 opacity-0 group-hover:opacity-100" />
                            </span>

                            <span>
                                <p className="text-gray-700 text-sm transition-colors group-hover:underline hover:underline-offset-6 hover:text-[#f05776]">Back</p>
                            </span>
                        </button>
                    </div>
                </div>
            </header>

            <main className="px-8 sm:px-6 md:px-10 lg:px-12 pt-10 pb-16">
                <div className="w-full mx-auto flex flex-col items-center">
                    <section className="w-full grid gap-10 lg:grid-cols-2 items-start">
                        <div className="rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100">
                            <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
                        </div>

                        <div className="flex flex-col items-start">
                            <div className="pb-3">
                                <h3 className="font-bold text-lg">{project.title}</h3>
                                <p className="mt-2 mr-10 text-gray-700">{project.detailedDesc}</p>
                            </div>

                            <div className="flex flex-wrap justify-start gap-3">
                                {project.url?.liveDemo ? (
                                    <a href={project.url.liveDemo} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-2 bg-[#f05776] text-white transition-colors hover:bg-[#f37891] font-bold pl-4 pr-6 py-2 rounded-3xl transition-smooth">
                                        <img src="/ne-white.svg" className="h-5 w-5" />
                                        <p className="text-sm lg:text-base">Live Demo</p>
                                    </a>
                                ) : null}

                                {project.url?.github ? (
                                    <a href={project.url.github} target="_blank" rel="noopener noreferrer" className="group flex justify-center items-center gap-2 bg-white border border-gray-300 font-bold pl-4 pr-6 py-2 rounded-3xl transition-colors hover:text-[#f05776] hover:border-[#f37891]">
                                        <span className="relative h-6 w-6">
                                            <img src="/github-mark.svg" className="absolute inset-0 h-5 w-5 sm:h-6 sm:w-6 transition-opacity duration-200 opacity-100 group-hover:opacity-0" />
                                            <img src="/github-mark.svg" className="absolute inset-0 h-5 w-5 sm:h-6 sm:w-6 transition-opacity duration-200 opacity-0 group-hover:opacity-100" />
                                        </span>

                                        <p className="text-sm lg:text-base">View Source</p>
                                    </a>
                                ) : null}
                            </div>
                        </div>
                    </section>

                    <section className="mt-12 w-full grid gap-3 lg:gap-4 lg:grid-cols-3">
                        <div className="flex flex-col gap-3">
                            <div className="rounded-xl p-6 bg-gray-100">
                                <h3 className="font-extrabold text-md">Technology Stack</h3>
                                <p className="mt-2 text-md text-gray-700 leading-relaxed">{Array.isArray(project.techStack) ? project.techStack.join(", ") : project.techStack}</p>
                            </div>

                            <div className="rounded-xl p-6 bg-gray-100">
                                <h3 className="font-extrabold text-md">Role</h3>
                                <p className="mt-2 text-md text-gray-700 leading-relaxed">{project.role}</p>
                            </div>
                        </div>

                        <div className="rounded-xl p-6 bg-gray-100 lg:col-span-2">
                            <h3 className="font-extrabold text-md">Contributions</h3>
                            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                                {project.contribution?.map((c: string) => (
                                    <li key={c}>{c}</li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </div>
            </main>``
        </div>
    )
}