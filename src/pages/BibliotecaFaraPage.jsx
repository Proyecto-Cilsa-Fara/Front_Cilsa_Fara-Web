import { GaleriaImagenes, GaleriaVideos, Layout } from "../components/index"
import { SectionDropdown } from "../components/sectionsFaraBiblioteca/index"
import { generalPhotos, mujeresPhotos } from "../utils/getImages.js"

export function BibliotecaFaraPage() {
    return (
        <Layout>
            <section id="biblioteca-fara" className="mb-20 flex scroll-mt-28 flex-col items-center justify-center gap-5">
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
                className="mb-20 flex scroll-mt-28 flex-col items-center justify-center gap-5"
            >
                <div className="relative w-full md:w-auto">
                    <h2 className="skew-custom bg-fara-gold relative w-full px-6 py-3 text-xl font-bold md:text-2xl lg:pr-12 lg:text-5xl">
                        Nuestro trabajo con mujeres
                    </h2>
                </div>
                <SectionDropdown currentId="trabajo-mujeres-fara" />
                <GaleriaImagenes photosGallery={mujeresPhotos} />
            </section>
            <section id="fara-videos" className="mb-7 flex scroll-mt-28 flex-col items-center justify-center gap-5">
                <div className="relative w-full md:w-auto">
                    <h2 className="skew-custom bg-fara-blue text-white relative w-full px-6 py-3 text-xl font-bold md:text-2xl lg:pr-12 lg:text-5xl">
                        FARA Videos
                    </h2>
                </div>
                <SectionDropdown currentId="fara-videos" />
                <GaleriaVideos />
            </section>
        </Layout>
    )
}
