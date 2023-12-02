import logo from '../images/logo.svg'
import { pageLinks, icons } from '../data'
const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <img src={logo} className="nav-logo" alt="backroads" />
                        <button type="button" className="nav-toggle" id="nav-toggle">
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    {/* <!-- left this comment on purpose --> */}
                    <ul className="nav-links" id="nav-links">
                        {pageLinks.map((d) => {
                            return (<li key={d.id}>
                                <a href={d.href} className="nav-link"> {d.text} </a>
                            </li>)
                        })}
                    </ul>

                    <ul className="nav-icons">
                        {icons.map((icon) => {
                            return (
                                <li key={icon.id}>
                                    <a href={icon.href} target="_blank" className="nav-icon"
                                    ><i className={icon.className}></i
                                    ></a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;