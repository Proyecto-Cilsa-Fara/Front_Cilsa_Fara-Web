export function ColorBar() {
    /* Color Bar with Diagonal Segments */

    return (
        <div className="bg-fara-red flex h-4 w-full overflow-hidden shadow-md">
            <div className="bg-fara-red w-1/4"></div>
            <div className="bg-fara-teal w-1/4 skew-x-[-45deg]"></div>
            <div className="bg-fara-lime w-1/4 skew-x-[-45deg]"></div>
            <div className="bg-fara-gold w-1/4 skew-x-[-45deg]"></div>
        </div>
    )
}
