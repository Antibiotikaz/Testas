import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navigation from "../component/navigation";
export default function Service() {
  return (
    <div>
      <Head>
        <title>Service</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <div>Service</div>
    </div>
  );
}
