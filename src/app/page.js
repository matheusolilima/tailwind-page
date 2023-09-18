"use client"
import React from 'react'
import Image from 'next/image'
import InfoCard from '@/components/infoCard'
import Logo from "../logo.png"
import MenuButtons from '@/components/menuButtons'
import FrameCard from '@/components/frameCard'

export default function Home() {
  // posso armazenar componente em variavel pra renderizar quando quero
  // para adicionar cor especifica usa-se bg-[#50d71e]
  const bluePallete = ["blue-400","blue-600","blue-800"]


  const [ sobre, setSobre] = React.useState({
    title: "Sobre",
    cor: "bg-blue-400",
    isVisible: true,
    list:["Encontrei na programação uma forma de empregar meu raciocínio lógico, acho fascinante como é possível usar essa ferramenta em tantos contextos diferentes para a resolução dos mais diversos problemas. Tenho focado no aprimoramento de minhas hard-skills com React, Redux, Hooks, Jest, Node.js, MySQL, arquitetura MSC e TypeScript, e nas soft-skills que tangem a comunicação e liderança. Vamos nos conectar e ficarei feliz com a oportunidade de por em prática aquilo que venho estudando."]
  });

  const [ objetivo, setObjetivo] = React.useState({
    title: "Objetivo",
    cor: "bg-blue-400",
    isVisible: false,
    list:["Buscar uma oportunidade como desenvolvedor web, onde eu possa empregar minhas habilidades em programação e contribuir de forma criativa para encontrar soluções eficientes para projetos web. Almejo me aprimorar com ajuda da equipe e evoluir minhas habilidades, sempre buscando novas maneiras de contribuir com a equipe."]
  });
  
  const [ formacao, setFormacao] = React.useState({
    title: "Formação",
    cor: "bg-blue-600",
    isVisible: true,
    list:[
      "Bacharel em Ciências da Computação – Universidade Federal de Jataí",
      "Técnico em Informática - Instituto Federal de Goiás",
      "Desenvolvimento Web Fullstack - Trybe"
    ]
  });
  
  const [ habilidades, setHabilidades] = React.useState({
    title: "Tecnologias e habilidades",
    cor: "bg-blue-600",
    isVisible: false,
    list:[
      "HTML","CSS","JavaScript","React",
      "Python","SQL","NoSQL","Node",
      "Jest","GitHub","POO","Scrum"
    ]
  });

  const [ experiencias, setExperiencias] = React.useState({
    title: "Experiências",
    cor: "bg-blue-600",
    isVisible: false,
    list:["Professor de Programação","Assistente técnico em telecomunicações"]
  });

  function toggleSobreObjetivo(){
    setSobre({ ...sobre, isVisible: !sobre.isVisible})
    setObjetivo({ ...objetivo, isVisible: !objetivo.isVisible})
  }

  function btnShowInfo(buttonName){
    // é possivel usar funcoes dentro de uma lista:
    // lista[0]()
    if(buttonName == "Sobre"){
      setSobre({ ...sobre, isVisible: true})
      setObjetivo({ ...objetivo, isVisible: false})
    }
    if(buttonName == "Objetivo"){
      setObjetivo({ ...objetivo, isVisible: true})
      setSobre({ ...sobre, isVisible: false})
    }
    //manter separado por blocos para organizar
    if(buttonName == "Formação"){
      setFormacao({ ...formacao, isVisible: true })
      setHabilidades({ ...habilidades, isVisible: false })
      setExperiencias({ ...experiencias, isVisible: false})
    }
    if(buttonName == "Tecnologias e habilidades"){
      setFormacao({ ...formacao, isVisible: false })
      setHabilidades({ ...habilidades, isVisible: true })
      setExperiencias({ ...experiencias, isVisible: false })
    }
    if(buttonName == "Experiências"){
      setFormacao({ ...formacao, isVisible: false})
      setHabilidades({ ...habilidades, isVisible: false})
      setExperiencias({ ...experiencias, isVisible: true})
    }


  }
  
  function toggleForHabExp(){
    const displaying = [
      formacao.isVisible,
      habilidades.isVisible,
      experiencias.isVisible
    ]
    
    const aux = habilidades.isVisible
    setFormacao({ ...formacao, isVisible: displaying[2]})
    setHabilidades({ ...habilidades, isVisible: displaying[0]})
    setExperiencias({ ...experiencias, isVisible: aux})

  }

  const bloco1States=[{...sobre}, {...objetivo}]
  const bloco2States=[{...formacao}, {...habilidades}, {...experiencias}]


  return (
    <main className="flex min-h-screen flex-col">
      
      <div className={`flex bg-[#1e40af] h-[80px] items-center justify-between mb-6`} >

        {/* <h1  className="text-7xl font-sans text-cyan-50">
          Matheus Oliveira Lima
        </h1> */}

        <Image src={ Logo } alt="logo" className="flex h-[80px] w-[240px] rounded-lg"/>
        
        {/* <MenuButtons stateList={[{...sobre},{...objetivo}]} /> */}
        
        <div className={`flex rounded-lg bg-[#1e40af] h-[80px] w-auto justify-center items-center`}>

          {bloco1States.map((item) => (
        
            <button onClick={() => btnShowInfo(item.title)} key={item.title} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-[5px]">
              {item.title}
            </button>
      
          ))}
        
          {bloco2States.map((item) => (
        
            <button onClick={() => btnShowInfo(item.title)} key={item.title} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-[5px]">
              {item.title}
            </button>
      
          ))}
        
        </div>
      
      </div>

      <div className="flex flex-row">
        
        <FrameCard pallete={ bluePallete } />
        

        <div className={`flex flex-row rounded-lg bg-[#1e40af] mx-12 w-2/3`}>
          
          {/* <InfoCard infos={sobre} toggler={toggleSobreObjetivo}/>
          <InfoCard infos={objetivo} toggler={toggleSobreObjetivo}/> */}
          
          <div
            id="sobre"
            onClick={toggleSobreObjetivo}
            className={`${sobre.isVisible? "": "hidden"} sobre-objetivo rounded-lg mx-[10px] text-white`}
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
            onClick={toggleSobreObjetivo}
            className={`${objetivo.isVisible? "": "hidden"} sobre-objetivo rounded-lg mx-[10px] text-white`}
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

          <InfoCard infos={formacao} toggler={toggleForHabExp}/>
          <InfoCard infos={habilidades} toggler={toggleForHabExp}/>
          <InfoCard infos={experiencias} toggler={toggleForHabExp}/>
          
        </div>
      </div>

    </main>
  )
}
