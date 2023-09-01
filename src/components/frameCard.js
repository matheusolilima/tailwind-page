import Image from 'next/image'
import ContatoCard from './contatoCard'
import Profile from "../app/Matheus-picture.jpeg"

export default function FrameCard() {
  

  const usedClass="flex flex-col text-cyan-600 mr-6 bg-amber-500 h-[360px] w-[500px] rounded-lg"

  return (
    <div className="flex flex-col text-cyan-600 bg-amber-500 h-1/3 w-1/3 rounded-lg items-center">
      
      <Image src={ Profile } alt="profile-picture" className="rounded-lg h-1/2 w-1/2"/>
      {ContatoCard()}

    </div>
  )
}