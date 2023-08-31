"use client"
import Image from 'next/image'
import Link from 'next/link'
import Profile from "./Matheus-picture.jpeg"
import EmailIcon from "../Cornmanthe3rd-Metronome-Communication-gmail.512.png"
import GitIcon from "../Arturo-Wibawa-Akar-Github.512.png"
import LinkedinIcon from "../Danleech-Simple-Linkedin.512.png"
import InfoCard from '@/components/infoCard'
import contatoCard from '@/components/contatoCard'
import Logo from "../logo.png"

export default function Home() {
  // posso armazenar componente em variavel pra renderizar quando quero
  // para adicionar cor especifica usa-se bg-[#50d71e]
  const sobre = {
    title: "Sobre",
    visibility: "visible",
    classes: "bg-blue-400",
    list:["Encontrei na programação uma forma de empregar meu raciocínio lógico, acho fascinante como é possível usar essa ferramenta em tantos contextos diferentes para a resolução dos mais diversos problemas. Tenho focado no aprimoramento de minhas hard-skills com React, Redux, Hooks, Jest, Node.js, MySQL, arquitetura MSC e TypeScript, e nas soft-skills que tangem a comunicação e liderança. Vamos nos conectar e ficarei feliz com a oportunidade de por em prática aquilo que venho estudando."]
  }
  const objetivo = {
    title: "Objetivo",
    visibility: "visible",
    classes: "bg-blue-400",
    list:["Buscar uma oportunidade como desenvolvedor web, onde eu possa empregar minhas habilidades em programação e contribuir de forma criativa para encontrar soluções eficientes para projetos web. Almejo me aprimorar com ajuda da equipe e evoluir minhas habilidades, sempre buscando novas maneiras de contribuir com a equipe."]
  }
  const formacao = {
    title: "Formação",
    classes: "bg-green-600",
    list:[
      "Bacharel em Ciências da Computação – Universidade Federal de Jataí",
      "Técnico em Informática - Instituto Federal de Goiás",
      "Desenvolvimento Web Fullstack - Trybe"
    ]
  }

  const habilidades = {
    title: "Principais tecnologias e habilidades ",
    classes: "bg-red-600",
    list:[
      "HTML","CSS","JavaScript","React",
      "Python","SQL","NoSQL","Node",
      "Jest","GitHub","POO","Scrum"
    ]
  }

  const experiencias = {
    title: "Experiências ",
    classes: "bg-blue-600",
    list:["Professor de Programação","Assistente técnico em telecomunicações"]
  }

  function visibilityHandler(element){
    // const id = event.target.id
    element.visibility == "visible"?
      element.visibility = "invisible":
      element.visibility = "visible"
  }
  function testAlert(){
    alert("teste")
  }
  return (
    <main className="flex min-h-screen flex-col">
      
      <div className="flex bg-cyan-700 h-[80px] items-center justify-between mb-6 ">
        
        
        {/* <h1  className="text-7xl font-sans text-cyan-50">
          Matheus Oliveira Lima
        </h1> */}
        
        <Image src={ Logo } alt="logo" className="flex h-[80px] w-[240px] rounded-lg"/>
        
        {contatoCard()}
        


      </div>

      <div className="flex flex-row">
        
        <Image src={ Profile } alt="profile-picture" className="cropped1 rounded-lg mx-12"/>
        
          {/*InfoCard(sobre)*/}
        <div
          
          className={`flex flex-row rounded-lg bg-black mx-12`}>
          <div
            id="sobre"
            // onClick={visibilityHandler(sobre)}
            className={`${sobre.visibility} sobre-objetivo rounded-lg mx-[10px]`}
            >
              <h2>Sobre</h2>
              <p className="text-left text-base break-normal">
                Encontrei na programação uma forma de empregar meu raciocínio lógico, acho fascinante
                como é possível usar essa ferramenta em tantos contextos diferentes para a resolução dos mais diversos problemas.
                Tenho focado no aprimoramento de minhas hard-skills com React, Redux, Hooks, Jest, Node.js, MySQL, arquitetura MSC e TypeScript,
                e nas soft-skills que tangem a comunicação e liderança.
                Vamos nos conectar e ficarei feliz com a oportunidade de por em prática aquilo que venho estudando.  
              </p>
          </div>

          <div
            id="objetivo"
            //visibilityHandler(objetivo)}
            className={`${sobre.visibility} sobre-objetivo rounded-lg mx-[10px]`}
            >
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
      
      
      
      <div className="flex flex-row rounded-lg bg-amber-300 justify-center items-center h-[320px] mx-12 space-x-10">
        
        {InfoCard(formacao)}
        {InfoCard(habilidades)}
        {InfoCard(experiencias)}
      
      </div>
    </main>
  )
}
