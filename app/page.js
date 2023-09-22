import { NavBar } from "./components/NavBar.";
import { Hero } from "./sections/Hero";
import { Services } from "./sections/Services";
import {Portfolio} from "./sections/Portfolio";
import {Footer} from "./sections/Footer"



export default function Home() {
 
  return (
    
       <div className="bg-slate-50">
      <main className="px-10 py-10 md:px-20 lg:px-40 " >    
      <NavBar />
      <Hero />
      <Services />
      <Portfolio />
      </main>   
      <Footer />
      </div>

  

  )
} 
   