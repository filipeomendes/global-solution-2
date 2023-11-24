import Image from "next/image"

export const metadata = {
    title: 'Quem Somos'
}

export default function Sobre() {
    return (
        <main>
            <section className="quem-somos">
                <h1>Quem somos</h1>
                <p>Olá, somos Fernando, Filipe, Miron, Paulo e Vinicius!</p>
                <p>Somos alunos da Faculdade Paulista de Administração e Informática - FIAP no curso de Análise e Desenvolvimento de Sistemas e fomos desafiados a ajudar de alguma forma problemas de saúde, com base nas metas da ODS 3.</p>
                <p>Com base nisso, nosso grupo criou o sistema Vital Support, com foco em ajudar a combater a meningite, visto que a doença aprensentou um crescimento de 123% entre 2021 e 2022, e 2023 também continua em tendência de alta.</p>
                <p>Nós criamos um sistema informativo onde pessoas podem se informar sobre a doença e nós indicamos clínicas e médicos próximos. Além disso, possuímos um sistema de cadastro onde as clínicas podem se cadastrar e serem indicadas, e também parceiros podem fazer doações para que esse dinheiro seja convertido em ajuda do tratamento de vítimas da meningite.</p>
            </section>
            <section className="doacao">
                <div className="conteiner">
                    <div className="doacao-img">
                        <Image src="/doacao.jpg" alt="caixa de doação" width={600} height={380}/>
                    </div>
                    <div className="doador">
                        <h1>Quer ser um doador?</h1>
                        <p>Entre em contato através do email:</p>
                        <p>complex.vital.gs@gmail.com</p>
                        <div className="doacao-div">
                            <p>Todo dinheiro recebido é convertido para ajudar as pessoas a cobrir os custos no tratamento da meningite.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}