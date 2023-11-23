import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <section>
        <div className="texto">
          <h1>O que é meningite</h1>
          <p>
          A meningite é a inflamação das meninges, que são as membranas que envolvem o cérebro e a medula espinhal. Essa inflamação pode ser desencadeada por diversos agentes infecciosos, incluindo vírus, bactérias, fungos e protozoários. As meninges, compostas por três camadas - pia-máter, aracnoide e dura-máter - desempenham um papel crucial na proteção do sistema nervoso central.
          </p>
          <p>
          A forma como a meningite se desenvolve varia de acordo com o agente causador. Na meningite viral, os vírus frequentemente entram no organismo por meio de secreções respiratórias ou gastrointestinais, alcançando as meninges através da circulação sanguínea. Já na meningite bacteriana, as bactérias podem atingir as meninges diretamente a partir de uma infecção em outra parte do corpo.
          </p>
          <p>
          Embora existam diferentes tipos de meningite, a condição é frequentemente associada a sintomas como febre, dor de cabeça intensa e rigidez no pescoço. O diagnóstico é geralmente confirmado por meio de exames clínicos, análises de sangue e, em alguns casos, punção lombar para coleta de líquido cerebroespinhal.
          </p>
          <p>
          A meningite pode ocorrer em pessoas de todas as idades, e a gravidade da doença pode variar amplamente. A prevenção desempenha um papel fundamental, com estratégias que incluem vacinação, práticas de higiene e conscientização sobre os sintomas. No entanto, a rapidez no diagnóstico e tratamento é essencial para prevenir complicações graves.
          </p>
        </div>
        <div className="brain-img">
          <Image src="/brain.svg" alt="Imagem ilustrativa do sistema nervoso de uma pessoa" width={130} height={130}/>
        </div>
      </section>
      <section>
        <div className="botao-ajuda">
          <Link href="/paginas/ajuda"><button>Precisa de ajuda? Clique aqui!</button></Link>
        </div>
        <div className="texto">
          <h1>Tipos de Meningite</h1>
          <p>Existem diversos tipos de meningite, sendo a classificação principalmente determinada pelo agente causador da inflamação das meninges. Cada tipo apresenta características distintas, impactando a severidade da condição e o tratamento adequado. Aqui estão alguns dos principais tipos de meningite:</p>
          <div className="texto-secundario">
            <p><b>Meningite Viral:</b>A meningite viral é a forma mais comum da doença e é geralmente causada por vírus como enterovírus, herpes simples e caxumba. Embora menos grave do que a meningite bacteriana, ainda pode causar desconforto significativo. O tratamento, muitas vezes, envolve cuidados de suporte para aliviar os sintomas.</p>
            <p><b>Meningite Bacteriana:</b>A meningite bacteriana é mais grave e uma emergência médica. Bactérias como Neisseria meningitidis (meningococo), Streptococcus pneumoniae (pneumococo) e Haemophilus influenzae são frequentes causadoras dessa forma da doença. O tratamento requer a administração rápida de antibióticos e, em alguns casos, hospitalização.</p>
            <p><b>Meningite Fúngica:</b>Causada por fungos como Cryptococcus e Candida, a meningite fúngica é menos comum e geralmente afeta pessoas com sistemas imunológicos comprometidos. O tratamento envolve antifúngicos específicos, mas a resposta ao tratamento pode ser mais desafiadora.</p>
            <p><b>Meningite Protozoária:</b>Esta forma é rara e é causada por protozoários, sendo o Naegleria fowleri um exemplo. Geralmente associada a exposições específicas, como o contato com água contaminada. Os casos são extremamente raros, mas a meningite protozoária é muitas vezes fatal.</p>
          </div>
          <p>Compreender os diferentes tipos de meningite é fundamental para um diagnóstico preciso e a implementação de tratamentos adequados. A prevenção, por meio de vacinação e práticas de higiene, desempenha um papel crucial na redução do risco de infecção por esses diversos agentes patogênicos.</p>
        </div>
      </section>
    </main>
  )
}