import { useState } from "react"

const sections = [
    { id: "biblioteca-fara", label: "Biblioteca FARA" },
    { id: "trabajo-mujeres-fara", label: "Nuestro trabajo con mujeres" },
    { id: "fara-videos", label: "FARA Videos" },
]

export function SectionDropdown({ currentId }) {
    const [isOpen, setIsOpen] = useState(false)

    const currentLabel = sections.find((s) => s.id === currentId)?.label ?? sections[0].label

    return (
        <div className="sticky top-32 z-30 w-full">
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
