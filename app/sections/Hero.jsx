import {AiFillFacebook, AiFillTwitterCircle, 
        AiFillLinkedin} from "react-icons/ai";
import Image from "next/image";
import Me from "../components/images/me.jpg"


export const Hero = () => {
  return (
 <div className="my-28">
  <div className="p-10 text-center transition-all duration-300">
    <div className="flex mb-10 justify-center">
      <h2 className="text-5xl text-dark font-semibold py-2 md:text-5xl">Jhoenne Estrecho</h2>
    </div>

    <h3 className="text-2xl py-2 transition-all duration-300">JavaScript developer</h3>
    <p className="text-2xl transition-all duration-300">
      Graduated from <a className="text-blue-700 hover:underline" href="https://www.facebook.com/iACADEMY" target="blank">iAcademy</a> with a degree of Bachelor of Science in Computer Science Major in Software Engineering
    </p>
    <p className="text-2xl py-2 transition-all duration-300">
      One of the early developers of transitioning <a target="blank" className="text-blue-400 hover:underline" href="https://euronlabs.com/">EuronLabs</a> to WordPress
    </p>
  </div>

  <div className="w-80 h-80 mt-20 mx-auto mb-5 transition-all duration-300">
    <Image src={Me} alt="me" className="rounded-full" />
  </div>
</div>

 
  )
}