const x = document.querySelector("#x-icon");
const sideBar = document.querySelector("#side-bar");
const notSideBar = document.querySelector(".not-sidebar");
const SideBarIcon = document.querySelector("#sidebar-icon")


function openSideBar() {  
    
    SideBarIcon.style.display = "none";
    notSideBar.style.display = "none";
    
    x.style.display = "flex";
    sideBar.style.display = "flex";

    const header = document.querySelector("#p1-header");
    header.style.flexWrap = "wrap"

}

function closeSideBar() {

    x.style.display = "none";
    sideBar.style.display = "none";

    SideBarIcon.style.display = "flex";
    notSideBar.style.display = "flex";   
    
}
const cards = document.querySelectorAll(".cards");

cards.forEach(card => {
    card.addEventListener("mouseenter", function() {
        const img = card.querySelector("img");
        const topics = card.querySelector(".topics");

        img.style.filter = "blur(40px)";
        topics.style.display = "flex";
    });

    card.addEventListener("mouseleave", function() {
        const img = card.querySelector("img");
        const topics = card.querySelector(".topics");

        img.style.filter = "blur(0px)";
        topics.style.display = "none";
    });
});
