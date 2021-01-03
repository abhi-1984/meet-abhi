import Meta from "../components/meta";
import Footer from "./footer";
import Nav from "./nav";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />

      <div className="bg-black text-white min-h-screen">
        <Nav />
        <main className="pt-16">{children}</main>
        <Footer />
      </div>
    </>
  );
}
