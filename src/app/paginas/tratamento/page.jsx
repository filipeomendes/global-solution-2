import Image from "next/image"

export const metadata = {
    title: 'Tratamento e Prevenção'
}

export default function Tratamento() {
    return (
        <main>
            <section className="tratamento">
                <div className="texto">
                    <h1>Tratamento</h1>
                    <p>O tratamento da meningite é uma abordagem multifacetada que depende do agente causador subjacente, seja ele viral, bacteriano, fúngico ou protozoário. A rapidez no início do tratamento é crucial para melhorar o prognóstico e reduzir o risco de complicações. Aqui estão algumas considerações gerais sobre o tratamento da meningite:</p>
                    <div className="div-texto">
                        <p>O diagnóstico Preciso da causa específica da meningite é fundamental para orientar o tratamento adequado. Isso muitas vezes envolve exames clínicos, análises de sangue e, em casos suspeitos, a punção lombar para coleta de líquido cerebroespinhal.</p>
                        <p>No caso de meningite bacteriana, o tratamento primário geralmente envolve a administração de antibióticos específicos, escolhidos com base na bactéria identificada. Em casos de meningite viral, antivirais podem ser prescritos. A escolha do medicamento e a duração do tratamento são determinadas pelo médico.</p>
                        <p>Além da terapia específica para combater a infecção, o tratamento de suporte desempenha um papel crucial. Isso pode incluir medicações para aliviar a febre e a dor, fluidos intravenosos para prevenir a desidratação e, em casos graves, suporte respiratório.</p>
                        <p>A gravidade da meningite, especialmente a bacteriana, muitas vezes requer hospitalização para monitoramento intensivo. Em alguns casos, a internação é essencial para garantir o tratamento adequado e evitar complicações.</p>
                    </div>
                    <p>O tratamento da meningite também abrange o controle de complicações potenciais, como convulsões, danos cerebrais, edema cerebral e choque. A detecção precoce e o gerenciamento ativo dessas complicações são fundamentais para otimizar os resultados.</p>
                </div>
            </section>
            <section className="prevencao">
                <div className="texto">
                    <h1>Prevenção da Meningite:</h1>
                    <div className="conteiner">
                        <div className="vaccine-img">
                            <Image src="/vaccine.jpg" alt="Mulher recebendo vacina" width={1049} height={660}/>
                        </div>
                        <p>A prevenção da meningite é uma estratégia essencial, especialmente considerando a seriedade da doença e suas potenciais complicações. Aqui estão algumas medidas importantes para prevenir a meningite:</p>
                        <section className="prevencao-lista">
                            <div className="texto-secundario">
                                <h3>Vacinação:</h3>
                                <p>A vacinação é uma ferramenta fundamental na prevenção da meningite. Vacinas específicas contra cepas comuns de bactérias causadoras, como o Hib e o meningococo, estão disponíveis e são administradas conforme o calendário de imunização recomendado.</p>
                                <h3>Higiene Pessoal:</h3>
                                <p>A prática de uma boa higiene pessoal, incluindo lavagem regular das mãos, pode ajudar a reduzir a propagação de agentes infecciosos que podem levar à meningite.</p>
                            </div>
                            <div className="texto-secundario-2">
                                <h3>Evitar Contato Próximo em Casos Confirmados:</h3>
                                <p>Em casos de meningite viral ou bacteriana, evitar o contato próximo com indivíduos infectados pode reduzir o risco de transmissão.</p>
                                <h3>Conscientização e Educação:</h3>
                                <p>A conscientização sobre os sintomas da meningite e a educação sobre práticas preventivas são essenciais para promover uma resposta rápida e eficaz em casos suspeitos.</p>
                            </div>
                        </section>
                        <p>A conscientização sobre os sintomas da meningite e a educação sobre práticas preventivas são fundamentais. Esse conhecimento não apenas capacita indivíduos a reconhecerem sinais precoces da doença, mas também contribui para uma resposta rápida e eficaz em casos suspeitos. Em resumo, a combinação dessas estratégias é essencial para reduzir o risco de contrair meningite, sublinhando a importância da prevenção como um componente fundamental no enfrentamento dessa condição complexa.</p>
                        <p>Em resumo, o tratamento da meningite envolve a abordagem direcionada à causa específica, enquanto a prevenção se concentra na vacinação, higiene pessoal e medidas específicas em situações de risco. A combinação dessas estratégias é fundamental para reduzir a incidência e minimizar os impactos dessa condição grave.</p>
                    </div>
                </div>
            </section>
        </main>
    )
}