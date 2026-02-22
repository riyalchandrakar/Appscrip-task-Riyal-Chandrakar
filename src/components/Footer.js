import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        {/* Left */}
        <div className="newsletter">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettā muse.</p>

          <div className="newsletter-form">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        {/* Right */}
        <div className="contact">
          <h3>CONTACT US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>

          <h3 className="currency-title">CURRENCY</h3>
          <p>🇺🇸 USD</p>
        </div>
      </div>

      <hr />

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-col">
          <h4>mettā muse</h4>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>FOLLOW US</h4>
          <div className="socials">
            <span>Instagram</span>
            <span>LinkedIn</span>
          </div>

          <h4 className="accept-title">mettā muse ACCEPTS</h4>
          <div className="payments">
            <span>GPay</span>
            <span>Mastercard</span>
            <span>Visa</span>
            <span>Amex</span>
            <span>ApplePay</span>
          </div>
        </div>
      </div>

      <div className="copyright">
        Copyright © 2026 mettamuse. All rights reserved.
      </div>
    </footer>
  );
}
