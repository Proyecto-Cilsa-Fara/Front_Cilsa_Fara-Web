import React from 'react'
import FaraNews from '../data/fara-news.json'
import { Link } from 'react-router'

export function Noticias() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-32 lg:py-32">
        <h2 className="mb-3 text-center text-2xl font-extrabold text-balance lg:text-3xl lg:font-bold uppercase">
          Novedades Destacadas
        </h2>
        <p className="mx-auto text-center text-lg lg:text-xl">
          Conocé las novedades de FARA, y mantenete al tanto de nuestros proyectos y actividades.
        </p>

        <div className="grid gap-4 mt-11 md:grid-cols-2 xl:grid-cols-3">
          {FaraNews.map((news, index) => (
            <div className="flex flex-col justify-between items-start gap-4 border-2 border-fara-gray p-6 hover:shadow-lg" key={news.title + index}
            >
              <div className="">
                <h3 className="mb-2 text-xl font-bold">
                  {news.title}
                </h3>
                <p>{news.description}</p>
              </div>

              <Link
                className="group flex justify-center items-center transition-colors hover:text-fara-strong-red underline"
                to={news.url}
                aria-label={news.title}
              >
                Leer más
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right invisible group-hover:visible"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}