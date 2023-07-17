const { Button } = require("../components/button");

export const carImg = (color: string): string => `
 <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
   width="100" height="50" viewBox="0 0 1280.000000 640.000000"
   preserveAspectRatio="xMidYMid meet">
    <g transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)"
      fill="${color}" stroke="none">
      <path d="M4235 5299 c-410 -26 -906 -96 -1140 -160 -136 -37 -293 -92 -495
      -174 -234 -95 -347 -148 -1048 -483 l-272 -131 -438 -56 c-240 -31 -454 -61
      -474 -66 -88 -23 -148 -157 -183 -409 -16 -117 -35 -427 -35 -595 l-1 -110
      -32 -20 c-39 -25 -71 -80 -91 -159 -14 -57 -13 -77 9 -296 l24 -235 -30 -43
      -31 -42 22 -45 c27 -57 125 -148 239 -223 l90 -59 238 -32 c131 -18 443 -62
      693 -98 250 -36 506 -69 569 -72 l115 -6 12 -50 c7 -27 36 -96 64 -151 197
      -392 691 -578 1190 -448 270 70 495 240 598 454 l47 97 186 -5 185 -5 33 42
      33 42 337 -6 c185 -3 838 -10 1451 -15 613 -6 1543 -15 2065 -20 934 -10 952
      -10 1065 10 63 11 124 22 135 25 17 3 29 -10 65 -73 53 -90 185 -229 279 -292
      270 -181 643 -244 952 -159 235 64 435 219 545 421 l39 72 135 33 c95 23 254
      47 540 82 l405 49 216 88 216 87 6 211 c3 126 12 249 22 306 28 157 7 286 -52
      313 -15 7 -27 24 -33 51 -45 176 -182 437 -288 548 -144 151 -827 325 -1798
      457 -321 44 -655 82 -929 106 l-179 15 -176 104 c-313 186 -695 393 -1067 579
      -334 167 -765 368 -843 392 -265 83 -655 134 -1175 155 -288 11 -1831 11
      -2010 -1z m1300 -191 c3 -13 41 -228 86 -478 51 -288 78 -467 74 -487 -7 -39
      -44 -70 -93 -79 -20 -4 -257 1 -526 10 -601 20 -1090 38 -1093 40 -5 4 -104
      888 -100 893 18 17 322 64 572 88 236 22 462 32 792 34 l283 1 5 -22z m942
      -13 c353 -30 557 -72 834 -170 222 -79 502 -225 714 -373 87 -61 242 -179 249
      -190 2 -4 -24 -7 -58 -8 -202 -2 -305 -242 -157 -367 l33 -27 -32 0 c-30 0
      -182 6 -1205 50 -274 12 -475 24 -498 31 -44 15 -112 70 -131 108 -12 23 -228
      629 -317 890 l-29 84 213 -7 c116 -4 289 -14 384 -21z m-2673 -142 c3 -21 26
      -209 51 -418 25 -209 46 -389 48 -400 2 -18 -3 -20 -68 -17 -38 1 -216 7 -395
      12 -179 6 -348 15 -377 21 -93 18 -163 86 -203 196 -55 153 17 248 305 404
      162 88 381 175 575 228 55 15 58 13 64 -26z m-3343 -833 c114 -78 161 -144
      194 -270 20 -78 30 -273 21 -401 l-8 -97 -219 -7 c-121 -4 -222 -5 -224 -3 -3
      2 0 95 5 207 15 324 50 492 117 570 19 23 39 41 44 41 6 0 37 -18 70 -40z
      m3349 -375 c18 -21 16 -64 -4 -83 -15 -15 -46 -17 -251 -17 -256 0 -267 2
      -267 59 0 55 4 56 267 56 204 0 245 -2 255 -15z m2894 -71 c20 -19 20 -54 2
      -80 -13 -18 -30 -19 -233 -22 -134 -2 -229 1 -246 7 -40 15 -54 53 -33 86 l16
      25 240 0 c204 0 241 -2 254 -16z m5607 -340 c32 -31 76 -80 98 -108 41 -53
      131 -204 131 -220 0 -9 -876 -3 -886 6 -7 8 132 292 152 309 39 33 69 41 212
      54 244 21 225 23 293 -41z m-1734 -507 c115 -39 201 -93 285 -177 61 -63 86
      -97 122 -172 61 -125 79 -213 73 -348 -6 -118 -28 -197 -84 -300 -156 -288
      -504 -426 -818 -326 -109 35 -196 88 -279 172 -83 82 -136 168 -173 279 -23
      70 -27 96 -27 210 0 114 4 140 27 210 78 237 273 415 512 469 102 23 268 15
      362 -17z m-7473 -77 c232 -59 416 -233 493 -465 23 -69 27 -98 27 -205 1 -104
      -3 -137 -22 -200 -72 -231 -248 -403 -487 -476 -92 -28 -276 -25 -375 5 -300
      92 -501 361 -500 673 0 107 24 201 76 308 142 286 478 440 788 360z"/>
    </g>
  </svg>
`;

export function renderCar(id: number, name: string, color: string) {
  const mainGarage = <HTMLElement>document.querySelector(".main-garage");
  const carContainer = document.createElement("div");
  carContainer.classList.add("car-container");
  carContainer.id = `c-${id}`;
  mainGarage.appendChild(carContainer);

  new Button("button", "select", carContainer, "SELECT").createButton();
  new Button("button", "remove", carContainer, "REMOVE").createButton();

  const carName = document.createElement("span");
  carName.classList.add("car-name");
  carName.classList.add(`name-${id}`);
  carContainer.appendChild(carName);
  carName.innerHTML = name;

  const car = document.createElement("div");
  car.classList.add("car");
  car.id = `car-${id}`;
  carContainer.appendChild(car);

  const carStart = document.createElement("button");
  carStart.classList.add("car-start");
  car.appendChild(carStart);
  carStart.innerHTML = "A";

  const carStop = document.createElement("button");
  carStop.classList.add("car-stop");
  car.appendChild(carStop);
  carStop.innerHTML = "B";
  carStop.classList.add("grey");

  const carImage = document.createElement("div");
  carImage.classList.add("car-img");
  carImage.classList.add(`img-${id}`);
  carImage.innerHTML = carImg(color);
  car.appendChild(carImage);

  const flag = document.createElement("span");
  flag.classList.add("flag");
  flag.innerHTML = "🚩";
  car.appendChild(flag);
}
