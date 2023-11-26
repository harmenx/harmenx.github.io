import VanillaTilt from "./vanilla-tilt.min.js";

export default function initTiltAnimation() {
  const elements = document.querySelectorAll(".js-tilt");
  VanillaTilt.init(elements);
}
