import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navigation from "../component/navigation";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Testas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <div>Home</div>
    </div>
  );
}
