import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./test.module.scss";
import { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:9000/api2/list");
  const data: {
    id: string;
    name: string;
  }[] = await res.json();

  return {
    props: {
      data,
    },
  };
};

function List({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  return (
    <div className={styles.test}>
      {data.map((item) => (
        <Link href={`/test/details/${item.id}`} key={item.id}>
          {item.name}
        </Link>
      ))}
    </div>
  );
}

export default List;
