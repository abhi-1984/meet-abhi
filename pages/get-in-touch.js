import Layout from "../components/layout";
import Head from "next/head";
import ProjectRequest from "../components/projectRequest";
import { LinkedInIcon, MailIcon, TwitterIcon } from "../components/icons";

export default function GetInTouch() {
  return (
    <Layout>
      <Head>
        <title>Get in touch with Abhi</title>
      </Head>

      <section className="px-10 pt-20 pb-10">
        <div className="wrapper grid sm:grid-flow-row md:grid-flow-col auto-cols-fr gap-10">
          <div>
            <span className="text-sm uppercase opacity-60 font-semibold">
              Don’t be shy
            </span>
            <h3 className="mt-4">
              Let's talk, share our vision and create something awesome
              together.
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="flex items-center p-4 bg-jetBlack rounded-md cursor-pointer group hover:bg-white hover:bg-opacity-10 transition duration-300">
              <div className="w-6 h-6 flex items-center justify-center mr-2">
                <MailIcon />
              </div>
              <div className="text-lg font-light flex-1">
                hello@meet-abhi.com
              </div>

              <div className="hidden md:flex px-2 py-1 bg-white rounded font-semibold text-black opacity-0 group-hover:opacity-100 transition duration-300">
                Copy
              </div>
            </div>
            <a
              href="https://www.twitter.com/_abhiii"
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={0}
              className="flex items-center p-4 bg-jetBlack rounded-md hover:bg-white hover:bg-opacity-10 transition duration-300"
            >
              <div className="w-6 h-6 flex items-center justify-center mr-2">
                <TwitterIcon />
              </div>
              <div className="text-lg font-light">Send me a DM</div>
            </a>
            <a
              href="https://www.linkedin.com/in/origine/"
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={0}
              className="flex items-center p-4 bg-jetBlack rounded-md hover:bg-white hover:bg-opacity-10 transition duration-300"
            >
              <div className="w-6 h-6 flex items-center justify-center mr-2">
                <LinkedInIcon />
              </div>
              <div className="text-lg font-light">Connect on LinkedIn</div>
            </a>
          </div>
        </div>
      </section>

      <ProjectRequest />
    </Layout>
  );
}
