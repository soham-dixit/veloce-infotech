import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";

export default function Features() {
  return (
    <section className="relative" id="services">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
               Services Offered
              </span>
            </div>
            {/* <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Empowering Digital Transformation
            </h2>
            <p className="text-lg text-indigo-200/65">
              At Veloce Nxtgen, we offer a comprehensive approach to accelerate your brand's growth through our expertise in Tech, Events, and Media. Here's why partnering with us can drive success across these crucial areas:
            </p> */}
          </div>
          {/* <div className="flex justify-center pb-4 md:pb-12" data-aos="fade-up">
            <Image
              className="max-w-none"
              src={FeaturesImage}
              width={1104}
              height={384}
              alt="Features"
            />
          </div> */}
          {/* Items */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-2">
  <article>
    <svg className="mb-3 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
      <path d="M0 0h14v17H0V0Zm2 2v13h10V2H2Z" />
      <path fillOpacity=".48" d="m16.295 5.393 7.528 2.034-4.436 16.412L5.87 20.185l.522-1.93 11.585 3.132 3.392-12.55-5.597-1.514.522-1.93Z" />
    </svg>
    <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
      Web Development
    </h3>
    <p className="text-indigo-200/65">
      Build responsive, user-friendly websites designed to captivate and engage audiences effectively.
    </p>
  </article>

  <article>
    <svg className="mb-3 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
      <path fillOpacity=".48" d="M7 8V0H5v8h2Zm12 16v-4h-2v4h2Z" />
      <path d="M19 6H0v2h17v8H7v-6H5v8h19v-2h-5V6Z" />
    </svg>
    <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
      App Development
    </h3>
    <p className="text-indigo-200/65">
      Create intuitive, feature-rich mobile applications to enhance user engagement and brand presence.
    </p>
  </article>

  <article>
    <svg className="mb-3 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
      <path d="M23.414 6 18 .586 16.586 2l3 3H7a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4h12.586l-3 3L18 11.414 23.414 6Z" />
      <path fillOpacity=".48" d="M13.01 12.508a2.5 2.5 0 0 0-3.502.482L1.797 23.16.203 21.952l7.71-10.17a4.5 4.5 0 1 1 7.172 5.437l-4.84 6.386-1.594-1.209 4.841-6.385a2.5 2.5 0 0 0-.482-3.503Z" />
    </svg>
    <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
      IoT Solutions
    </h3>
    <p className="text-indigo-200/65">
      Transform businesses into smart ecosystems with real-time insights and automation.
    </p>
  </article>

  <article>
    <svg className="mb-3 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
      <path fillOpacity=".48" d="m3.031 9.05-.593-.805 1.609-1.187.594.804a6.966 6.966 0 0 1 0 8.276l-.594.805-1.61-1.188.594-.805a4.966 4.966 0 0 0 0-5.9Z" />
      <path d="m7.456 6.676-.535-.845 1.69-1.07.534.844a11.944 11.944 0 0 1 0 12.789l-.535.845-1.69-1.071.536-.845a9.944 9.944 0 0 0 0-10.647Z" />
      <path d="m11.888 4.35-.514-.858 1.717-1.027.513.858a16.9 16.9 0 0 1 2.4 8.677 16.9 16.9 0 0 1-2.4 8.676l-.513.859-1.717-1.028.514-.858A14.9 14.9 0 0 0 14.003 12a14.9 14.9 0 0 0-2.115-7.65Z" opacity=".48" />
    </svg>
    <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
      Digital & Social Media Marketing
    </h3>
    <p className="text-indigo-200/65">
      Amplify brand presence with targeted, data-driven strategies designed to connect businesses with the right audiences.
    </p>
  </article>
</div>

        </div>
      </div>
    </section>
  );
}
