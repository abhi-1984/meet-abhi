import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="py-20 px-10 bg-jetBlack overflow-hidden">
      <div className="wrapper flex justify-between relative flex-col-reverse md:flex-row">
        <div className="absolute abstract-normal left-0 top-0 bottom-0 w-300 rounded-full abstract"></div>
        <div className="flex-1 relative z-10">
          <p className="italic">
            Abhi is an extremely talented designer. I worked with Abhi on the
            entire Lyra platform, which included iOS app & web app. He was able
            to quickly understand our ideas & concepts for the designs & bring
            them to life, in a way that was much better than we expected.
          </p>
          <p className="text-base mt-8 leading-relaxed opacity-70">
            James Khan <br />
            CEO & Founder, Lyra Inc.
          </p>
        </div>
        <div className=" rounded-lg overflow-hidden w-24 h-24 md:w-auto md:h-auto mb-6 md:mb-0">
          <Image
            alt="James Khan"
            src="/assets/common/james.png"
            width="240px"
            height="240px"
          />
        </div>
      </div>
    </section>
  );
}
