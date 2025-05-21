'use client'




import Footer from "@/components/demos/ui/footer";
import FurnitureContact from "@/components/demos/ui/furnitureContact";
import FurnitureLanding from "@/components/demos/ui/furnitureLanding";

import Navbar from "@/components/demos/ui/navbar";





export default function Home() {
  return (
    <div >



        <Navbar/>
      <section id="Home">
        
        <FurnitureLanding/>
        <FurnitureContact/>
      </section>
    
      
      
      <section>
        <Footer/>
      </section>
        
      </div>
  );
}