import { data } from "../data/data"

export default function About() {
    return (
        <section id="about" className="mt-24 md:mt-30 scroll-mt-30">
            <h2 className="font-extrabold text-center text-lg sm:text-xl mb-3 sm:mb-4 md:mb-5 lg:mb-6">About Me</h2>

            <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 flex flex-col gap-6 md:flex-row md:items-start">
                {/* IMAGE */}
                <div className="w-full md:w-5/12 rounded-2xl overflow-hidden md:flex md:items-center">
                    <img
                        src="/cat-grad.JPEG"
                        alt="A graduation portrait of Cathleen holding her hat in her gown at CSULB."
                        className="w-full h-80 object-cover"
                    />
                </div>
                {/* TEXT */}
                <div className="w-full md:w-7/12 leading-relaxed">
                    <p>{data.about.aboutMe}<br/><br/>{data.about.hobby} {data.about.ending}</p>
                </div>
            </div>
        </section>
    )
}