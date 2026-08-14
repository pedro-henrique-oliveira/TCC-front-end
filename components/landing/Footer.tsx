import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

import Container from "@/components/ui/Container";

const footerLinks = {
  Empresa: [
    { label: "Sobre nós", href: "/sobre" },
    { label: "Política de Privacidade", href: "/privacidade" },
    { label: "Termos de Uso", href: "/termos" },
  ],

  Recursos: [
    { label: "Demonstração", href: "/demonstracao" },
    { label: "Suporte", href: "/suporte" },
  ],
};

const socials = [
  {
    icon: FaInstagram,
    href: "https://instagram.com",
    label: "Instagram",
  },
  {
    icon: FaFacebook,
    href: "https://facebook.com",
    label: "Facebook",
  },
  {
    icon: FaYoutube,
    href: "https://youtube.com",
    label: "YouTube",
  },
];

export default function Footer() {
  return (
    <footer id="contato" className="border-t border-zinc-800 bg-black">
      <Container>
        <div className="grid gap-12 py-20 lg:grid-cols-5">
          {/* Logo e informações */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <h2 className="text-3xl font-bold text-white transition-colors hover:text-yellow-400">
                Gym<span className="text-yellow-400">Flow</span>
              </h2>
            </Link>

            <p className="mt-6 max-w-md leading-7 text-zinc-400">
              Plataforma completa para academias. Gerencie alunos, treinos,
              pagamentos e acompanhe toda a evolução da sua academia em um
              único lugar.
            </p>

            {/* Informações de contato */}
            <div className="mt-8 space-y-4 text-sm text-zinc-400">
              <a
                href="https://gmail.com"
                className="flex items-center gap-3 transition-colors hover:text-yellow-400"
              >
                <Mail size={18} className="text-yellow-400" />
                <span>gymflow@email.com</span>
              </a>

              <a
                href="https://whatsapp.com"
                className="flex items-center gap-3 transition-colors hover:text-yellow-400"
              >
                <Phone size={18} className="text-yellow-400" />
              <p className="">
              <span className="">+55 (41) 999999-9999</span>
                </p>  
              </a>
              <a
                href="https://whatsapp.com"
                className="flex items-center gap-3 transition-colors hover:text-yellow-400"
              >
                <Phone size={18} className="text-yellow-400" />
              <p className="">
              <span className="">+55 (41) 99999-9999</span>
                </p>  
              </a>

              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-yellow-400" />
                <span>Curitiba - PR - Brasil</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-5 text-lg font-semibold text-white">
                {title}
              </h3>

              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-zinc-400 transition-colors hover:text-yellow-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Rodapé inferior */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-zinc-800 py-8 md:flex-row">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} GymFlow. Todos os direitos reservados.
          </p>

          {/* Redes sociais */}
          <div className="flex items-center gap-4">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="rounded-lg border border-zinc-800 p-2 text-zinc-400 transition-all duration-300 hover:border-yellow-400 hover:text-yellow-400"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
}