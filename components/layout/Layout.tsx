import { ReactNode, useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { stickyNav, progressbar } from "@/utilities/helpers/layout";

type propTypes = {
    children: ReactNode
}

const Layout = ({children}: propTypes) => {
    useEffect(() => {
        stickyNav();
        progressbar();
      }, []);
      
    return (
        <>
            <Navbar />
            {children}
            <Footer/>
        </>
    );
}

export default Layout;