"use strict";
let grid = document.querySelector(".grid");

// let body = document.querySelector("body");
let addBlock = document.querySelector(".add-block");
let play = document.querySelector(".play");

// let it = Math.floor(Math.random() * nodeList.length) + 1;

// nodeList[it].setAttribute("id", "it");

const addGreen = (e) => {
  if (e.target.classList.contains("cell")) {
    e.target.classList.add("clicked");
  }
};

const findMine = (e) => {
  if (e.target.hasAttribute("id")) {
    e.target.classList.add("clicked-it");
    e.target.textContent = "IT";
    grid.removeEventListener("click", addGreen);
    document.body.style.backgroundColor = "black";
  }
};

grid.addEventListener("click", addGreen);
grid.addEventListener("click", findMine);

// const addMoreBlocks = () => {
//   let block = document.createElement("div");
//   block.classList.add("cell");
// };

addBlock.addEventListener("click", () => {
  let block = document.createElement("div");
  block.classList.add("cell");
  grid.append(block);
});

play.addEventListener("click", () => {
  let nodeList = document.querySelectorAll(".cell");
  let it = Math.floor(Math.random() * nodeList.length);
  nodeList[it].setAttribute("id", "it");
});

const refreshPage = () => {
  window.location.reload();
};
