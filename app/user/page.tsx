import HomeClientPage from "./UserClientPage";

type PageProps = {
  searchParams: Promise<{
    status?: string;
  }>;
};

export default async function Page({ searchParams }: PageProps) {

  const params = await searchParams;

  return <HomeClientPage status={params.status} />;
}
