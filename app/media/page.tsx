export const metadata = {
  title: "Veloce NxtGen",
  description: "Welcome to Veloce Infotech—where ideas transform into impactful digital solutions. As a youth-led team passionate about technology, design, and innovation, we specialize in turning visions into reality through our expertise in Web Development, App Development, IoT Solutions, Creative Design, and Digital Marketing.",
};

import PageIllustration from "@/components/media/page-illustration";
import Hero from "@/components/media/hero-home";
import Workflows from "@/components/media/workflows";
import Features from "@/components/media/features";
import Testimonials from "@/components/media/testimonials";
import Cta from "@/components/media/cta";

export default function Media() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      {/* <Features /> */}
      {/* <Testimonials /> */}
      <Cta />
    </>
  );
}