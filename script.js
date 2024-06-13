console.log("This is JavaSript!");

let main = document.querySelector("main");
let cursor = document.querySelector(".cursor");
let imageDiv = document.querySelector(".image");

main.addEventListener("mousemove", (dets) => {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 0.8,
  });
});

imageDiv.addEventListener("mouseenter", () => {
    cursor.innerHTML = "Click"
    gsap.to(cursor, {
      scale: 4,
      backgroundColor: "#ffffff78",
    });
});

imageDiv.addEventListener("mouseleave", () => {
    cursor.innerHTML = "";
    gsap.to(cursor, {
      scale: 1,
      backgroundColor: "#fff",
    });
});
