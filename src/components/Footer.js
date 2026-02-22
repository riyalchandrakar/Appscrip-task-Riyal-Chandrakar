import "../styles/footer.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      {/* ================= TOP SECTION ================= */}
      <div className="footer-top">
        {/* Newsletter */}
        <div className="newsletter">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettā muse.</p>

          <div className="newsletter-form">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        {/* Contact */}
        <div className="contact">
          <h3>CONTACT US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h3 className="currency-title">CURRENCY</h3>
          <div className="currency">
            <Image
              src="/images/usa.svg"
              alt="USA Flag"
              width={20}
              height={20}
            />
            <span>USD</span>
          </div>
          <p>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>

      <hr />

      {/* ================= BOTTOM SECTION ================= */}
      <div className="footer-bottom">
        {/* Column 1 */}
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

        {/* Column 2 */}
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

        {/* Column 3 */}
        <div className="footer-col">
          <h4>FOLLOW US</h4>

          <div className="socials">
            <Image
              src="/social-media/insta.svg"
              alt="Instagram"
              width={30}
              height={40}
            />
            <Image
              src="/social-media/linkedin.svg"
              alt="LinkedIn"
              width={30}
              height={40}
            />
          </div>

          <h4 className="accept-title">mettā muse ACCEPTS</h4>

          <div className="payments">
            <Image
              src="/payment-methods/gpay.svg"
              alt="Google Pay"
              width={40}
              height={40}
            />
            <Image
              src="/payment-methods/mastercard.svg"
              alt="Mastercard"
              width={40}
              height={40}
            />
            <Image
              src="/payment-methods/pay.svg"
              alt="Pay"
              width={40}
              height={40}
            />
            <Image
              src="/payment-methods/amex.svg"
              alt="American Express"
              width={40}
              height={40}
            />
            <Image
              src="/payment-methods/applepay.svg"
              alt="Apple Pay"
              width={40}
              height={40}
            />
            <Image
              src="/payment-methods/paypal.svg"
              alt="Paypal"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="copyright">
        Copyright © 2026 mettamuse. All rights reserved.
      </div>
    </footer>
  );
}
