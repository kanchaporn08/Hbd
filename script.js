window.onload = function () {
  console.log("Happy Birthday Website Loaded 🎉");
};

// ปุ่มกดแล้วมีเซอร์ไพรส์
function showSurprise() {
  alert("🎂 Happy Birthday!! ขอให้มีความสุขมากๆนะ 💖");

  // ทำเอฟเฟกต์หัวใจลอย
  for (let i = 0; i < 20; i++) {
    createHeart();
  }
}

// สร้างหัวใจลอยขึ้นมา
function createHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = "💖";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "100vh";
  heart.style.fontSize = "24px";
  heart.style.animation = "floatUp 4s linear";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}
