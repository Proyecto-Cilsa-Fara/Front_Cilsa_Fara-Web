import FaraVideos from "../data/fara-videos.json"

export function GaleriaVideos() {
    return (
        <section>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {FaraVideos.map((video, index) => (
                    <div key={video.title + index} className="video-item">
                        <iframe
                            width="560"
                            height="315"
                            src={video.url}
                            title={video.title}
                            className="aspect-video w-full"
                            allowFullScreen
                            referrerpolicy="strict-origin-when-cross-origin"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}
