import React from "react";
import './css/footer.css';
import gisp_logo from './img/GispLogo.png';
import interfax_logo from './img/InterfaxLogo.png';

export function Footer() {
    return (

        <footer>
            <div className="footer-own-logo-box">
                <p className="footer-logo">Copyright &copy; {new Date().getFullYear()} asperanto</p>
            </div>
            <div className="footer-partners-box">
                <div className="footer-partners-heading-box">
                    <p className="footer-partners-heading">В партнерстве с</p>
                </div>
                <div className="footer-partners-logos-box">
                    <div className="footer-partners-logos">
                        <a href="https://gisp.gov.ru/">
                            <img src={gisp_logo} />
                        </a>
                        <a href="https://www.interfax.ru/">
                            <img src={interfax_logo} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}