import { useState } from "react";
import Layout from "../components/layout";
import Head from "next/head";
import Image from "next/image";
import { LyraIcon, SamespaceIcon, TlknIcon } from "../components/icons";

export default function About() {
  const [skills] = useState([
    "UI Design",
    "Product Strategy",
    "UX Design",
    "Design Sprints",
    "Research and Analysis",
    "Prototyping",
    "Frontend Development",
  ]);

  return (
    <Layout>
      <Head>
        <title>Meet abhi - About</title>
      </Head>
      <section className="pt-20 pb-10 px-10">
        <div className="wrapper">
          <div className="w-full aspect-w-4 h-440  rounded-md overflow-hidden">
            <Image
              src="/assets/common/me.png"
              layout="fill"
              objectFit="cover"
              alt="Me reading bio of Steve"
            />
          </div>
        </div>
      </section>
      <section className="py-10 px-10">
        <div className="wrapper">
          <h1 className="pb-10">Hi, I'm Abhi 👋</h1>
          <p className="pb-10 opacity-80">
            Currently working with Samespace as Senior Product Designer.
          </p>
          <p className="pb-10 opacity-80">
            I live for the entire design process: from the messy beginnings to
            the finely-tuned endings. Though I focus primarily on UX/UI design,
            I’m equally passionate about front-end development. This gives me an
            unique edge when working with complex projects involving multiple
            disciplines.
          </p>
          <p className="pb-10 opacity-80">
            I spend my time building side-projects, learning new tools,
            listening to music and podcasts, reading books and playing cricket.
          </p>
          <p className="pb-10 opacity-80">Based in India.</p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <a
              href="https://www.twitter.com/_abhiii"
              rel="noopener noreferrer"
              target="_blank"
              className="inline-flex items-center justify-center w-auto py-3 border border-solid border-white border-opacity-20 rounded-md font-semibold cursor-pointer focus:outline-none focus:ring focus:ring-accent focus:ring-opacity-50 hover:bg-white hover:text-black transition duration-300"
              tabIndex={0}
            >
              Twitter
            </a>
            <a
              href="https://www.dribbble.com/_abhiii"
              rel="noopener noreferrer"
              target="_blank"
              className="inline-flex items-center justify-center w-auto py-3 border border-solid border-white border-opacity-20 rounded-md font-semibold cursor-pointer focus:outline-none focus:ring focus:ring-accent focus:ring-opacity-50 hover:bg-white hover:text-black transition duration-300"
              tabIndex={0}
            >
              Dribbble
            </a>

            <a
              href="https://www.dropbox.com/s/91cdwc8nv940oz6/resume.pdf?dl=0"
              rel="noopener noreferrer"
              target="_blank"
              className="inline-flex items-center justify-center w-auto py-3 border border-solid border-white border-opacity-20 rounded-md font-semibold cursor-pointer focus:outline-none focus:ring focus:ring-accent focus:ring-opacity-50 hover:bg-white hover:text-black transition duration-300"
              tabIndex={0}
            >
              Resume
            </a>

            <button className="inline-flex items-center justify-center w-auto py-3 bg-white text-black rounded-md font-semibold cursor-pointer focus:outline-none focus:ring focus:ring-accent focus:ring-opacity-50 hover:shadow-inner transition duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      <div className="wrapper bg-white h-px bg-opacity-10" />

      <section className="py-20 px-10">
        <div className="wrapper">
          <h2 className="text-5xl mb-10">Experience</h2>
          <div>
            <div className="mb-16 ">
              <div className="flex items-center ">
                <div className="hidden md:flex mr-5 w-20 h-20 bg-black border border-solid border-white border-opacity-10 rounded-lg  items-center justify-center">
                  <SamespaceIcon />
                </div>
                <div className="">
                  <p>Samespace</p>
                  <p className="opacity-60">5 yrs 1 mo</p>
                </div>
              </div>
              <div className="relative">
                <div className="hidden md:block absolute w-px h-auto border border-dashed border-white border-opacity-20 top-0 left-10 bottom-0 z-0" />
                <div className="mt-5 flex items-center relative z-10">
                  <div className="hidden md:flex mr-5 w-20 h-20 bg-black rounded-lg  items-center justify-center">
                    <div className="bg-white bg-opacity-10 rounded-full w-4 h-4"></div>
                  </div>
                  <div>
                    <p className="text-lg">Senior Designer, UI/UX</p>
                    <p className="text-lg opacity-60">Dec 2019 – Present</p>
                  </div>
                </div>
                <div className="mt-5 flex items-center relative z-10">
                  <div className="hidden md:flex mr-5 w-20 h-20 bg-black rounded-lg items-center justify-center">
                    <div className="bg-white bg-opacity-10 rounded-full w-4 h-4"></div>
                  </div>
                  <div>
                    <p className="text-lg">Product Designer</p>
                    <p className="text-lg opacity-60">Jan 2016 – Dec 2019</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center mb-16">
              <div className="hidden md:flex mr-5 w-20 h-20 bg-black border border-solid border-white border-opacity-10 rounded-lg items-center justify-center">
                <TlknIcon />
              </div>
              <div>
                <p>Product Designer at tlkn</p>
                <p className="opacity-60">2 yrs • Jan 2016 to Jan 2018</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="hidden md:flex mr-5 w-20 h-20 bg-black border border-solid border-white border-opacity-10 rounded-lg items-center justify-center">
                <LyraIcon />
              </div>
              <div>
                <p>Product Designer at Lyra Influence</p>
                <p className="opacity-60">
                  3 yrs • Mar 2017 to Feb 2020 • Freelance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="wrapper bg-white h-px bg-opacity-10" />

      <section className="py-20 px-10">
        <div className="wrapper">
          <h2 className="mb-10">Skills and Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {skills.map((skill, index) => {
              return (
                <div className="opacity-80" key={index}>
                  <p>{skill}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
