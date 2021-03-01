import Link from "next/link";

export default function Nav() {
  return (
    <div className="nav">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/service">Service</Link>
      <Link href="/news">News</Link>
    </div>
  );
}
