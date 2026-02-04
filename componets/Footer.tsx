"use client";

import Image from "next/image";
import { Instagram } from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";


export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavClick = (id: string) => {
    if (pathname !== "/") {
      router.push(`/#${id}`);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contacto" className="bg-neutral-950 text-neutral-300">
      <div className="mx-auto max-w-7xl px-6 py-14">
        {/* Contenido */}
        <div className="grid gap-10 md:grid-cols-3 items-center">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <Link href="/">
              <Image
                src="/images/iskra-logo.png"
                alt="Iskra"
                width={150}
                height={45}
                className="cursor-pointer"
              />
            </Link>
          </div>

          {/* Navegación */}
          <nav className="flex justify-center">
            <ul className="flex gap-6 text-sm">
              {[
                { label: "Inicio", target: "inicio", isLink: false },
                {
                  label: "¿Por qué elegirnos?",
                  target: "por-que-elegirnos",
                  isLink: false,
                },
                { label: "Equipo", target: "nuestro-equipo", isLink: false },
                {
                  label: "Nuestro método",
                  target: "nuestro-metodo",
                  isLink: false,
                },
                { label: "Servicios", href: "/servicios", isLink: true },
                {
                  label: "Casos reales",
                  href: "/colaboraciones",
                  isLink: true,
                },
              ].map((item, index) => (
                <li key={index}>
                  {item.isLink ? (
                    <Link
                      href={item.href!}
                      className="cursor-pointer hover:opacity-80 transition-opacity"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item.target!)}
                      className="cursor-pointer hover:opacity-80 transition-opacity"
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Redes */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <span className="text-sm text-neutral-400">Síguenos</span>
            <div className="flex gap-4">
              <a
                className="footer-icon"
                href="https://www.instagram.com/lorena15_7c?igsh=dzN1b2Q1Nm5pZjEx"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Línea */}
        <div className="my-8 h-px bg-neutral-800" />

        {/* Copyright */}
        <p className="text-center text-xs text-neutral-500">
          © 2026 Iskra. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
