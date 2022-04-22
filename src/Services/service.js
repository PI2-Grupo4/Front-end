import axios from "axios";

export const baseURL = axios.create({
  baseURL: `http://localhost:8080/api/`,
});

export async function getEquipments() {
  try {
    const response = await baseURL.get(`listEquipments?id=${1}`);
    console.log("Todos", response.data);

    return response.data;
  } catch (error) {
    return error;
  }
}

export async function getInfo(id) {
  try {
    const response = await baseURL.get(`equipmentInfo?id=${id}`);
    console.log("GetInfo", response.data);
    getEquipments();
    return response.data;
  } catch (error) {
    return error;
  }
}

// 0 esquerda
// 1 direita
export async function changeDirection(direction, id) {
  try {
    const response = await baseURL.put(`/changeDirection`, {
      id: id,
      direction: direction,
    });
    console.log("Direção", response.data);
    return response;
  } catch (error) {
    return error;
  }
}

export async function goRight() {
  try {
    const response = await baseURL.put(`/changeDirection`, 1);
    return response;
  } catch (error) {
    return error;
  }
}

//1 = low
//2 = medium
//3 = high
export async function changeSpeed(speed, id) {
  try {
    const response = await baseURL.put(`/changeSpeed`, {
      id: id,
      speed: speed,
    });
    console.log(response.data);
    return response;
  } catch (error) {
    return error;
  }
}

// 1 ligado
// 2 limpando
// 3 standby
export async function status(status, id) {
  try {
    const response = await baseURL.put(`/power`, {
      id: id,
      status: status,
    });
    console.log(response.data);
    return response;
  } catch (error) {
    return error;
  }
}

export async function turnOff() {
  try {
    const response = await baseURL.post(`/power`, false);
    return response;
  } catch (error) {
    return error;
  }
}
