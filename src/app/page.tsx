import { Footer } from "@/components/Footer";
import { Header } from "@/components/header";
import { HeaderSection } from "@/components/header/section";
import { Benefits } from "@/components/main/Benefits";
import { TheCourse } from "@/components/main/TheCourse";

export default function Home() {
  return (
    <div>
      <Header />
      <HeaderSection />
      <TheCourse />
      <Benefits />
      <Footer />
    </div>
  );
}
