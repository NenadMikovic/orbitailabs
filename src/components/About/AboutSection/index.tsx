import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="overflow-hidden">
      <div className="relative mx-auto max-w-[1170px] px-4 py-20 sm:px-8 lg:py-25 xl:px-0">
        <div className="about-divider-gradient absolute bottom-0 left-0 h-[1px] w-full"></div>

        <div className="flex flex-wrap justify-between gap-11 xl:flex-nowrap">
          <div className="wow fadeInLeft w-full max-w-[570px]">
            <span className="hero-subtitle-text mb-5 block font-semibold">
              Need Help? We’re Here.
            </span>

            <h2 className="mb-5 text-2xl font-extrabold text-white sm:text-4xl xl:text-heading-2">
              Human Support Meets AI Efficiency.
            </h2>
            <p className="mb-9 font-medium">
              Our hybrid support system combines smart AI Assistants with real human agents — so you always get the help you need, fast.
            </p>

            <a
              href="#"
              className="hero-button-gradient inline-flex rounded-lg px-7 py-3 font-medium text-white duration-300 ease-in hover:opacity-80"
            >
              Start Live Chat
            </a>
          </div>

          <div className="wow fadeInRight relative hidden aspect-556/401 w-full xl:block">
            <Image src="/images/about/about.svg" alt="about" fill />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
