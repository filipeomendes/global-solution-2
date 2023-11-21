"use client";
import Link from "next/link"
import Image from "next/image"

export default function Cabecalho() {
    return(
        <header>
            <div className="texto-meningite">
                <Link href="/"><Image src="/logo" alt="Texto escrito Meningite com link para a home" width={100} height={100}/></Link>
            </div>
            <div className="menu">
                <nav className="menu-nav">
                    <Link href="/paginas/meningite">O que é Meningite?</Link>
                    <Link href="/paginas/identificar">Como identificar</Link>
                    <Link href="/paginas/quemsomos">Quem somos</Link>
                    <Link href="/paginas/tratamento">Tratamento e Prevenção</Link>
                    <Link href="/paginas/ajuda">Ajuda</Link>
                </nav>
            </div>
        </header>
    )
}