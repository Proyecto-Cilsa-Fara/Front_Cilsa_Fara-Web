import { Header, Footer, DonarFAB } from "./index"
// import { PropTypes } from "prop-types"

export function Layout({ children }) {
    return (
        <div className="flex min-h-screen grow flex-col">
            <a href="#main-content" className="sr-only focus:not-sr-only">Saltar al contenido principal</a>
            <Header />

            <main id="main-content" className="mt-30 grid grow-[1] place-items-center">
                {children}

                <DonarFAB />
            </main>

            <Footer />
        </div>
    )
}

// Layout.propTypes = {
// children: PropTypes.node.isRequired,
// }
