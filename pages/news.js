import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navigation from "../component/navigation";
export default function News() {
  return (
    <div>
      <Head>
        <title>News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <div>News</div>
    </div>
  );
}
