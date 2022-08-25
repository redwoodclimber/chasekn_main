import { Outlet, Link } from 'react-router-dom';

const NavbarLayout = () => {
    return (
        <>
            <nav className="flex sm:justify-center space-x-4 bg-zinc-800 mb-4 border-b border-zinc-700/50">
                {[
                    ["Home", "/"],
                    ["About", "/about"],
                    ["Blogs", "/blogs"],
                    ["Contact", "/contact"],
                ].map(([title, url]) => (
                    <div className="rounded-lg px-3 py-2 text-slate-100 transition ease-in-out delay-50 bg-transparent hover:bg-zinc-700/50 hover:scale-105 duration-300">
                        <a href={url} className="font-medium">{title}</a>
                    </div>
                ))}
            </nav>

            <Outlet /> 
        </>
    )

}

export default NavbarLayout;