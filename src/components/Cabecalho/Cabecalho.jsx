export default function Cabecalho() {
    return(
        <header>
            <div>
                <Link href=""><Image src="/logo" alt="Logo tipo" width={100} height={100}></Image></Link>
            </div>
            <div>
                <nav>
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