import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarLayout from "./NavbarLayout";
import Home from "./Home";
import About from "./About";
import Blogs from "./Blogs";
import Contact from "./Contact";
import NoPage from "./NoPage";

function Content() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<NavbarLayout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="blogs" element={<Blogs />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Content;