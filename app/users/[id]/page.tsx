import { notFound } from "next/navigation";

interface Props {
  params: { id: number };
}

const UserDetrailPage = ({ params: { id } }: Props) => {
  if (id > 10) notFound();
  return <div>UserDetrailPage - {id}</div>;
};

export default UserDetrailPage;
