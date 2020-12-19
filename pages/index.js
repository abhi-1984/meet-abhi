import { useState } from "react";
import Layout from "../components/layout";
import Project1Teaser from "../public/assets/homepage/project-1.mp4";
import Project2Teaser from "../public/assets/homepage/project-2.mp4";
import Project3Teaser from "../public/assets/homepage/project-3.mp4";
import Project4Teaser from "../public/assets/homepage/project-4.mp4";
import Project5Teaser from "../public/assets/homepage/project-5.mp4";
import Project6Teaser from "../public/assets/homepage/iShuffle.mp4";
import LazyLoad from "react-lazyload";
import Head from "next/head";

export default function Index({}) {
  const [projects] = useState([
    {
      id: 1,
      teaser: Project1Teaser,
      title: "Samespace Analytics",
      description:
        "I helped to design powerful business intelligence tool that makes data visualization and exploration easy with flexible filtering, scheduling, and customization.",
    },
    {
      id: 2,
      teaser: Project2Teaser,
      title: "Samespace Studio",
      description:
        "I was knee deep with the team through the entire thing—from defining problems, to scoping down the work, to executing on visual design, to building individual nodes, to working with engineers to polish to the final product.",
    },
    {
      id: 3,
      teaser: Project3Teaser,
      title: "Samespace Dock",
      description:
        "I helped to re-imagine Samespace Dock with features like AI Assistance, Social Media Support and Native Integration with Salesforce.",
    },
    {
      id: 4,
      teaser: Project4Teaser,
      title: "tlkn",
      description:
        "Based on principle of Privacy by Design I made an visual design which inspires people to talk again instead of sending emojis. Entire calling experience was re-imagined and re-engineered. And the outcome? Pure Simplicity.",
    },
    {
      id: 1,
      teaser: Project5Teaser,
      title: "Samespace Messenger",
      description:
        "I helped redesign the Messenger, which is used by thousands of users every month. The Samespace messenger allows to chat or talk with website visitors in real-time and capture leads.",
    },
  ]);

  return (
    <>
      <Layout>
        <Head>
          <title>Meet abhi</title>
        </Head>
        <section className="px-3 py-12">
          <div className="wrapper">
            <p>Hi. Nice to meet you!</p>
            <br />
            <p>
              I’m Abhi, a digital product designer working at Samespace. I love
              solving complex business problems with beautiful and clean user
              interfaces. I am passionate about design systems, user experience
              and intersection of design and engineering.
            </p>
            <br />
            <div className="grid grid-flow-col auto-cols-max gap-4">
              <a
                href="https://www.twitter.com/_abhiii"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex px-6 py-3 bg-gray-100 rounded-md font-medium cursor-pointer hover:bg-accent transition-all focus:outline-none focus:ring focus:ring-accent focus:ring-opacity-50"
                tabIndex={0}
              >
                Twitter
              </a>
              <a
                href="https://www.twitter.com/_abhiii"
                rel="noopener noreferrer"
                target="_blank"
                tabIndex={0}
                className="inline-flex px-6 py-3 bg-gray-100 rounded-md font-medium cursor-pointer hover:bg-accent transition-all focus:outline-none focus:ring focus:ring-accent focus:ring-opacity-50"
              >
                Dribbble
              </a>
              <a
                href="../public/assets/common/resume.pdf"
                download
                tabIndex={0}
                className="inline-flex px-6 py-3 bg-gray-100 rounded-md font-medium cursor-pointer hover:bg-accent transition-all focus:outline-none focus:ring focus:ring-accent focus:ring-opacity-50"
              >
                Resume
              </a>
              <div
                tabIndex={0}
                className="inline-flex px-6 py-3 bg-gray-100 rounded-md font-medium cursor-pointer hover:bg-accent transition-all focus:outline-none focus:ring focus:ring-accent focus:ring-opacity-50"
              >
                Email
              </div>
            </div>
          </div>
        </section>

        <section className="px-3 py-12">
          <div className="wrapper grid grid-flow-row auto-row-max gap-24">
            {projects.map((project) => {
              return (
                <div key={project.id} className="">
                  <LazyLoad height={"100%"} once>
                    <video
                      autoPlay
                      loop
                      playsInline
                      controls={false}
                      muted
                      className="rounded-md"
                      src={project.teaser}
                    />
                  </LazyLoad>
                  <p className="mt-6 mb-1 font-bold">{project.title}</p>
                  <p>{project.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        <div className="wrapper h-px bg-black bg-opacity-10"></div>

        <section className="px-3 py-12">
          <div className="wrapper">
            <p className="mb-6">
              At some point during my design life I decided to start building
              things for myself, and understand how code works. Here is one of
              those things.
            </p>
            <video
              autoPlay
              loop
              playsInline
              controls={false}
              muted
              className="rounded-md"
              src={Project6Teaser}
            />
            <p className="mt-6 mb-1 font-bold">iShuffle</p>
            <p>
              iShuffle is a chrome extension that controls media playback from
              Spotify, Apple Music, Youtube, SoundCloud and Amazon Music. It
              helps to control music no matter where you are with one click.
            </p>
          </div>
        </section>

        <div className="wrapper h-px bg-black bg-opacity-10"></div>

        <section className="px-3 py-12">
          <div className="wrapper">
            <p>
              Join my email list and get free design stuff and occasional
              note-worthy things from me.
            </p>
            <form className="grid grid-cols-5 mt-6 gap-3">
              <input
                className="p-2 col-span-2 border border-solid border-gray-300 focus:border-accent focus:no-outline focus:ring focus:ring-accent rounded-md"
                type="text"
                aria-label="Full name"
                placeholder="Full Name"
              />
              <input
                className="p-2 col-span-2 border border-solid border-gray-300 focus:border-accent focus:no-outline focus:ring focus:ring-accent rounded-md"
                type="email"
                aria-label="Your Email"
                placeholder="Your Email"
              />
              <button className="col-span-1 bg-accent rounded-md font-medium focus:outline-none focus:ring focus:ring-accent focus:ring-opacity-50">
                Join
              </button>
            </form>
          </div>
        </section>

        <div className="wrapper h-px bg-black bg-opacity-10"></div>
      </Layout>
    </>
  );
}
