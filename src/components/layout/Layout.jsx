import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ScrollRestoration } from "react-router-dom";

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            {/* Background Ambience e.g. subtle glows */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-vantra/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-dark-base/20 rounded-full blur-[100px]" />
            </div>

            <Navbar />

            <main className="flex-grow z-10 pt-32 px-4 md:px-8 max-w-7xl mx-auto w-full">
                <Outlet />
            </main>

            <Footer />
            <ScrollRestoration />
        </div>
    );
}
