import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/config/site";

const businessName =
  site.business.name || "Truck Dispatch";

export const metadata = {
  title: {
    default: `${businessName} | Truck Dispatch Services`,
    template: `%s | ${businessName}`,
  },

  description: site.business.description,

  applicationName: businessName,

  // Keep the unfinished demo out of search results.
  robots: site.demoMode
    ? {
        index: false,
        follow: false,
      }
    : {
        index: true,
        follow: true,
      },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          "--primary": site.branding.primaryColor,
          "--accent": site.branding.accentColor,
          "--background": site.branding.backgroundColor,
        }}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>


        <Navbar />

        <main id="main-content" tabIndex={-1}>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}