import Layout from "../components/layout";
import Head from "next/head";
import Image from "next/image";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Meet abhi - About</title>
      </Head>
      <section className="pt-20 pb-10 px-10 ">
        <div className="wrapper">
          <div className="w-full aspect-w-4 h-500 rounded-md overflow-hidden">
            <Image
              src="/assets/common/me.png"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
          <h1 className="mt-10">
            Hey I’m Abhishek 👋🏼 people call me “Abhi” sometimes even “AB”
          </h1>
        </div>
      </section>

      <div className="w-full py-12">
        <div className="wrapper flex items-center justify-center">
          <div className="w-px h-16 bg-white bg-opacity-20"></div>
        </div>
      </div>

      <section className="px-10">
        <div className="wrapper">
          <p className="text-4xl leading-normal mb-3">
            🎨 I'm a product designer at Samespace, helping create comprehensive
            Sales and customer support platform.
          </p>
          <p className="opacity-60">
            I lead design from end to end on customer-facing & internal
            products. Focused on creating engaging UI, bringing products to
            life.
          </p>
          <div className="mt-10 grid grid-flow-col auto-cols-max gap-6">
            <a
              href="https://www.dribbble.com/_abhiii"
              rel="noopener noreferrer"
              target="_blank"
              className="inline-flex items-center justify-center w-32 py-2.5 bg-white text-black rounded-md font-semibold cursor-pointer focus:outline-none focus:ring focus:ring-accent focus:ring-opacity-50 hover:shadow-inner transition duration-300 "
              tabIndex={0}
            >
              Resume
            </a>

            <button className="inline-flex items-center justify-center w-32 py-2.5 bg-white text-black rounded-md font-semibold cursor-pointer focus:outline-none focus:ring focus:ring-accent focus:ring-opacity-50 hover:shadow-inner transition duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      <div className="w-full py-12">
        <div className="wrapper flex items-center justify-center">
          <div className="w-px h-16 bg-white bg-opacity-20"></div>
        </div>
      </div>

      <section className="px-10">
        <div className="wrapper">
          <p className="text-4xl leading-normal mb-3">
            📚 I graduated from the Bachelors of Information Technology at the
            University of Mumbai.
          </p>
          <p className="opacity-60">
            There, I learned my craft and expanded my understanding of design,
            technology and its role in creating products for people, and learned
            alongside some truly amazing people.
          </p>
        </div>
      </section>

      <div className="w-full py-12">
        <div className="wrapper flex items-center justify-center">
          <div className="w-px h-16 bg-white bg-opacity-20"></div>
        </div>
      </div>

      <section className="px-10 pb-20">
        <div className="wrapper">
          <p className="text-4xl leading-normal mb-3">
            ✨ I'm working towards becoming a Designer who can code and create
            amazing product.
          </p>
          <p className="">
            <span className="opacity-60">
              I want to bring products to life, that's why I am learning React
              JS, Swift UI and other amazing frameworks. In this journey to
              learn programming, I have created products like{" "}
            </span>
            <a
              href="https://chrome.google.com/webstore/detail/ishuffle/cdnnpipncmghbcfkadecjchajedkegbc?hl=en"
              target="_blank"
              tabIndex={0}
              className="underline hover:opacity-70"
            >
              iShuffle
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
}
