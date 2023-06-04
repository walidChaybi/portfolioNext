const cursorHanler = () => {
  let cursor = document.querySelector(".cursor")
  let cursor2 = document.querySelector(".cursor2")
  document.addEventListener("mousemove", (e) => {
    cursor.style.cssText =
      cursor2.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px;
      `
  })
}

export default cursorHanler
