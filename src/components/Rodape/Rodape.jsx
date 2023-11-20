import Image from "next/image"

export default function Rodape() {
    return (
        <footer>
            <section className="conteudo-rodape">
                <div className="redes-sociais-logos">
                    <nav className="redes-sociais-nav">
                        <a href="https://github.com/filipeomendes/global-solution-2.git"><Image src="/github.png" alt="Logo preto do Github" width={30} height={30}/></a>
                        <a href="https://www.instagram.com/complex.wrld/"><Image src="/instagram.png" alt="Logo preto do Instagram" width={30} height={30}/></a>
                        <a href="https://www.facebook.com"><Image src="/facebook.png" alt="Logo preto do Facebook" width={30} height={30} /></a>
                    </nav>
                </div>
                <div className="copyright">
                    <p className="texto-footer">Todos os direitos reservados ©2023 - Complex</p>
                </div>
            </section>
        </footer>
    )
}