import { data } from "../data/data"

export default function Education() {

    const formatRange = (startDate: string, endDate: string | null) => {
        return `${startDate} - ${endDate ?? "Present"}`;
    }

    return (
        <section id="education" className="mt-24 md:mt-30 scroll-mt-30">
            <h2 className="font-extrabold text-center text-lg sm:text-xl mb-3 sm:mb-4 md:mb-5 lg:mb-6">Education</h2>

            <div className="flex flex-col gap-6 mx-auto max-w-6xl px-8">
                {data.education.map((e) => (
                    <div className="border border-gray-200 shadow-sm rounded-xl p-6 flex gap-8">
                        <img src={e.image} alt={e.school}   className={`hidden sm:block h-auto object-contain w-20 sm:w-25 md:w-27 lg:w-29 ${e.school === "California State University, Long Beach" ? "p-3" : ""}`}/>

                        <div className="flex flex-col justify-center">
                            <p className="font-bold text-lg">{e.degree} in {e.major}</p>
                            <p className="font-bold font-lg text-[#f05776]">{e.school}</p>
                            <p className="text-gray-500 text-sm">{e.location} • {formatRange(e.startDate, e.endDate)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}