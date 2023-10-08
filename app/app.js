const menuToggle = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");

menuToggle.addEventListener("click", () => {
    navList.classList.toggle("active");
    if (navList.style.display === "none" || navList.style.display === "") {
        navList.style.display = "block";
    } else {
        navList.style.display = "none";
    }
});