let logos = [
  {
    id: 1,
    img: "./img/apple.png",
  },
  {
    id: 2,
    img: "./img/brainster.png",
  },
  {
    id: 3,
    img: "./img/github.png",
  },
  {
    id: 4,
    img: "./img/google.png",
  },
  {
    id: 5,
    img: "./img/lyft.png",
  },
  {
    id: 6,
    img: "./img/paypal.png",
  },
  {
    id: 7,
    img: "./img/ripple.png",
  },
  {
    id: 8,
    img: "./img/spotify.png",
  },
  {
    id: 9,
    img: "./img/tesla.png",
  },
  {
    id: 10,
    img: "./img/uber.png",
  },
  {
    id: 11,
    img: "./img/youtube.png",
  },
];

// structure for the logo-item
// <div class="col-3 mb-3 logo-item">
//     <img src=""/>
// </div>
const imgWraper = document.querySelector(".logos-wrapper");

logos?.forEach((e) => {
  const logo = `<div class="col-3 mb-3 logo-item">
       <img src="${e.img}"/> </div>`;
  imgWraper?.insertAdjacentHTML("afterbegin", logo);
});

const shuffle = (array) => {
  const arrlenght = array.length;
  for (let i = arrlenght - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const shuffledLogos = shuffle(logos);
console.table(shuffledLogos);

const showShuffeld = (array) => {
  imgWraper.innerHTML = "";
  array?.forEach((e) => {
    const logo = `<div class="col-3 mb-3 logo-item">
         <img src="${e.img}"/> </div>`;
    imgWraper?.insertAdjacentHTML("afterbegin", logo);
  });
};

showShuffeld(shuffledLogos);

const splitlogos = function (arr) {
  const logoCount = 4;
  let logosSplit = [];
  for (let i = 0; i < arr.length; i += logoCount) {
    const chunkLogos = [arr.slice(i, i + logoCount)];
    logosSplit.push(chunkLogos);
  }
  return logosSplit;
};

const splitedLogos = splitlogos(shuffledLogos);

console.table(splitedLogos);
