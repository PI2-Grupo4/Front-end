import axios from "axios"

export const baseURL = axios.create({
  baseURL: `link/api`
})

export async function getInfo() {
  try {
    const response = await baseURL.get(`/equipmentInfo`)
    return response
  } catch (error) {
    return error
  }
}

// 0 esquerda
// 1 direita
export async function goLeft() {
  try {
    const response = await baseURL.post(`/changeDirection`, 0)
    return response
  } catch (error) {
    return error
  }
}

export async function goRight() {
  try {
    const response = await baseURL.post(`/changeDirection`, 1)
    return response
  } catch (error) {
    return error
  }
}

//1 = low
//2 = medium
//3 = high
export async function lowSpeed() {
  try {
    const response = await baseURL.post(`/changeSpeed`, 1)
    return response
  } catch (error) {
    return error
  }
}

export async function mediumSpeed() {
  try {
    const response = await baseURL.post(`/changeSpeed`, 2)
    return response
  } catch (error) {
    return error
  }
}
export async function highSpeed() {
  try {
    const response = await baseURL.post(`/changeSpeed`, 3)
    return response
  } catch (error) {
    return error
  }
}


export async function turnOn() {
  try {
    const response = await baseURL.post(`/power`, true)
    return response
  } catch (error) {
    return error
  }
}

export async function turnOff() {
  try {
    const response = await baseURL.post(`/power`, false)
    return response
  } catch (error) {
    return error
  }
}

