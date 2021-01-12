import Layout from "../components/layout";
import NewsLetter from "../components/newsletter";

export default function UXMatters() {
  return (
    <Layout>
      <section className="px-10 pt-20 pb-10">
        <div className="wrapper text-center">
          <h1 className="mb-4">User experience case studies</h1>
          <p className="opacity-70">
            Highlighting the User Experience issues and improvement of some
            popular products.
          </p>
        </div>
      </section>
      <section className="pb-20 px-10">
        <div className="wrapper">
          <div className="aspect-w-4 aspect-h-3 relative">
            <iframe
              width="100%"
              height="100%"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FN8pqiUfxXDbdTMW2U6EE68%2FUX-Case-Studies%3Fnode-id%3D1%253A3%26viewport%3D447%252C409%252C0.019763799384236336%26scaling%3Dmin-zoom"
              allowfullscreen
              className=""
            />
          </div>
        </div>
      </section>

      <section className="pb-10 px-10">
        <div className="wrapper grid grid-cols-1 md:grid-cols-2 gap-20 border-t border-solid border-white border-opacity-10 pt-10">
          <div>
            <p className="font-black">Join my email list</p>
            <p className="opacity-70 break-words mt-3 mb-6 text-lg">
              Get UX Tips & occasional{" "}
              <span className="block">note-worthy things.</span>
            </p>
            <NewsLetter />
          </div>

          <div>
            <p className="font-black">Get your own UX audit </p>
            <p className="opacity-70 break-words mt-3 mb-6 text-lg">
              A private case study, to demystify user experience of your
              product.
            </p>

            <a
              href="mailto:hello@meet-abhi.com"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-white text-black  rounded-md font-semibold cursor-pointer focus:outline-none focus:ring focus:ring-accent focus:ring-opacity-50 hover:shadow-inner transition duration-300"
            >
              Drop me an Email
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
