// Importa icono home
import { HomeIcon } from "@primer/octicons-react";
// Navegación SPA
import Link from "next/link";
// maneja el estado activo de los enlaces de navegación
import { ActiveLinks } from "../active-link/ActiveLinks";

const navItems = [
  { path: "/about", text: "About" },
  { path: "/pricing", text: "Pricing" },
  { path: "/contact", text: "Contact" },
];

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href={"/"} className="flex items-center">
        <HomeIcon className="mr-2" />
        <span>Home</span>
      </Link>

      <div className="flex flex-1" />

      {navItems.map((navItems) => (
        <ActiveLinks key={navItems.path} { ...navItems } />
      ))}
    </nav>
  );
};

/*Anotaciones: 
    este componente de vanbar, se importa en un layout
    para que se pueda mostrar en diferentes páginas sin
    la necesidad de repetir el código.
*/