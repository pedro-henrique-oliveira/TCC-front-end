"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Planos", href: "#planos" },
  { label: "Contato", href: "#contato" },
];

export default function Navibar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-zinc-800/70 bg-black/80 shadow-2xl shadow-black/80 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/icon.png"
              alt="GymFlow"
              width={42}
              height={42}
              priority
            />

            <span className="text-xl font-bold tracking-wide text-white">
              Gym<span className="text-yellow-400">Flow</span>
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveSection(id)}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    activeSection === id
                      ? "text-yellow-400"
                      : "text-zinc-400 hover:text-yellow-400"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Botão Desktop */}
          <div className="hidden md:block">
            <Link href="/login">
              <Button>Começar Agora</Button>
            </Link>
          </div>

          {/* Botão Mobile */}
          <button
            className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-white md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {/* Menu Mobile */}
      <div
        className={`overflow-hidden bg-zinc-950 transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-96 border-t border-zinc-800" : "max-h-0"
        }`}
      >
        <Container>
          <div className="flex flex-col gap-5 py-6">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setActiveSection(id);
                    setMenuOpen(false);
                  }}
                  className={`transition-colors ${
                    activeSection === id
                      ? "text-yellow-400"
                      : "text-zinc-300 hover:text-yellow-400"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Button className="mt-2 w-full" onClick={() => setMenuOpen(false)}>
              Começar Agora
            </Button>
          </div>
        </Container>
      </div>
    </nav>
  );
}
