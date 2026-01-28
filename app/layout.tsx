import Navbar from "../componets/Navbar";
import Footer from "../componets/Footer";
import { ChatProvider } from "../componets/ChatContext";
import ChatBot from "../componets/ChatBot";
import ChatBubble from "../componets/ChatBubble";
import "./globals.css";

/* ========================
   Metadata + SEO + Schema
======================== */
export const metadata = {
  title: "Iskra - Agencia de Publicidad y Marketing de Influencia",
  description:
    "Iskra es una agencia de publicidad especializada en marketing de influencia, posicionamiento de marca y estrategias digitales creativas.",
  alternates: {
    canonical: "https://iskra.com.co/",
  },
  openGraph: {
    title: "Iskra - Agencia de Publicidad y Marketing de Influencia",
    description:
      "Iskra es una agencia de publicidad especializada en marketing de influencia, posicionamiento de marca y estrategias digitales creativas.",
    url: "https://iskra.com.co/",
    siteName: "Iskra",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Iskra - Agencia de Publicidad y Marketing de Influencia",
    description:
      "Iskra es una agencia de publicidad especializada en marketing de influencia, posicionamiento de marca y estrategias digitales creativas.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* =========================
           JSON-LD Schema: Agencia de Publicidad
        ======================== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Iskra",
              url: "https://iskra.com.co",
              logo: "https://iskra.com.co/logo.png",
              sameAs: [
                "https://www.instagram.com/tuInstagram",
                "https://www.facebook.com/tuFacebook",
                "https://www.linkedin.com/company/tuLinkedin",
              ],
              description:
                "Iskra es una agencia de publicidad especializada en marketing de influencia, posicionamiento de marca y estrategias digitales creativas.",
            }),
          }}
        />
      </head>
      <body className="bg-black text-white">
        <ChatProvider>
          <Navbar />
          {children}
          <Footer />
          {/* Chat global */}
          <ChatBubble />
          <ChatBot />
        </ChatProvider>
      </body>
    </html>
  );
}
