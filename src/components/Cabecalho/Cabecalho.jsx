"use client";
import Link from "next/link"
import Image from "next/image"

export default function Cabecalho() {
    return(
        <header>
            <div className="texto-meningite">
                <Link href="/"><Image src="/logo.png" alt="Texto escrito Meningite com link para a home" width={120} height={40}/></Link>
            </div>
            <div className="menu">
                <nav className="menu-nav">
                    <Link href="/paginas/meningite-infantil">Meningite infantil</Link>
                    <Link href="/paginas/como-identificar">Como identificar</Link>
                    <Link href="/paginas/tratamento">Tratamento e Prevenção</Link>
                    <Link href="/paginas/ajuda">Ajuda</Link>
                    <Link href="/paginas/quem-somos">Quem somos</Link>
                </nav>
            </div>
        </header>
    )
}