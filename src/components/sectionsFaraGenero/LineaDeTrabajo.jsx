import React from 'react'

export function LineaDeTrabajo() {
  return (
    <section className="flex flex-col justify-center items-center gap-4 py-12 px-10 md:py-20 md:px-32">
      <h2 className="text-xl font-bold md:text-2xl lg:text-5xl mb-5 text-center">
        Nuestras Líneas de Trabajo
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <article className="border-2 border-fara-blue text-fara-blue px-4 py-5 text-base shadow-md transition-colors lg:p-8 md:text-xl">
          <div className="flex flex-col justify-center items-center gap-3 lg:flex-row">
            <svg className="flex-1" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28c-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2h1v-6.1c0-3.87 3.13-7 7-7s7 3.13 7 7V19h-8v2h8c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62" /><circle cx="9" cy="13" r="1" fill="currentColor" /><circle cx="15" cy="13" r="1" fill="currentColor" /><path fill="currentColor" d="M18 11.03A6.04 6.04 0 0 0 12.05 6c-3.03 0-6.29 2.51-6.03 6.45a8.07 8.07 0 0 0 4.86-5.89c1.31 2.63 4 4.44 7.12 4.47" /></svg>

            <div className="flex flex-col justify-center gap-2 lg:flex-2">
              <h3 className="font-bold">A. Acompañamiento</h3>
              <p>Acompañamiento integral a personas en
                situación de violencia y/o vulnerabilidad.</p>
            </div>
          </div>
        </article>
        <article className="border-2 border-fara-blue text-fara-blue px-4 py-5 text-base shadow-md transition-colors lg:p-8 md:text-xl">
          <div className="flex flex-col justify-center items-center gap-3 lg:flex-row">
            <svg className="flex-1" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path fill="currentColor" d="M11.5 6A3.514 3.514 0 0 0 8 9.5c0 1.922 1.578 3.5 3.5 3.5S15 11.422 15 9.5S13.422 6 11.5 6m9 0A3.514 3.514 0 0 0 17 9.5c0 1.922 1.578 3.5 3.5 3.5S24 11.422 24 9.5S22.422 6 20.5 6m-9 2c.84 0 1.5.66 1.5 1.5s-.66 1.5-1.5 1.5s-1.5-.66-1.5-1.5s.66-1.5 1.5-1.5m9 0c.84 0 1.5.66 1.5 1.5s-.66 1.5-1.5 1.5s-1.5-.66-1.5-1.5s.66-1.5 1.5-1.5M7 12c-2.2 0-4 1.8-4 4c0 1.113.477 2.117 1.219 2.844A5.04 5.04 0 0 0 2 23h2c0-1.668 1.332-3 3-3s3 1.332 3 3h2a5.04 5.04 0 0 0-2.219-4.156C10.523 18.117 11 17.114 11 16c0-2.2-1.8-4-4-4m5 11c-.625.836-1 1.887-1 3h2c0-1.668 1.332-3 3-3s3 1.332 3 3h2a5.02 5.02 0 0 0-1-3c-.34-.453-.75-.84-1.219-1.156C19.523 21.117 20 20.114 20 19c0-2.2-1.8-4-4-4s-4 1.8-4 4c0 1.113.477 2.117 1.219 2.844A5 5 0 0 0 12 23m8 0h2c0-1.668 1.332-3 3-3s3 1.332 3 3h2a5.04 5.04 0 0 0-2.219-4.156C28.523 18.117 29 17.114 29 16c0-2.2-1.8-4-4-4s-4 1.8-4 4c0 1.113.477 2.117 1.219 2.844A5.04 5.04 0 0 0 20 23M7 14c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2m18 0c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2m-9 3c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2" /></svg>
            <div className="flex-2 flex flex-col justify-center gap-2">
              <h3 className="font-bold">B. Talleres</h3>
              <p>Espacios grupales de reflexión,
                prevención y abordaje de las violencias.</p>
            </div>
          </div>
        </article>
        <article className="border-2 border-fara-blue text-fara-blue px-4 py-5 text-base shadow-md transition-colors md:p-8 md:text-xl">
          <div className="flex flex-col justify-center items-center gap-3 lg:flex-row">
            <svg className="flex-1 lucide lucide-handshake-icon lucide-handshake" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="m11 17 2 2a1 1 0 1 0 3-3" /><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" /><path d="m21 3 1 11h-2" /><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" /><path d="M3 4h8" /></svg>
            <div className="flex-2 flex flex-col justify-center gap-2">
              <h3 className="font-bold">C. Prácticas restaurativas</h3>
              <p>Procesos restaurativos seguros,
                adaptados y evaluados caso a caso.</p>
            </div>
          </div>
        </article>
        <article className="border-2 border-fara-blue text-fara-blue px-4 py-5 text-base shadow-md transition-colors md:p-8 md:text-xl">
          <div className="flex flex-col justify-center items-center gap-3 lg:flex-row">
            <svg className="flex-1 lucide lucide-graduation-cap-icon lucide-graduation-cap" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" /><path d="M22 10v6" /><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" /></svg>
            <div className="flex-2 flex flex-col justify-center gap-2">
              <h3 className="font-bold">D. Formación</h3>
              <p>Capacitación a profesionales,
                instituciones y organizaciones de la
                sociedad civil.</p>
            </div>
          </div>
        </article>
        <article className="border-2 border-fara-blue text-fara-blue px-4 py-5 text-base shadow-md transition-colors md:p-8 md:text-xl">
          <div className="flex flex-col justify-center items-center gap-3 lg:flex-row">
            <svg className="flex-1 lucide lucide-search-icon lucide-search" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
            <div className="flex-2 flex flex-col justify-center gap-2">
              <h3 className="font-bold">E. Investigación</h3>
              <p>Producción de conocimiento sobre
                justicia restaurativa y género.</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
