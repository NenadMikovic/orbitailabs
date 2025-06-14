import Image from "next/image";
import Link from "next/link";
import GalaxyCanvas from "@/components/GalaxyCanvas";


const Hero = () => {
  return (
    <section
      id='home'
      className='relative z-10 overflow-hidden pt-35 md:pt-40 xl:pt-45'
    >
      {/* <!-- Hero Bg Shapes --> */}
      <div className='mx-auto max-w-7xl'>
        <div className='pointer-events-none absolute inset-0 -z-10 -mx-28 overflow-hidden'>
          <div className='-u-z-10 hero-circle-gradient absolute -top-[128%] left-1/2 -z-1 h-[1282px] w-full max-w-[1282px] -translate-x-1/2 rounded-full sm:-top-[107%] xl:-top-[73%]'></div>
          <div className='-u-z-10 hero-circle-gradient absolute -top-[112%] left-1/2 -z-1 h-[1046px] w-full max-w-[1046px] -translate-x-1/2 rounded-full sm:-top-[93%] xl:-top-[62%]'></div>
          <div className='-u-z-10 absolute top-0 left-1/2 aspect-1204/394 w-full max-w-[1204px] -translate-x-1/2'>
            <Image
              src='/images/blur/blur-02.svg'
              alt='blur-sm'
              fill
              className='max-w-none'
            />
          </div>
          <div className='-u-z-10 absolute top-0 left-1/2 h-full w-full -translate-x-1/2 bg-[url(/images/blur/blur-01.svg)] bg-cover bg-top bg-no-repeat'></div>
        </div>
      </div>

      {/* <!-- Hero Content --> */}
      <div className='relative z-1 mx-auto max-w-[900px] px-4 sm:px-8 xl:px-0'>
        <div className='text-center'>
          <span className='hero-subtitle-gradient hover:hero-subtitle-hover relative mb-5 inline-flex items-center gap-2 rounded-full px-4.5 py-2 text-sm font-medium'>
            <Image
              src='/images/hero/icon-title.svg'
              alt='icon'
              width={16}
              height={16}
            />

            <span className='hero-subtitle-text'>
              Deep dive into intelligent automation
            </span>
          </span>
          <h1 className='xl:text-heading-1 mb-6 text-3xl font-extrabold text-white sm:text-5xl'>
            Designed by traders. Powered by AI. Trusted by results.
          </h1>

          <p className='mx-auto mb-9 max-w-[500px] font-medium md:text-lg'>
            Professionally engineered system, developed by active traders and AI engineers, tailored for those who want more control, more safety, and smarter returns.
          </p>

          <Link
            href='/#pricing'
            className='hero-button-gradient inline-flex rounded-lg px-7 py-3 font-medium text-white duration-300 ease-in hover:opacity-80'
          >
            Try Stellaris
          </Link>
        </div>
      </div>
{/* <!-- bg circles --> */}

        <div className="relative top-18">
          <div className="pointer-events-none absolute inset-0 -z-10 -my-55 overflow-hidden">
            <div className="absolute left-1/2 top-0 mx-auto aspect-square w-full max-w-[925px] -translate-x-1/2">
              <Image
                src="/images/blur/blur-13.svg"
                alt="blur-sm"
                fill
                className="max-w-none"
              />
            </div>
            <div className="absolute left-1/2 top-0 mx-auto aspect-square w-full max-w-[778px] -translate-x-1/2">
              <Image
                src="/images/blur/blur-14.svg"
                alt="blur-sm"
                fill
                className="max-w-none"
              />
            </div>
            <div className="absolute left-1/2 top-0 mx-auto aspect-square w-full max-w-[584px] -translate-x-1/2">
              <Image
                src="/images/blur/blur-15.svg"
                alt="blur-sm"
                fill
                className="max-w-none"
              />
            </div>
          </div>
          <GalaxyCanvas />

          <div className="absolute -top-30 left-1/2 -z-1 h-60 w-full max-w-[482px] -translate-x-1/2 overflow-hidden">
            <div className="stars"></div>
            <div className="stars2"></div>
          </div>
        </div>
      <div
        className='relative mx-auto mt-1 h-[100px] aspect-1170/411 w-full max-w-[1170px]'
        data-wow-delay='0.1s'
      >
        
      </div>
    </section>
  );
};

export default Hero;
