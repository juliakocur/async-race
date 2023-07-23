const { renderCar } = require("./view/svgCar");
const { showWinners } = require("./view/winners");

enum Endpoint {
  garage = "garage",
  engine = "engine",
  winners = "winners",
}

enum Method {
  get = "GET",
  post = "POST",
  patch = "PATCH",
  delete = "DELETE",
  put = "PUT",
}

const baseUrl = "http://localhost:3000";
const path = {
  garage: "/garage",
  winners: "/winners",
};

const garage = `${baseUrl}/${Endpoint.garage}`;
const engine = `${baseUrl}/${Endpoint.engine}`;

type CarForApi = {
  name: string;
  color: string;
  id?: number;
};

export const getCars = async () => {
  const response = await fetch(`${baseUrl}${path.garage}`);
  const data = await response.json();
};

export const createCarApi = async (car: CarForApi) => {
  const response = await fetch(`${garage}`, {
    method: `${Method.post}`,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(car),
  });
  const carElement = await response.json();
  return carElement;
};

export const getCar = async (id: number) => {
  const response = await fetch(`${garage}/${id}`);
  const car = await response.json();
  return car;
};

export const updateCarApi = async (id: number, car: CarForApi) => {
  const response = await fetch(`${garage}/${id}`, {
    method: `${Method.put}`,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(car),
  });
  const carElement = await response.json();
  return carElement;
};

export const deleteCarApi = async (id: number) => {
  const response = await fetch(`${garage}/${id}`, {
    method: `${Method.delete}`,
  });
  const carElement = await response.json();
  return carElement;
};

export interface EngineStartStop {
  velocity: number;
  distance: number;
}

export const engineStart = async (id: number): Promise<EngineStartStop> => {
  const response = await fetch(`${engine}?id=${id}&status=started`, {
    method: `${Method.patch}`,
  });
  const engineState = await response.json();
  return engineState;
};

export const engineStop = async (id: number): Promise<EngineStartStop> => {
  const response = await fetch(`${engine}?id=${id}&status=stopped`, {
    method: `${Method.patch}`,
  });
  const engineState = await response.json();
  return engineState;
};

export const driveMode = async (id: number): Promise<boolean> => {
  const res = await fetch(`${engine}?id=${id}&status=drive`, {
    method: `${Method.patch}`,
  }).catch();
  if (res.status !== 200) {
    throw new Error("Engine error!");
  }
  return true;
};

export const getWinners = async () => {
  const winners = `${baseUrl}/winners`;
  const h1Win = <HTMLElement>document.querySelector(".winners-count");
  const response = await fetch(`${winners}`);
  const data = await response.json();
  h1Win.innerHTML = `Winners (${data.length})`;
  data.forEach((item: string, index: number) => {
    showWinners(
      data[index].id,
      "Tesla",
      "#e6e6fa",
      data[index].wins,
      data[index].time,
    );
  });
};
