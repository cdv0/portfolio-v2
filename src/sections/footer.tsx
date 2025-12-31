import { data } from "../data/data"

export default function Footer() {
    return (
        <section id="footer" className="flex py-24 bg-[#fff2f2] justify-between px-8 sm:px-16 md:px-24 lg:px-40 gap-10">
            <div>
                <p className="mb-2 text-xl momo text-[#f05776] md:text-2xl">Cathleen Vu</p>
                <div className="flex flex-col gap-1">
                    <p>{data.location}</p>
                    <p>{data.email}</p>
                </div>
            </div>

            <div className="flex gap-16 flex-wrap">
                {/* NAVIGATION */}
                <nav>
                    <p className="font-semibold mb-2">Navigation</p>
                    <div className="flex flex-col gap-1">
                        {data.navLinks.map((l) => (
                            <a className="text-gray-500 transition-colors hover:text-[#f05776] hover:underline hover:underline-offset-6" href={l.href}>{l.label}</a>
                        ))}
                    </div>
                </nav>

                {/* SOCIALS */}
                <div>
                    <p className="font-semibold mb-2">Socials</p>

                    <div className="flex flex-col gap-1">
                        {data.socials.map((s) => (
                            <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
                                <p className="text-gray-500 transition-colors hover:text-[#f05776] hover:underline hover:underline-offset-6">{s.label}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}