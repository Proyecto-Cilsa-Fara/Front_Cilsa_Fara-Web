import { Header, Footer, DonarFAB } from "./index"
import { PropTypes } from "prop-types"

export function Layout({ children }) {
    return (
        <div className="flex min-h-screen grow flex-col">
            <Header />

            <main className="mt-30 grid grow-[1] place-items-center">
                {children}

                <DonarFAB />
            </main>

            <Footer />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}
