export default function Cabecalho() {
    return(
        <header>
            <div className="texto-meningite">
                <Link href="/"><Image src="/logo" alt="Texto escrito Meningite com link para a home" width={100} height={100}></Image></Link>
            </div>
            <div className="menu">
                <nav className="menu-nav">
                    <Link>O que é Meningite?</Link>
                    <Link>Como identificar</Link>
                    <Link>Quem somos</Link>
                    <Link>Tratamento e Prevenção</Link>
                    <Link>Ajuda</Link>
                </nav>
            </div>
        </header>
    )
}