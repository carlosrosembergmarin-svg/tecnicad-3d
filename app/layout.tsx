import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "TecniCAD 3D", description: "CAD técnico paramétrico 2D/3D para planos y piezas." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="es"><body>{children}</body></html>; }