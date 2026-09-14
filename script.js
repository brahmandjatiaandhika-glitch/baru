// ==========================================
// Elements
// ==========================================

const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");

const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");

const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

const letterWindow = document.querySelector(".letter-window");


// ==========================================
// Question
// ==========================================

// 1 = Do you Love me?
// 2 = Will you have a dinner with me?

let currentQuestion = 1;


// ==========================================
// Click Envelope
// ==========================================

envelope.addEventListener("click", () => {

    envelope.style.display = "none";

    letter.style.display = "flex";

    setTimeout(() => {
        letterWindow.classList.add("open");
    }, 50);

});


// ==========================================
// Logic to move the NO button
// ==========================================

noBtn.addEventListener("mouseover", () => {

    const distance = 200;

    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";

    noBtn.style.transform =
        `translate(${moveX}px, ${moveY}px)`;

});


// ==========================================
// YES BUTTON
// ==========================================

yesBtn.addEventListener("click", () => {


    // ======================================
    // QUESTION 1
    // ======================================

    if (currentQuestion === 1) {

        // Pindah ke pertanyaan kedua
        currentQuestion = 2;

        // Ubah pertanyaan
        title.textContent =
            "Will you have a dinner with me?";

        // Tetap gunakan cat heart
        catImg.src = "cat_heart.gif";

        // Reset posisi tombol NO
        noBtn.style.transform =
            "translate(0px, 0px)";

    }


    // ======================================
    // QUESTION 2
    // ======================================

    else if (currentQuestion === 2) {

        // Ubah judul
        title.textContent = "Yippeeee!";

        // Ubah GIF
        catImg.src = "cat_dance.gif";

        // Tambahkan class final
        letterWindow.classList.add("final");

        // Hilangkan tombol YES dan NO
        buttons.style.display = "none";

        // Tampilkan final text
        finalText.style.display = "block";

    }

});
