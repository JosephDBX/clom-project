import React from "react";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Sidenav from "../components/layout/Sidenav";

const AppLayout: React.FunctionComponent = ({ children }) => {
    return <div className="flex flex-col min-h-screen">
        <Navbar />

        <Sidenav />

        <main className="flex-grow my-4 sm:my-8 md:my-16 mx-4">
            {children}
        </main>

        <Footer />
    </div>
}

export default AppLayout;