import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TickerBanner from "@/components/TickerBanner";

export const metadata = {
  title: "Rimsha Lab | Diagnostic Excellence",
  description: "Modern medical lab website for Rimsha Lab.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Favicon */}
        <link rel="icon" type="image/png" href="/logo.svg" />
      </head>
      <body className="bg-gray-50 text-gray-900">
        {/* ✅ Fixed Navbar */}
        <div className="fixed top-0 left-0 w-full z-50">
          <TickerBanner />
          <Navbar />
          
        </div>

        {/* ✅ Main content (adjust padding to push content below navbar + ticker) */}
        <main className="pt-[120px]">{children}</main>

        {/* ✅ Footer */}
        <Footer />
      </body>
    </html>
  );
}
