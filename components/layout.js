import Meta from "../components/meta";
import Footer from "./footer";
import Nav from "./nav";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />

      <div className="bg-white dark:bg-black dark:text-white">
        <Nav />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
