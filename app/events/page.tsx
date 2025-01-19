export const metadata = {
  title: "Veloce NxtGen",
  description: "Welcome to Veloce Infotech—where ideas transform into impactful digital solutions. As a youth-led team passionate about technology, design, and innovation, we specialize in turning visions into reality through our expertise in Web Development, App Development, IoT Solutions, Creative Design, and Digital Marketing.",
};

import PageIllustration from "@/components/events/page-illustration";
import Hero from "@/components/events/hero-home";
import Workflows from "@/components/events/workflows";
import Features from "@/components/events/features";
import Testimonials from "@/components/events/testimonials";
import Cta from "@/components/events/cta";

export default function Events() {
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