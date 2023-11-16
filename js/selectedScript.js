export function backToTop({ imgSource, name }) {
  const backToTop = document.querySelector("button#backToTop");
  let img = document.createElement("img");
  img.src = imgSource;
  let imgContainer = document.createElement("div");
  imgContainer.appendChild(img);
  let h3Name = document.createElement("h3");
  h3Name.innerText = name;
  backToTop.append(imgContainer, h3Name);
  backToTop.onclick = () => {
    window.scrollTo({ top: 0 });
  };
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 60) {
      backToTop.classList.add("active");
    } else {
      backToTop.classList.remove("active");
    }
  });
}
