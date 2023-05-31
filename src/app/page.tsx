import Link from "next/link";
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_API_TOKEN,
});

async function getTime(): Promise<any> {
  const res = await fetch(
    "http://worldtimeapi.org/api/timezone/Asia/Ulaanbaatar",
    {
      next: {
        revalidate: 5,
      },
    }
  );

  return res.json();
}

async function getRepo(): Promise<any> {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");

  return res.json();
}

export default async function Home() {
  const [data, time] = await Promise.all([getRepo(), getTime()]);

  console.log("data", data, "time", time);
  return (
    <div className="flex flex-col">
      <h1>{data.full_name}</h1>
      <h2>{time.datetime}</h2>

      <Link href="/about">ABOUT</Link>
      <Link href="/blog/123">blog 123</Link>
    </div>
  );
}
