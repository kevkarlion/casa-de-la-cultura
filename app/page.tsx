import Hero from "@/components/home/Hero/Hero";
import EventCarousel from "@/components/shared/eventos/EventosDestacados";
import { eventsMock } from "@/utils/events.mock";


const Page = () => {
  return (
    <div>
      <Hero />
      <EventCarousel events={eventsMock} />
    </div>
  );
}

export default Page;
