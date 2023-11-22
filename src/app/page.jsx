import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <section>
        <div>
          <h1>Lorem ipsum dolor sit amet</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis repellendus libero obcaecati asperiores perspiciatis voluptatibus cum error nemo labore animi, consectetur nobis. Aliquam, voluptatem molestiae. Ut beatae quas quasi saepe.
          </p>
        </div>
        <div>
          <Image src="/brain.svg" alt="Imagem ilustrativa do sistema nervoso de uma pessoa" width={130} height={130}/>
        </div>
        <div>
          <Link href="/paginas/ajuda"><button>Precisa de ajuda? Clique aqui!</button></Link>
        </div>
      </section>
    </main>
  )
}