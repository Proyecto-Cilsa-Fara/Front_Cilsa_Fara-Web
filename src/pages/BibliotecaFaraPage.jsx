import { useState } from "react"
import { GaleriaImagenes, Layout } from "../components/index"
import { generalPhotos, mujeresPhotos } from "../utils/getImages.js"

const sections = [
    { id: "biblioteca-fara", label: "Biblioteca FARA" },
    { id: "trabajo-mujeres-fara", label: "Nuestro trabajo con mujeres" },
    { id: "testimonios", label: "Testimonios" },
]

function SectionDropdown({ currentId }) {
    const [isOpen, setIsOpen] = useState(false)

    const currentLabel = sections.find((s) => s.id === currentId)?.label ?? sections[0].label

    return (
        <div className="sticky top-32 z-30  w-full">
            <div className="mx-auto max-w-md px-4 py-3">
                <a
                    href={`#${currentId}`}
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="border-fara-red text-fara-red hover:bg-fara-red flex w-full items-center justify-between border-2 bg-white px-4 py-2.5 text-sm font-semibold transition-colors hover:text-white md:text-base"
                >
                    <span className="truncate">{currentLabel}</span>
                    <svg
                        className={`ml-2 h-4 w-4 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </a>

                {isOpen && (
                    <ul className="absolute top-full right-0 left-0 z-50 mt-1 overflow-hidden border border-gray-200 bg-white shadow-lg">
                        {sections.map(({ id, label }) => (
                            <li key={id}>
                                <a
                                    href={`#${id}`}
                                    onClick={() => setIsOpen(false)}
                                    className={`hover:bg-fara-red/10 block w-full px-4 py-2.5 text-left text-sm transition-colors md:text-base ${
                                        id === currentId
                                            ? "bg-fara-red/10 text-fara-red font-semibold"
                                            : "text-gray-700"
                                    }`}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export function BibliotecaFaraPage() {
    return (
        <Layout>
            <section id="biblioteca-fara" className="mb-7 flex scroll-mt-28 flex-col items-center justify-center gap-5">
                <div className="w-full md:w-auto">
                    <h2 className="skew-custom bg-fara-red w-full px-6 py-3 text-xl font-bold text-white md:text-2xl lg:pr-12 lg:text-5xl">
                        Biblioteca FARA
                    </h2>
                </div>
                <SectionDropdown currentId="biblioteca-fara" />

                <GaleriaImagenes photosGallery={generalPhotos} />
            </section>
            <section
                id="trabajo-mujeres-fara"
                className="mb-7 flex scroll-mt-28 flex-col items-center justify-center gap-5"
            >
                <div className="relative w-full md:w-auto">
                    <h2 className="skew-custom bg-fara-gold relative w-full px-6 py-3 text-xl font-bold md:text-2xl lg:pr-12 lg:text-5xl">
                        Nuestro trabajo con mujeres
                    </h2>
                </div>
                <SectionDropdown currentId="trabajo-mujeres-fara" />
                <GaleriaImagenes photosGallery={mujeresPhotos} />
            </section>
            <section id="testimonios" className="mb-7 flex scroll-mt-28 flex-col items-center justify-center gap-5">
                <div className="relative w-full md:w-auto">
                    <h2 className="skew-custom bg-fara-gold relative w-full px-6 py-3 text-xl font-bold md:text-2xl lg:pr-12 lg:text-5xl">
                        Testimonios
                    </h2>
                </div>
                <SectionDropdown currentId="testimonios" />
            </section>
        </Layout>
    )
}
