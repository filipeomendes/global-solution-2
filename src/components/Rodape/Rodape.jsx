import Image from "next/image"

export default function Rodape() {
    return (
        <footer>
            <section className="conteudo-rodape">
                <div className="redes-sociais-logos">
                    <nav className="redes-sociais-nav">
                        <a href="https://github.com/filipeomendes/global-solution-2.git"><Image src="/github.png" alt="Logo preto do Github" width={40} height={40}/></a>
                        <a href="https://www.instagram.com/complex.wrld/"><Image src="/instagram.png" alt="Logo preto do Instagram" width={40} height={40}/></a>
                        <a href="https://www.facebook.com"><Image src="/facebook.png" alt="Logo preto do Facebook" width={40} height={40} /></a>
                    </nav>
                </div>
                <div className="copyright">
                    <p className="texto-footer">Todos os direitos reservados ©2023 - Complex</p>
                </div>
            </section>
            <section className="integrantes">
                <div className="membros">
                    <h2>Integrantes:</h2>
                    <p>Fernando Paparelli Aracena - rm551022 </p>
                    <p>Filipe de Oliveira Mendes - rm98959 </p>
                    <p>Miron Gonçalves Martins - rm551801 </p>
                    <p>Paulo Henrique de Andrade Junior - rm99714</p>
                    <p>Vinicius Pedro de Souza - rm550907</p>
                </div>
                <div className="turma">
                    <h2>Turma:</h2>
                    <p>1TDSPV</p>
                </div>
            </section>
        </footer>
    )
}