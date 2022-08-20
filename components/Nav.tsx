import Link from "next/link";
import Burger from "./Burger";

export default function Nav() {
  return (
    <div>
      <Burger scale={2} visibility={"visible"} color={"#666"} background={"white"} />
      <Link href="/"><a>Home</a></Link>
      <Link href="/dashboard"><a>Dashboard</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/login"><a>Login</a></Link>
    </div>
  );
}
