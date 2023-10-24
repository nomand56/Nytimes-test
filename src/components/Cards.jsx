import { useQuery } from "@tanstack/react-query";
import Article from "./Article";
import Loader from "./Loader";

const apiKey = import.meta.env.VITE_NYLATEST_KEY;

async function load() {
  const response = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
  }

  return await response.json();
}

const Cards = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["data"],
    queryFn: load,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen font-mono text-red-500">
        <span>Error: {error.message}</span>
      </div>
    );
  }

  const articles = data.results
    .filter((post) => post.multimedia)
    .map((post, index) => <Article post={post} key={index} />);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-wrap -m-4">{articles}</div>
      </div>
    </section>
  );
};

export default Cards;
