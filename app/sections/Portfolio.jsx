import project1 from "../components/images/project1.png"
import project2 from "../components/images/project2.png"
import project3 from "../components/images/project3.png"
import project4 from "../components/images/project4.png"
import project5 from "../components/images/project5.png"
import Image from "next/image"


export const Portfolio = () => {
  return (
    <section  className=" ">
      <h2 className="text-gray-900 text-5xl py-1 ">Portfolio</h2>
      <p className="text-2xl font-sans">Hello, and welcome to my portfolio! I am a recent Computer Science graduate with a burning passion for all things tech and innovation. 
        As I embark on my professional journey, I am thrilled to present my portfolio as a testament to my academic accomplishments, hands-on projects, 
        and my commitment to shaping the digital future.</p>
        
        <h1 className="text-xl pt-5 text-orange-600 font-serif">Note: Some of the projects are only provided with source codes. </h1>
        <h1 className="text-xl pt-4 font-serif">{'"'}For the JWT project, you can simply clone the repository, run {'npm install'} to install the dependencies, 
        and then use {'nodemon app'} to start the {'program."'}</h1>

        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1 group  rounded overflow-hidden shadow-lg">
          
        <div className=" group-hover:scale-105 transform transition-transform duration-300 ease-in-out ">
          <a href="https://www.euronlabs.com/" target="blank">
          <Image
          className="rounded-lg object-cover"
          alt="project1"
          width={"100%"}
          height={"100%"}
         src={project1}
          />
          </a>
          </div>
          <div className="font-sans flex justify-between">
        <div>
         <h1 className="font-bold text-xl">Internship project</h1>
          <h2 className="text-l">wordpress project</h2>s
          <h2 className="text-l text-blue-400 ">Euron labs</h2>
        </div> 
      </div>
    </div>
          <div  className="basis-1/3 flex-1 group rounded overflow-hidden shadow-lg">
            <div className="group-hover:scale-105 transform transition-transform duration-300 ease-in-out">
              <a href="https://jhoenne5.github.io/jhoenneEstrecho.github.io/" target="blank"> 
            <Image 
            className="rounded-lg  object-cover" alt="project2"
            width={"100%"}
            height={"100%"}
            src={project2}/></a>
            </div>
         
            <div className="font-sans flex justify-between pt-5">
              <div>
      
              <h1 className="text-xl font-bold">Internship project</h1>
             <h2 className="text-l text-orange-500">Travel connect</h2>
              </div>
       
            <div>
             <a href="https://jhoenne5.github.io/jhoenneEstrecho.github.io/"></a>
            </div>
            </div>
           
          </div>

          <div className="basis-1/3 flex-1 group rounded overflow-hidden shadow-lg">

            <div className="group-hover:scale-105 transform transition-transform duration-300 ease-in-out">
              <a href="http://gamerev-website-static.s3-website-ap-southeast-1.amazonaws.com/" target="blank">  
              <Image 
            className="rounded-lg object-cover" alt="project3"
            width={"100%"}
            height={"100%"}
            src={project3}/></a>
          
            </div>
          
            <div className="font-sans">
              <h1 className="font-bold text-xl">Internship project</h1>
              <h2 className="text-l text-red-600 ">Game rev website</h2>
            </div>
          </div>


          <div  className="basis-1/3 flex-1 group rounded overflow-hidden shadow-lg"> 
              <div className="group-hover:scale-105 transform transition-transform duration-300 ease-in-out">
                <a href="https://github.com/Jhoenne5/login-system-with-JWT" target="blank">     
                <Image 
        className="rounded-lg object-cover"
        width={"100%"}
        height={"100%"}
        src={project4} alt="project4"/></a>
         
              </div>

        
            <div>
              <h2 className="font-bold text-xl font-sans">Login system with JWT</h2>
            </div>
          </div>
        
  
          <div  className="basis-1/3 flex-1 group rounded overflow-hidden shadow-lg"> 
          <div className="group-hover:scale-105 transform transition-transform duration-300 ease-in-out mb-5">
        <a href="https://github.com/Jhoenne5/kfc" target="blank">  <Image 
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            src={project5} alt="project5"/></a>
        
          </div>
         
            <div className="font-sans">
              <h2 className="font-bold text-xl  font-sans ">Simple complaint ticketing system</h2>
            </div>
          </div>
        
    



        </div>

          
    </section>
    
  )
}
