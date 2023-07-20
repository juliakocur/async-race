const { renderCar } = require("./view/svgCar");

const baseUrl = "http://localhost:3000";
const path = {
  garage: "/garage",
  winners: "/winners",
};

const garage = `${baseUrl}/garage`;
const winners = `${baseUrl}/winners`;
const engine = `${baseUrl}/engine`;

/* type QueryParams = {
  key?: string;
  value?: number | string;
};

/*
[
  { key: "_page", value: 0 },
  { key: "_limit", value: 1 },
];
export const generateQueryString = (queryParams: QueryParams[]) =>
  queryParams.length
    ? `?${queryParams.map((el) => `${el.key}=${el.value}`).join("&")}`
    : ""; */

export const getCars = async () => {
  const response = await fetch(`${baseUrl}${path.garage}`);
  const data = await response.json();
};

type CarForApi = {
  name: string;
  color: string;
  id?: number;
};

export const createCarApi = async (car: CarForApi) => {
  const response = await fetch(`${garage}`, {
    method: "POST",
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
    method: "PUT",
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
    method: "DELETE",
  });
  const carElement = await response.json();
  return carElement;
};

/*
export const engineStart = async (id: number) => {
  const response = await fetch(`${engine}?id=${id}&status=started`, {
    method: "PATCH",
  });
  const engineState = await response.json();
  return engineState;
};
*/
export interface EngineStart {
  velocity: number;
  distance: number;
}

export const engineStart = async (id: number): Promise<EngineStart> => {
  const response = await fetch(`${engine}?id=${id}&status=started`, {
    method: "PATCH",
  });
  const engineState = await response.json();
  return engineState;
};

export const engineStop = async (id: number) => {
  const response = await fetch(`${engine}?id=${id}&status=stopped`, {
    method: "PATCH",
  });
  const engineState = await response.json();
  return engineState;
};

export const driveMode = async (id: number): Promise<boolean> => {
  const res = await fetch(`${engine}?id=${id}&status=drive`, {
    method: "PATCH",
  }).catch();
  if (res.status !== 200) {
    throw new Error("Engine error!");
  }
  return true;
};
