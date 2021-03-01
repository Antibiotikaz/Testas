import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navigation from "../component/navigation";
export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <div>About</div>
    </div>
  );
}
