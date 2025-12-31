import { data } from "../data/data"
import { Link } from "react-router-dom"

export default function Projects() {
    return (
        <section id="projects" className="scroll-mt-30 mt-20 md:mt-24">
            <h2 className="font-extrabold text-center text-lg mb-3 sm:mb-4 md:mb-5 lg:mb-6 sm:text-xl">Projects</h2>

            <div className="mx-auto max-w-6xl px-8 grid gap-8 sm:grid-cols-2">
                {data.projects.map((group) => (
                    <article key={group.title} className="rounded-2xl overflow-hidden bg-white shadow-sm">
                        <div className="w-full h-auto overflow-hidden">
                            <img src={group.image} alt={group.title} className="w-full h-full object-contain"/>
                        </div>

                        <div className="p-5">
                            <h3 className="font-bold text-lg">{group.title}</h3>
                            <p className="mt-2 leading-snug text-gray-700">{group.description}</p>

                            <Link to={`/projects/${group.slug}`} className="group flex justify-start items-center mt-4 gap-1">
                                <span>
                                    <p className="text-gray-700 text-sm transition-colors group-hover:underline hover:underline-offset-6 hover:text-[#f05776]">Read more</p>
                                </span>
                                
                                <span className="relative w-4 h-4">
                                    <img src="/arrow-right.svg" className="absolute inset-0 w-4 h-4 transition-opacity duration-200 opacity-100 group-hover:opacity-0"/>
                                    <img src="/arrow-right-pink.svg" className="absolute inset-0 w-4 h-4 transition-opacity duration-200 opacity-0 group-hover:opacity-100"/>
                                </span>
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}