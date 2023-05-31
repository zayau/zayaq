export async function generateMetadata({ params }) {
  return {
    title: params.id,
    description: "Are you nuggets?",
  };
}

export default function Page({ params, searchParams }) {
  console.log("props", searchParams);
  return <>{params.id}</>;
}
