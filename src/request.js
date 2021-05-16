import axios from 'axios'

const holoDev = axios.create({
  baseURL: 'https://holo.dev/api/v1/'
})

const getCurrent = async _ => {
  const res = await holoDev.get('lives/current')
  return res.data.lives
}


const getScheduled = async _ => {
  const res = await holoDev.get('lives/scheduled')
  return res.data.lives
}

const getEnded = async _ => {
  const res = await holoDev.get('lives/ended')
  return res.data.lives
}

const getMembers = async _ => {
  const res = await holoDev.get('members')
  return res.data
}

const getChannels = async _ => {
  const res1 = await holoDev.get('channels?limit=100&page=1')
  const res2 = await holoDev.get('channels?limit=100&page=2')
  return [...res1.data.channels, ...res2.data.channels]
}

export { getCurrent, getScheduled, getEnded, getMembers, getChannels }
