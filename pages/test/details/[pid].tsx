import { useRouter } from "next/router";
import { InferGetStaticPropsType, GetStaticPaths, GetStaticProps } from "next";
import { ifsData } from "../../api/list";
import _ from "lodash";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("http://localhost:9000/api2/list");
  const data: ifsData[] = await res.json();

  return {
    paths: data.map((item) => {
      return {
        params: { pid: item.id },
      };
    }),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<
  { data: string },
  {
    pid: string;
  }
> = async ({ params }) => {
  return {
    props: {
      data: `详情${params?.pid}`,
    },
  };
};

function TestDetails({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  console.log(_.get(router, "pathname"));
  return <div onClick={() => router.push("/test")}>{data}</div>;
}

export default TestDetails;
