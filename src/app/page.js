import Image from 'next/image'
import Link from 'next/link'
import Profile from "./Matheus-picture.jpeg"
import EmailIcon from "../Cornmanthe3rd-Metronome-Communication-gmail.512.png"
import GitIcon from "../Arturo-Wibawa-Akar-Github.512.png"
import LinkedinIcon from "../Danleech-Simple-Linkedin.512.png"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      
      <div className="flex bg-cyan-700 rounded-lg h-24 items-center justify-between ">
        
        
        <h1  className="text-7xl font-sans text-cyan-50">
          Matheus Oliveira Lima
        </h1>

        <div  className="flex flex-col text-cyan-600 mr-6 bg-white rounded-lg">
          Contato:
          
            <div className="flex flex-row">
              <Image src={ EmailIcon } alt="email-icon" className="h-6 w-6"/>
              matheus.o.lima.95@gmail.com
            </div>
            <div className="flex flex-row">
              <Image src={ LinkedinIcon } alt="linkedin-icon" className="h-6 w-6"/>
              <Link href="https://www.linkedin.com/in/matheusoliveiralima/">
                Linkedin: matheusoliveiralima
              </Link>
            </div>
            <div className="flex flex-row">
              <Image src={ GitIcon } alt="git-icon" className="h-6 w-6"/>
              <Link href="https://github.com/matheusolilima">
                Github: matheusolilima
              </Link>
            </div>
          
        </div>

      </div>

      <div className="flex flex-row">
        <Image src={ Profile } alt="profile-picture" className="cropped1"/>

        <div className="flex flex-row rounded-lg bg-black ">

          <div className="sobre rounded-lg mx-12">
            <h2>Sobre</h2>
            <p className="text-left text-base break-normal">
              Encontrei na programação uma forma de empregar meu raciocínio lógico, acho fascinante
              como é possível usar essa ferramenta em tantos contextos diferentes para a resolução dos mais diversos problemas.
              Tenho focado no aprimoramento de minhas hard-skills com React, Redux, Hooks, Jest, Node.js, MySQL, arquitetura MSC e TypeScript,
              e nas soft-skills que tangem a comunicação e liderança.
              Vamos nos conectar e ficarei feliz com a oportunidade de por em prática aquilo que venho estudando.  
            </p>
          </div>

          <div className="objetivo-profissional rounded-lg mx-12">
            <h2>
              Objetivo Profissional
            </h2>
            <p className="text-left text-base break-normal">
              Buscar uma oportunidade como desenvolvedor web,
              onde eu possa empregar minhas habilidades em programação e contribuir
              de forma criativa para encontrar soluções eficientes para projetos web.
              Almejo me aprimorar com ajuda da equipe e evoluir minhas habilidades,
              sempre buscando novas maneiras de contribuir com a equipe.
            </p>
          </div>
        </div>
      </div>
      
      
      
      <div className="flex flex-row rounded-lg bg-amber-300 justify-center items-center h-96 mx-12 space-x-10">
        
        <div className="formacao rounded-lg">
          <h2>
            Formação
          </h2>
          <ul className="list-disc list-inside">
            <li>Bacharel em Ciências da Computação – Universidade Federal de Jataí</li>
            <li>Técnico em Informática - Instituto Federal de Goiás</li>
            <li>Desenvolvimento Web Fullstack - Trybe</li>
          </ul>
        </div>
        
        <div className="tecnologias-habilidades rounded-lg">
          <h2>
            Principais tecnologias e habilidades 
          </h2>
          <ul className="list-disc list-inside">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Python</li>
              <li>SQL</li>
              <li>POO</li>
              <li>Scrum</li>
            </ul>
        </div>

      
        <div className="experiencias rounded-lg">
          <h2>
            Experiências
          </h2>
          <ul className="list-disc list-inside">
              <li>Professor de Programação</li>
              <li>Assistente técnico em telecomunicações</li>
            </ul>
        </div>
      
      </div>
    </main>
  )
}
