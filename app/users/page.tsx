import Link from "next/link";
import { Suspense } from "react";
import UserTable from "../components/UserTable";

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  console.log(sortOrder);
  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className={`btn`}>
        NEW USER
      </Link>
      <Suspense fallback={<p>Carregando...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default UsersPage;
