import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNbaPlayers, fetchNbaTeams } from '../redux/actions'

const useAxios = () => {
  const dispatch = useDispatch()
  const { nbaPlayers, nbaTeams } = useSelector((state) => state)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchFromApi = async () => {
    try {
      setIsLoading(true)
      dispatch(fetchNbaTeams())
      dispatch(fetchNbaPlayers())
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (nbaTeams.ids.length === 0) fetchFromApi()
  }, [])

  return { error, isLoading, nbaPlayers, nbaTeams }
}

export default useAxios
