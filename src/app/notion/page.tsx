import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_API_TOKEN,
});

export async function getServerSideProps() {
  // Fetch pages from the Notion API
  const response = await notion.databases.query({
    database_id:
      "8ba35958008f4c35a6b133201411cee2?v=bd4d080ccbff4768a9b310343ad06101",
  });

  const pages = response.results;

  // Pass the fetched pages as props to the page component
  return {
    props: {
      pages,
    },
  };
}

export default function Page({
  pages,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log("pages"), pages;
  return <>edfsd</>;
}
