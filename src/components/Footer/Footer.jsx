
import './footer.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section brand">
                    <h2>Beauty Box 🛒 </h2>
                    <p>Shop the best deals and enjoy fast, reliable delivery—your ultimate shopping destination.</p>

                </div>

                <div className="footer-section links">
                    <h4>Shop</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        <li><Link to="/#">Products</Link></li>
                    </ul>
                </div>

   <div className="footer-section social">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                     
                        <a href="https://github.com/seemashettar13/Shoppy-Globe-E-Commerce-Website" aria-label="Github"><FaGithub /></a>
                       <a href="/#" aria-label="Facebook"><FaFacebookF /></a>
                        <a href="/#" aria-label="Twitter"><FaTwitter /></a>
                        <a href="/#" aria-label="LinkedIn"><FaLinkedinIn /></a>
                        <a href="/#" aria-label='Instagram'><FaInstagram/></a>
                    </div>
                </div>

                <div className="footer-section support">
                    <h4>Support</h4>
                    <ul>
                        <li><a href="/#">Contact Us</a></li>
                        <li><a href="/#">FAQs</a></li>
                        <li><a href="/#">Shipping & Returns</a></li>
                    </ul>
                </div>

             
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Shoppy Globe. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
