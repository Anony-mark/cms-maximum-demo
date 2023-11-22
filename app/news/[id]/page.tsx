import PageNews from "./PageNews";

export default function Page({ params }: { params: { id: string } }) {
  return <div>
    <PageNews id={params.id} />
  </div>
}

