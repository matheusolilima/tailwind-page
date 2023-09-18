import Image from 'next/image'
import ContatoCard from './contatoCard'
import Profile from "../app/Matheus-picture.jpeg"

export default function FrameCard({pallete}) {


  const usedClass = `flex flex-col rounded-lg bg-cyan-700 mx-12 w-1/3 justify-center items-center`
  
  return (
    <div className={ `flex flex-col rounded-lg bg-${pallete[1]} mx-12 w-1/3 justify-center items-center` }>

      <Image src={Profile} alt="profile-picture" className="rounded-lg h-3/4 w-3/4" />
      {ContatoCard()}

    </div>
  )
}