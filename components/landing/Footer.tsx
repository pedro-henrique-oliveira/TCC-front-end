import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

import Container from "@/components/ui/Container";

const footerLinks = {
  Plataforma: ["Dashboard", "Gestão de Alunos", "Treinos", "Mensalidades"],
  Empresa: ["Sobre nós", "Contato", "Política de Privacidade", "Termos de Uso"],
  Recursos: ["Planos", "Demonstração", "Suporte", "Documentação"],
};

const socials = [
  {
    icon: FaInstagram,
    href: "https://instagram.com",
  },
  {
    icon: FaFacebook,
    href: "https://facebook.com",
  },
  {
    icon: FaYoutube,
    href: "https://youtube.com",
  },
];

export default function Footer() {
  return (
    <footer id="contato" className="border-t border-zinc-800 bg-black">
      <Container>
        <div className="grid gap-12 py-20 lg:grid-cols-5">
          {/* Logo */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-white">
              Gym<span className="text-yellow-400">Flow</span>
            </h2>

            <p className="mt-6 max-w-md leading-7 text-zinc-400">
              Plataforma completa para academias. Gerencie alunos, treinos,
              pagamentos e acompanhe toda a evolução da sua academia em um único
              lugar.
            </p>

            <div className="mt-8 space-y-3 text-sm text-zinc-400">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-yellow-400" />
                contato@gymflow.com
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-yellow-400" />
                (11) 99999-9999
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-yellow-400" />
                São Paulo - SP
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-5 text-lg font-semibold text-white">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-zinc-400 transition-colors hover:text-yellow-400"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Linha */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-zinc-800 py-8 md:flex-row">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} GymFlow. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
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
