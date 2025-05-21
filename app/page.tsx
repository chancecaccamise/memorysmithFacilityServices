'use client'




import FAQ from "@/components/demos/ui/faq";
import AboutHighlight from "@/components/demos/ui/FeatureSectionTwo";
import Footer from "@/components/demos/ui/footer";
import LocationSection from "@/components/demos/ui/googlemapsFeature";
import HeroSectionWithForm from "@/components/demos/ui/heroSectionForm";
import ServicesGrid from "@/components/demos/ui/serviceSection";



import { TestimonialCarousel } from "@/components/demos/ui/testimonial";


export default function Home() {
  return (
    <div >



      
      <section id="Home">
        <HeroSectionWithForm/>
      </section>
      <section>
        <ServicesGrid/>
        
        <AboutHighlight/>
        <LocationSection/>

        <TestimonialCarousel/>
        <FAQ/>
      </section>
      
      
      <section>
        <Footer/>
      </section>
        
      </div>
  );
}