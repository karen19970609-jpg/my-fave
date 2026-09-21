document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     Loading animation
     ========================= */

  const loadingScreen = document.getElementById("loading-screen");
  const loadingNumber = document.getElementById("loading-number");

  if (loadingScreen && loadingNumber) {
    let count = 0;

    const loadingTimer = setInterval(() => {
      count += 2;

      if (count >= 100) {
        count = 100;
        loadingNumber.textContent = count;

        clearInterval(loadingTimer);

        setTimeout(() => {
          loadingScreen.classList.add("hide");
        }, 250);
      } else {
        loadingNumber.textContent = count;
      }
    }, 20);
  }


  /* =========================
     Hamburger menu
     ========================= */

  const menuButton = document.getElementById("menu-button");
  const menuPanel = document.getElementById("menu-panel");
  const menuOverlay = document.getElementById("menu-overlay");

  function openMenu() {
    if (!menuButton || !menuPanel || !menuOverlay) return;

    menuButton.classList.add("open");
    menuPanel.classList.add("open");
    menuOverlay.classList.add("open");
  }

  function closeMenu() {
    if (!menuButton || !menuPanel || !menuOverlay) return;

    menuButton.classList.remove("open");
    menuPanel.classList.remove("open");
    menuOverlay.classList.remove("open");
  }

  if (menuButton) {
    menuButton.addEventListener("click", () => {
      if (menuPanel.classList.contains("open")) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  if (menuOverlay) {
    menuOverlay.addEventListener("click", closeMenu);
  }

  if (menuPanel) {
    const menuLinks = menuPanel.querySelectorAll("a");

    menuLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  }


  /* =========================
     Random comment
     ========================= */

  const comments = [
    "ハロプロって最高",
    "生きてくれてありがとう",
    "○○してくれた人に金一封差し上げたい",
    "顔良すぎて画面割れるかと思った",
    "人が生きる上で、ハロー！プロジェクトがどうしても必要なんです",
    "推しが尊い",
    "アルミホイル衣装ということはハロプロが本気出してるってことですね",
    "自認ハロメンです",
    "ビジュ良すぎて私が可哀想",
    "つんく♂とかきて楽しかった"
  ];

  const randomComment = document.getElementById("random-comment");
  const randomButton = document.getElementById("random-button");

  let previousComment = "";

  function showRandomComment() {
    if (!randomComment) return;

    let newComment;

    do {
      newComment =
        comments[Math.floor(Math.random() * comments.length)];
    } while (comments.length > 1 && newComment === previousComment);

    previousComment = newComment;
    randomComment.textContent = newComment;
  }

  if (randomButton) {
    randomButton.addEventListener("click", showRandomComment);
  }

});
