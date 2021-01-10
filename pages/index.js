import Layout from "../components/layout";
import dynamic from "next/dynamic";
import { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import LazyLoad from "react-lazyload";
import Image from "next/image";
import Testimonial from "../components/testimonial";
import TextLoop from "react-text-loop";
import NewsLetter from "../components/newsletter";
import { AnimatePresence, motion } from "framer-motion";

const ContactPopover = dynamic(() => import("../components/contactPopover"));

export default function Index({}) {
  const [projects] = useState([
    {
      id: 1,
      teaserPath: "/assets/homepage/project-1.png",
      placeholderClass: "purple-gradient-placeholder",
      title: "Samespace Analytics",
      description:
        "I helped to design powerful business intelligence tool that makes data visualization and exploration easy with flexible filtering, scheduling, and customization options for a 360-degree view of contact center.",
    },
    {
      id: 2,
      teaserPath: "/assets/homepage/project-2.png",
      placeholderClass: "teal-gradient-placeholder",
      title: "tlkn",
      description:
        "Founded on principle of Privacy by Design I designed entire calling experience. And the outcome? Simplified user experience which inspires people to talk again.",
    },
    {
      id: 3,
      teaserPath: "/assets/homepage/project-3.png",
      placeholderClass: "magenta-gradient-placeholder",
      title: "iShuffle",
      description:
        "iShuffle is a chrome extension that controls media playback from Spotify, Apple Music, Youtube, SoundCloud and Amazon Music. It helps to control music no matter where you are with one click.",
    },
  ]);

  const [showGetInTouchPopover, setShowGetInTouchPopover] = useState(false);

  const handleGetInTouchPopover = () => {
    setShowGetInTouchPopover(!showGetInTouchPopover);
  };

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      //Do whatever when esc is pressed
      setShowGetInTouchPopover(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  return (
    <>
      <Layout>
        <Head>
          <title>Meet abhi</title>
        </Head>
        <AnimatePresence>
          {showGetInTouchPopover && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ easings: "easeInOut" }}
                className="fixed z-50 bg-black bg-opacity-90 backdrop-overlay text-white inset-0 "
                onClick={() => handleGetInTouchPopover()}
              />
              <ContactPopover
                handleGetInTouchPopover={handleGetInTouchPopover}
              />
            </>
          )}
        </AnimatePresence>
        <section className="pt-20 pb-10 px-10 overflow-hidden">
          <div className="wrapper grid grid-cols-1 md:grid-cols-12 gap-10 relative items-center">
            <div className="col-span-1 md:col-span-7">
              <Image src="/assets/common/logo.png" width="64px" height="64px" />
              <h1 className="my-8">
                <TextLoop mask>
                  <span>Hi!</span>
                  <span>Namasté!</span>
                  <span>Hola!</span>
                  <span>Ciao!</span>
                  <span>Salut!</span>
                  <span>Olá!</span>
                  <span>Marhabaan!</span>
                  <span>Privet!</span>
                </TextLoop>{" "}
                <br /> I'm Abhishek.
              </h1>
              <p className="opacity-70">
                I’m a product designer with 5 years of experience with a keen
                eye for creating engaging UI, bringing products to life.
              </p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <a
                  href="https://www.twitter.com/_abhiii"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="inline-flex items-center justify-center w-auto py-2 border border-solid border-white border-opacity-20 rounded-md font-semibold cursor-pointer focus:outline-none focus:ring focus:ring-accent focus:ring-opacity-50 hover:bg-white hover:text-black transition duration-300"
                  tabIndex={0}
                >
                  Twitter
                </a>
                <a
                  href="https://www.dribbble.com/_abhiii"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="inline-flex items-center justify-center w-auto py-2 border border-solid border-white border-opacity-20 rounded-md font-semibold cursor-pointer focus:outline-none focus:ring focus:ring-accent focus:ring-opacity-50 hover:bg-white hover:text-black transition duration-300"
                  tabIndex={0}
                >
                  Dribbble
                </a>

                <button
                  onClick={() => handleGetInTouchPopover()}
                  className="inline-flex items-center justify-center w-auto py-2 bg-white text-black rounded-md font-semibold cursor-pointer focus:outline-none focus:ring focus:ring-accent focus:ring-opacity-50 hover:shadow-inner transition duration-300"
                >
                  Get in Touch
                </button>
              </div>
            </div>
            <div className="abstract absolute md:col-span-5 md:relative w-300 h-300">
              <div className="absolute inset-0  abstract-multiply w-full"></div>
              <div className="absolute inset-0  abstract-hard-light w-full animate-spin "></div>
              <div className="absolute inset-0  abstract-normal w-full animate-spin-slow"></div>
            </div>
          </div>
        </section>

        <section className="pt-10 pb-20 px-10">
          <div className="wrapper grid grid-flow-row auto-rows-auto gap-20">
            {projects.map((project) => {
              return (
                <div key={project.id}>
                  <LazyLoad height={400} once>
                    <div
                      className={`w-full aspect-w-4 aspect-h-2 rounded-lg overflow-hidden ${
                        project.placeholderClass ? project.placeholderClass : ""
                      }`}
                    >
                      <Image
                        src={project.teaserPath}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </LazyLoad>
                  <h2 className="mt-9 mb-4">{project.title}</h2>
                  <p className="opacity-70">{project.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        <Testimonial />

        <section className="py-20 px-10">
          <div className="wrapper grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <p className="font-black">Join my email list</p>
              <p className="opacity-70 break-words mt-3 mb-6 text-lg">
                Get UX Tips & occasional{" "}
                <span className="block">note-worthy things.</span>
              </p>
              <NewsLetter />
            </div>

            <div>
              <p className="font-black">Have a project in mind? </p>
              <p className="opacity-70 break-words mt-3 mb-6 text-lg">
                Have an exciting project where you need some help?
              </p>

              <button
                onClick={() => handleGetInTouchPopover()}
                className="inline-flex items-center justify-center px-6 py-3 border border-solid border-white border-opacity-20 rounded-md font-semibold cursor-pointer focus:outline-none focus:ring focus:ring-accent focus:ring-opacity-50 hover:bg-white hover:text-black transition duration-300"
              >
                Get in touch
              </button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
