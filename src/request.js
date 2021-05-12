import axios from 'axios'

const holoDev = axios.create({
  baseURL: 'https://holo.dev/api/v1/'
})

const getCurrent = async () => {
  const res = await holoDev.get('lives/current')
  return res.data.lives
}


const getScheduled = async () => {
  const res = await holoDev.get('lives/scheduled')
  return res.data.lives
}

const getMembers = async () => {
  const res = await holoDev.get('members')
  return res.data
}

const getChannels = async () => {
  const res1 = await holoDev.get('channels?limit=100&page=1')
  const res2 = await holoDev.get('channels?limit=100&page=2')
  return [...res1.data.channels, ...res2.data.channels]
}

export { getCurrent, getScheduled, getMembers, getChannels }
