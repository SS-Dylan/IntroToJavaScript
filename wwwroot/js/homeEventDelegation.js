"using strict";

setupNoEventDelegation();

function setupNoEventDelegation() {
    const clickables = document.querySelectorAll(".clickable");
    clickables.forEach((clickable) => {
        clickable.addEventListener("click", (e) => {
            console.log(`No event delegation: Clicked ${e.target.textContent}`);
        });
    });
}

createClickMeToo();

function createClickMeToo() {
    let div = document.querySelector("mainDiv");
    const newButton = document.createElement("button");
    newButton.setAttribute("class", "clickable");
    newButton.appendChild(document.createTextNode("Click me too!"));
    div.appendChild(newButton);
}

setupEventDelegation();

function setupEventDelegation() {
    document.addEventListener("click", (e) => {
        if (e.target && e.target.getAttribute("class").includes("clickable")) {
            console.log(`Event delegation: Clicked ${e.target.textContent}`);
        }
    });
}
