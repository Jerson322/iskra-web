import Navbar from "../componets/Navbar";
import Footer from "../componets/Footer";
import { ChatProvider } from "../componets/ChatContext";
import ChatBot from "../componets/ChatBot";
import ChatBubble from "../componets/ChatBubble";
import "./globals.css";

export const metadata = {
  alternates: {
    canonical: "https://iskra.com.co/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
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
