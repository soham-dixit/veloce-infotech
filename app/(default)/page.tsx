export const metadata = {
  title: "Veloce Infotech",
  description: "Welcome to Veloce Infotech—where ideas transform into impactful digital solutions. As a youth-led team passionate about technology, design, and innovation, we specialize in turning visions into reality through our expertise in Web Development, App Development, IoT Solutions, Creative Design, and Digital Marketing.",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
      {/* <Testimonials /> */}
      <Cta />
    </>
  );
}
