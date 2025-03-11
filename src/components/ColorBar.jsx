export function ColorBar() {
    /* Color Bar with Diagonal Segments */

    return (
        <div className="flex h-8 w-full overflow-hidden bg-red-700 shadow-md">
            <div className="w-1/4 bg-red-700"></div>
            <div className="w-1/4 skew-x-[-45deg] bg-teal-500"></div>
            <div className="w-1/4 skew-x-[-45deg] bg-lime-400"></div>
            <div className="w-1/4 skew-x-[-45deg] bg-amber-500"></div>
        </div>
    )
}
