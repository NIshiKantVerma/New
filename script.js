const mainText = document.getElementById("mainText");
const subText = document.getElementById("subText");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let noCount = 0;

yesBtn.addEventListener("click", () => {
    window.location.href = "yes.html";
});

noBtn.addEventListener("click", () => {
    noCount++;
    if (noCount === 1) {
        mainText.innerHTML = 'Soch lo ache se! <span>🤔</span>';
        subText.textContent = 'itte jldi mtt bolo😉';
    } else if (noCount === 2) {
        mainText.innerHTML = 'Ek aur baar Soch lo! <span>😠</span>';
        subText.textContent = 'kyu aisa kr rahi ho 😟';
    } else if (noCount === 3) {
        mainText.innerHTML = 'Ye galat hai! <span>🥺</span>';
        subText.textContent = 'ek mauka or de do 🙏';
    }
    
});

noBtn.addEventListener("mouseover", () => {
    if (noCount >= 4) {
        const container = document.querySelector(".container");
        const maxLeft = container.offsetWidth - noBtn.offsetWidth;
        const maxTop = container.offsetHeight - noBtn.offsetHeight - 40;
        const x = Math.floor(Math.random() * maxLeft);
        const y = Math.floor(Math.random() * maxTop) + 60;
        noBtn.style.position = "absolute";
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    }
});
