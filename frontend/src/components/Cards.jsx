import { useQuery } from "@tanstack/react-query"
import Card from "./Card"
import Loader from "./Loader"

async function load() {
  let response = await fetch("http://localhost:4000/api/v1/topstories")

  if (!response.ok) throw new Error("Failed to fetch data from API.")

  try {
    response = await response.json()
  } catch (error) {
    throw new Error("Received data seems to be Invalid.")
  }

  if (response.error) throw new Error(response.error)

  return response.data
}

const Cards = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["data"],
    queryFn: load
  })

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return (
      <div className="flex grow items-center justify-center font-mono text-red-500">
        <span className="text-center">Error: {error.message}</span>
      </div>
    )
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 md:py-12 mx-auto">
        <div className="flex flex-wrap -m-4">
          {data.map((post, index) => (
            <Card post={post} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cards
