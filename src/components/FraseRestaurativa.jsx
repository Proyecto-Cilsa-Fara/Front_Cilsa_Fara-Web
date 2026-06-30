import React from 'react'

export function FraseRestaurativa({ colorText = "text-fara-red", bg = "bg-fara-strong-red/10", frase = "" }) {

  return (
    <section className={`flex flex-col justify-center items-center gap-4 ${colorText} ${bg} w-full py-12 px-10 md:py-20 md:px-32`}>
      <span className="text-center font-bold text-5xl">
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="24" viewBox="0 0 34 24" fill="none" aria-hidden="true" focusable="false">
          <path d="M3.4 24L8 16C5.8 16 3.91667 15.2167 2.35 13.65C0.783333 12.0833 0 10.2 0 8C0 5.8 0.783333 3.91667 2.35 2.35C3.91667 0.783333 5.8 0 8 0C10.2 0 12.0833 0.783333 13.65 2.35C15.2167 3.91667 16 5.8 16 8C16 8.76667 15.9083 9.475 15.725 10.125C15.5417 10.775 15.2667 11.4 14.9 12L8 24H3.4ZM21.4 24L26 16C23.8 16 21.9167 15.2167 20.35 13.65C18.7833 12.0833 18 10.2 18 8C18 5.8 18.7833 3.91667 20.35 2.35C21.9167 0.783333 23.8 0 26 0C28.2 0 30.0833 0.783333 31.65 2.35C33.2167 3.91667 34 5.8 34 8C34 8.76667 33.9083 9.475 33.725 10.125C33.5417 10.775 33.2667 11.4 32.9 12L26 24H21.4Z" fill="currentColor" />
        </svg>
      </span>
      <p className="font-semibold italic text-center text-xl md:text-2xl lg:text-4xl max-w-5xl">
        {frase}
      </p>
    </section>
  )
}
