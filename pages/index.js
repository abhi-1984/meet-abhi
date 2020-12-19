import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";

export default function Index({}) {
  return (
    <>
      <Layout>
        <Head>
          <title>Meet abhi</title>
        </Head>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
