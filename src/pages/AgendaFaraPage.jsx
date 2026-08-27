import { useEffect } from "react"
import { useLocation } from "react-router"
import { Layout, GaleriaImagenes } from "../components/index"
import { agendaPhotos, agendaPdf } from "../utils/getImages.js"

export function AgendaFaraPage() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <Layout>
            <section className="mb-7 flex scroll-mt-28 flex-col items-center justify-center gap-5">
                <div className="w-full md:w-auto">
                    <h2 className="skew-custom bg-fara-red w-full px-6 py-3 text-xl font-bold text-white md:text-2xl lg:pr-12 lg:text-5xl">
                        Agenda FARA
                    </h2>
                </div>

                <p className="mx-auto max-w-3xl px-8 text-center text-lg lg:text-xl">
                    Conocé las actividades, eventos y encuentros de FARA.
                </p>

                <GaleriaImagenes photosGallery={agendaPhotos} />

                {agendaPdf && (
                    <div className="flex justify-center px-10 py-4">
                        <a
                            href={agendaPdf.src}
                            download
                            className="skew-custom bg-fara-blue hover:bg-fara-gold inline-flex items-center gap-2 px-8 py-4 font-bold text-white uppercase shadow-2xl transition-colors duration-300 ease-in-out"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" x2="12" y1="15" y2="3" />
                            </svg>
                            Descargar agenda (PDF)
                        </a>
                    </div>
                )}
            </section>
        </Layout>
    )
}
