export const metadata = {
  title: "Discover Our Products | Meta Muse",
  description:
    "Browse premium accessories and lifestyle products at Meta Muse.",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
