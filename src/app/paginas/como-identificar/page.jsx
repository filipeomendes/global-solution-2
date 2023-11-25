
import Image from "next/image"

export const metadata = {
    title: 'Como Identificar'
}

export default function Identificar() {
    return (
        <main>
            <section className="identificando">
                <div className="temperature-img">
                    <Image src="/temperature.jpg" alt="Medindo a temperatura da criança" width={600} height={380}/>
                </div>
                <div className="texto">
                    <h1>Identificação Precoce:</h1>
                    <p>Identificar precocemente os sintomas da meningite é crucial para iniciar o tratamento imediatamente. Se houver suspeita de meningite, especialmente ao observar vários dos sintomas mencionados, é essencial procurar atendimento médico de urgência. A meningite bacteriana, em particular, pode progredir rapidamente, tornando a prontidão para a busca de assistência fundamental para um prognóstico positivo.</p>
                    <p>A observação cuidadosa dos sintomas e a resposta rápida diante de qualquer sinal de alerta são a chave para lidar eficazmente com a meningite. O diagnóstico definitivo geralmente requer exames médicos, como análise de líquido cerebroespinhal por meio de uma punção lombar, e o tratamento precoce pode fazer a diferença na recuperação do paciente.</p>
                </div>
            </section>
            <section className="sintomas">
                <div className="sintomas-img">
                    <Image src="/sintomas.png" alt="Ilustração com os sintomas da meningite" width={600} height={380}/>
                </div>
                <div className="texto">
                    <h1>Sintomas e Identificação da Meningite:</h1>
                    <p>A meningite, caracterizada pela inflamação das meninges, apresenta uma variedade de sintomas que podem se manifestar rapidamente. O reconhecimento precoce desses sinais é crucial para buscar assistência médica imediata. Aqui estão os principais sintomas e indicadores que podem ajudar na identificação da meningite:</p>
                    <section className="sintomas-lista">
                        <div className="texto-secundario-1">
                            <h4>Febre:</h4>
                            <p>A febre é frequentemente um dos primeiros sinais de meningite. Uma elevação rápida e significativa da temperatura corporal pode ocorrer.</p>
                            <h4>Dor de Cabeça Intensa:</h4>
                            <p>A dor de cabeça associada à meningite é caracterizada por intensidade e persistência. A sensação pode ser descrita como latejante e muitas vezes não melhora com analgésicos comuns.</p>
                            <h4>Rigidez no Pescoço:</h4>
                            <p>A rigidez no pescoço é um sintoma clássico de meningite. Dificuldade em inclinar o pescoço para frente devido à resistência muscular é um sinal importante</p>
                            <h4>Fotofobia:</h4>
                            <p>A intolerância à luz, conhecida como fotofobia, é comum em casos de meningite. A exposição à luz pode causar desconforto ocular e agravar a dor de cabeça.</p>
                        </div>
                        <div className="texto-secundario-2">  
                            <h4>Letargia e Confusão:</h4>
                            <p>Em estágios mais avançados, a meningite pode levar a um estado de letargia, sonolência excessiva e confusão mental. Isso pode se manifestar como desorientação ou dificuldade em se concentrar.</p>
                            <h4>Manchas na Pele (Púrpura):</h4>
                            <p>Em casos de meningite bacteriana, podem ocorrer manchas na pele, também conhecidas como púrpura. Essas manchas não desaparecem quando pressionadas e são um sinal de emergência.</p>
                            <h4>Irritabilidade em Bebês e Crianças Pequenas:</h4>
                            <p>Em bebês e crianças pequenas, a meningite pode se manifestar como irritabilidade, choro persistente, recusa em se alimentar e dificuldade em ser acalmado.</p>
                        </div>
                    </section>   
                </div>
            </section>
        </main>
    )
}