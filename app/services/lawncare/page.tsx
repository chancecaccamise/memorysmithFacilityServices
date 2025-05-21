'use client'





import Footer from "@/components/demos/ui/footer";
import LawncareContact from "@/components/demos/ui/lawncareContact";
import LawncareLanding from "@/components/demos/ui/lawncareLanding";

import Navbar from "@/components/demos/ui/navbar";





export default function Home() {
  return (
    <div >



        <Navbar/>
      <section id="Home">
        
        <LawncareLanding/>
        <LawncareContact/>
        
      </section>
    
      
      
      <section>
        <Footer/>
      </section>
        
      </div>
  );
}