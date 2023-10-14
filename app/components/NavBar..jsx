import {BsFillMoonStarsFill} from "react-icons/bs"
import { AiFillGithub } from "react-icons/ai"
export const NavBar = () => {
  return (
   
        <nav className="mb-12 flex justify-between">
        <ul className="flex items-center">
               
                <li className="bg-gray-900 text-white px-3 py-2 rounded-xl m-5 text-m hover:text-blue-400"><a href="https://drive.google.com/file/d/1N5WbkGaFgSXORdBisI3AuDJIc4g2ryF1/view" target="blank">Resume</a></li>
                  <li className="hover:text-blue-400"><a href="https://github.com/Jhoenne5" target="blank"><AiFillGithub style={{width:"40px", height:"40px"}}/></a></li>
            </ul>
            <h1 className="text-2xl font-serif mt-5">Developed with Next & tailwind  </h1>
           
        </nav>

  )
}