import { data } from "../data/data"

export default function Skills() {
    return (
        <section id="skills" className="scroll-mt-30 md:mt-24">
            <div>
                <h2 className="font-extrabold text-center text-lg mb-2 sm:mb-3 md:mb-4 sm:text-xl">What I Do</h2>
                <p className="text-center mb-20 px-10 sm:px-20 md:px-30 lg:px-50">{data.about.whatIDo}</p>
            </div>

            <div>
                <h2 className="font-extrabold text-center text-lg mb-3 sm:mb-4 md:mb-5 lg:mb-6 sm:text-xl">Skills</h2>
                <div className="grid gap-3 mx-auto max-w-6xl px-8 lg:gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    {data.about.skills.map((group) => (
                        <div key={group.label} className="rounded-xl p-6 bg-gray-100">
                            <p className="item-center mb-2 text-xl md:text-2xl lg:text-3xl xl:text-3xl">{group.icon}</p>
                            <h3 className="font-extrabold text-md">{group.label}</h3>
                            <p className="mt-2 text-md text-gray-700 leading-relaxed">{group.list.join(", ")}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}