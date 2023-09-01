import Image from 'next/image'
import Link from 'next/link'
import EmailIcon from "../Cornmanthe3rd-Metronome-Communication-gmail.512.png"
import GitIcon from "../Arturo-Wibawa-Akar-Github.512.png"
import LinkedinIcon from "../Danleech-Simple-Linkedin.512.png"

export default function ContatoCard() {
  

  const usedClass="flex flex-col text-cyan-600 mr-6 bg-white h-[80px] rounded-lg"

  return (
    <div className="flex flex-col text-cyan-600  bg-white h-[80px] rounded-lg">
      

      <div className="flex flex-row">
        <Image src={EmailIcon} alt="email-icon" className="h-6 w-6" />
        matheus.o.lima.95@gmail.com
      </div>
      <div className="flex flex-row">
        <Image src={LinkedinIcon} alt="linkedin-icon" className="h-6 w-6" />
        <Link href="https://www.linkedin.com/in/matheusoliveiralima/">
          Linkedin: matheusoliveiralima
        </Link>
      </div>
      <div className="flex flex-row">
        <Image src={GitIcon} alt="git-icon" className="h-6 w-6" />
        <Link href="https://github.com/matheusolilima">
          Github: matheusolilima
        </Link>
      </div>

    </div>
  )
}