import { data } from "../data/data"

export default function Experience() {

    const formatRange = (startDate: string, endDate: string | null) => {
        return `${startDate} - ${endDate ?? "Present"}`;
    }

    return (
        <section id="experience" className="mt-24 md:mt-30 scroll-mt-30">
            <h2 className="font-extrabold text-center text-lg sm:text-xl mb-3 sm:mb-4 md:mb-5 lg:mb-6">Experience</h2>

            <div className="flex flex-col gap-6 mx-auto max-w-6xl px-8">
                {data.experience.map((e) => (
                    <div className="border border-gray-200 shadow-sm rounded-xl p-6 flex gap-8">
                        <img src={e.icon} alt={e.company} className="hidden sm:block h-auto object-contain w-18 sm:w-25 md:w-26 lg:w-27 xl:w-27"/>

                        <div className="flex flex-col justify-center">
                            <p className="font-bold text-lg">{e.title}</p>
                            <p className="font-bold font-lg text-[#f05776]">{e.company}</p>
                            <p className="text-gray-500 text-sm">{e.location} • {formatRange(e.startDate, e.endDate)}</p>
                            {e.bullets.map((b) => (
                                <ul className="list-disc pl-6 mt-2 space-y-1">
                                    <li key={b}>{b}</li>
                                </ul>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}