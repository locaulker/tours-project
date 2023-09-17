import { useEffect, useState } from "react"
import Loading from "./Loading"
import Tours from "./Tours"

const url = "https://course-api.com/react-tours-project"

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = id => {
    const filteredTours = tours.filter(tour => tour.id !== id)
    setTours(filteredTours)
  }

  const fetchedTours = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setTours(tours)
    } catch (error) {
      console.error(error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchedTours()
  }, [])

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  // TODO

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}
export default App
