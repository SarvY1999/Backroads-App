import { footerLinks, icons } from "../data";
const Footer = () => {
    return <>
        <footer className="section footer">
            <ul className="footer-links">
                {footerLinks.map((footerLink) => (
                    <li key={footerLink.id}>
                        <a href={footerLink.href} className="footer-link">{footerLink.text}</a>
                    </li>
                ))}
            </ul>
            <ul className="footer-icons">
                {icons.map((icon) => (
                    <li key={icon.id}>
                        <a href={icon.href} target="_blank" className="footer-icon"
                        ><i className={icon.className}></i
                        ></a>
                    </li>
                ))}
            </ul>
            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date">{new Date().getFullYear()}</span> all rights reserved
            </p>
        </footer>
    </>
}

export default Footer;