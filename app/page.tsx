import Hero from "@/components/Hero";
import Buttons from "@/components/Buttons";
import CarouselPage from "@/components/CarouselPage";
import PatientReviews from "@/components/PatientReviews";



export default function HomePage() {
  return (
    <>
      <CarouselPage />
      <Hero />
      <Buttons />
      <PatientReviews/>
      
    </>
  );
}
