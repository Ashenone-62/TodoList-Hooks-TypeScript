document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + "px";

document.documentElement.addEventListener(
  "touchmove",
  function(e: TouchEvent): void {
    if (e.touches.length > 1) {
      e.preventDefault();
    }
  },
  false
);

export {}