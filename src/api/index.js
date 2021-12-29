import { axiosClient } from '../utils/axiosClient'

export const getPlayers = async () =>
  await axiosClient.get('players', {
    params: {
      per_page: 100
    }
  })

export const getTeams = async () => await axiosClient.get('teams')