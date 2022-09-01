const About = () => {
    return (
        <div className="flex flex-col items-center min-h-screen">
            <h1 className="text-3xl text-center font-semibold">About</h1>
            <ul className="py-3">
                <li>
                    <a className="hover:underline" href="https://github.com/redwoodclimber">Github</a> 
                </li>
                <li>
                    <a className="hover:underline" href="https://www.linkedin.com/in/chase-knowland-76795418a/">Linkedin</a> 
                </li>
                <li>
                    <a className="hover:underline" href="https://open.spotify.com/user/redwoodclimber?si=7682e0c3b5194695">Spotify</a>
                </li>
            </ul>
        </div>
    )
}

export default About;