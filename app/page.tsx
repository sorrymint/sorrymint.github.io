import Link from 'next/link';
import HomeContent from "@/markdown/home.mdx"

export default function Home() {
  return (
    <div>
     <h1>HI</h1>
        <nav>
            <ul>
                <Link href="/blog">
                   Blog
                </Link>
            </ul>
        </nav>
        <HomeContent/>
    </div>
  );
}
