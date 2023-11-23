import Image from "next/image"

export const metadata = {
    title: 'Meningite Infantil'
}

export default function Infantil() {
    return (
        <main>
            <section className="meningite-infantil">
                <h1>Meningite Infantil:</h1>
                <div className="meningite-infantil-div1">
                    <p>
                    A meningite infantil é uma preocupação significativa de saúde, pois afeta crianças em seus primeiros anos de vida. Assim como em adultos, essa condição refere-se à inflamação das meninges, as membranas que envolvem o cérebro e a medula espinhal. No entanto, a resposta do sistema imunológico das crianças e os desafios únicos associados à infância tornam a meningite infantil uma preocupação particular.
                    </p>
                </div>
                <div className="children-img">
                    <Image src="/children.jpg" alt="Imagem de uma criança doente" width={600} height={380}/>
                </div>
                <div>
                    <h3>Agentes Causadores:</h3>
                    <p>
                    A meningite infantil pode ser desencadeada pelos mesmos agentes infecciosos que afetam adultos, incluindo vírus e bactérias. Entre as bactérias que frequentemente causam meningite em crianças, destacam-se o Streptococcus pneumoniae (pneumococo), Neisseria meningitidis (meningococo) e Haemophilus influenzae tipo b (Hib). As infecções virais, como enterovírus e herpes simplex, também são causas comuns de meningite infantil.
                    </p>
                    <h3>Sintomas em Crianças:</h3>
                    <p>Os sintomas da meningite em crianças podem ser subtis, tornando o diagnóstico desafiador. Bebês e crianças pequenas podem manifestar irritabilidade, febre, letargia, recusa em se alimentar e choro persistente. À medida que a criança cresce, podem surgir dores de cabeça, rigidez no pescoço, vômitos e fotofobia. A observação atenta de sinais de desconforto e mudanças comportamentais é crucial para identificar precocemente a meningite infantil.</p>
                    <h3>Prevenção e Vacinação:</h3>
                    <p>A prevenção da meningite infantil é uma prioridade, e a vacinação é uma ferramenta essencial. As vacinas que protegem contra cepas comuns de bactérias causadoras de meningite, como o Hib e o meningococo, são administradas durante a infância como parte do calendário de imunização. Manter as vacinas em dia é crucial para proteger as crianças contra formas evitáveis dessa doença potencialmente séria.</p>
                    <h3>Rápido Diagnóstico e Tratamento:</h3>
                    <p>Dada a natureza rápida da progressão da meningite, o diagnóstico e o tratamento precoces são críticos. Os profissionais de saúde consideram a avaliação clínica, exames de sangue e, em casos suspeitos, a punção lombar para análise do líquido cerebroespinhal. O tratamento geralmente envolve antibióticos ou antivirais, dependendo da causa subjacente.</p>
                    <h3>Cuidados Específicos:</h3>
                    <p>A meningite infantil exige cuidados específicos, considerando a vulnerabilidade das crianças. A hospitalização pode ser necessária, principalmente em casos de meningite bacteriana, para monitorar de perto os sintomas e fornecer tratamento adequado. Além disso, os pais e cuidadores devem estar atentos aos sinais de alerta e procurar assistência médica imediatamente se houver suspeita de meningite.</p>
                </div>
            </section>
        </main>
    )
}