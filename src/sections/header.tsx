import { data } from "../data/data"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

export default function Header() {
    const [open, setOpen] = useState(false);
    const [activeHref, setActiveHref] = useState("/#home");
    const location = useLocation()

    // Close menu on escape
    useEffect(() => {
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false);
      };
      if (open) window.addEventListener("keydown", onKeyDown);
      return () => window.removeEventListener("keydown", onKeyDown);
    }, [open])

    useEffect(() => {
      if (!location.hash) return
      setActiveHref(`/${location.hash}`)
    }, [location.hash])

    useEffect(() => {
      if (location.pathname !== "/") return

      const ids = data.navLinks
        .map((l) => l.href.split("#")[1])
        .filter(Boolean)

      const elements = ids
        .map((id) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[]

      if (!elements.length) return

      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0]

          if (!visible?.target?.id) return
          setActiveHref(`/#${visible.target.id}`)
        },
        { threshold: 0.35 }
      )

      elements.forEach((el) => observer.observe(el))
      return () => observer.disconnect()
    }, [location.pathname])

    return (
        <>
          {/* HEADER */}
          <section id="header" className="flex justify-between items-center p-3 sm:px-6 md:px-10 lg:px-12 sticky top-0 z-50 bg-white/80 backdrop-blur">
              <div id="logo" className="flex-1">
                  <p className="hidden lg:block text-lg momo text-[#f05776] md:text-xl">Cathleen Vu</p>
              </div>

              <div id="nav" className="hidden lg:block">
                  <nav className="hidden lg:block">
                      <div className="flex gap-6">
                        {data.navLinks.map((l) => (
                              <a
                                key={l.href}
                                href={l.href}
                                onClick={() => setActiveHref(l.href)}
                                className={`cursor-pointer transition-colors hover:text-[#f05776] hover:underline hover:underline-offset-6 ${
                                  activeHref === l.href ? "text-[#f05776] underline underline-offset-6" : ""
                                }`}
                              >
                                {l.label}
                              </a>
                        ))}
                      </div>
                  </nav> 
              </div>

              <button
                  type="button"
                  aria-label="Open menu"
                  onClick={() => setOpen(true)}
                  className="ml-6 rounded-xl p-2 bg-white transition-colors hover:bg-[#ffe0e0] outline-none"
              >
                  <img src="/menu.svg" alt="" className="block h-6 w-6" />
              </button>
          </section>

          {/* MENU */}
          <div className={`fixed inset-0 z-[60] ${open ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!open}>
                <div onClick={() => setOpen(false)} className={`absolute inset-0 bg-black/30 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}/>
                
                <aside className={`absolute right-0 top-0 h-full bg-white shadow-xl transition-transform duration-200 w-full lg:w-86 ${open ? "translate-x-0" : "translate-x-full"}`}>
                    <div className="flex items-center justify-between p-3 pl-6 pr-3 border-b border-gray-200">
                        <p className="font-bold text-[#f05776] momo text-lg">Menu</p>
                        <button type="button" aria-label="Close menu" onClick={() => setOpen(false)} className="rounded-xl p-2 hover:bg-gray-100">
                          <img src="/close.svg" alt="" className="h-5 w-5" />
                        </button>
                    </div>

                    <nav className="p-3">
                        <div className="flex flex-col gap-1">
                          {data.navLinks.map((l) => (
                              <a
                                key={l.href}
                                href={l.href}
                                onClick={() => {
                                  setOpen(false)
                                  setActiveHref(l.href)
                                }}
                                className={`cursor-pointer transition-colors hover:text-[#f05776] hover:underline hover:underline-offset-6 hover:bg-gray-100 rounded-lg py-2 px-4 ${
                                  activeHref === l.href ? "text-[#f05776] underline underline-offset-6 bg-gray-100" : ""
                                }`}
                              >
                                {l.label}
                              </a>
                          ))}
                        </div>
                    </nav>
                </aside>
            </div>
        </>
    )
}