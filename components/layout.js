import Meta from "../components/meta";
import Footer from "./footer";
import Nav from "./nav";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Nav />
      <div className="bg-white">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
