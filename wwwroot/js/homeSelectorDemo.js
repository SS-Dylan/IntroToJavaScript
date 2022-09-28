"using strict";

let p1 = document.querySelector("p");
console.log(p1);

let p2 = document.querySelector("#main,#basic,#exclamation"); // comma acts an an OR
console.log(p2);

let p3 = document.querySelector("p#basic");
console.log(p3);

let button = document.querySelector("#btnClickMe");
button.addEventListener("click", (e) => {
    console.log(`Before: ${p3.textContent}`);
    p3.textContent = p3.textContent + " CHANGED!";
    console.log(`After: ${p3.textContent}`);
});

demoQuerySelectorAll();

function demoQuerySelectorAll() {
    let paragraphs = document.querySelectorAll("p");

    console.log("querySelectorAll('p')");
    console.log("indexed for ********************");
    for(let i = 0; i < paragraphs.length; i++) {
        let p = paragraphs[i];
        console.log(p);
    }
    console.log("indexed for of *****************");
    for(let p of paragraphs) {
        console.log(p);
    }
    console.log("indexed for each ***************");
    paragraphs.forEach((p) => {
        console.log(p);
    });
}

demoInnerHTML();
function demoInnerHTML() {
    let mainDiv = document.querySelector("div.text-center");
    mainDiv.demoInnerHTML += "<p>Added paragraph</p>";
}

demoCreateElement();
function demoCreateElement() {
    let mainDiv = document.querySelector("div.text-center");
    const newP = document.createElement("p");
    newP.appendChild(document.createTextNode("This is new text"));
    mainDiv.appendChild(newP);
}

demoDOMParser();
function demoDOMParser() {
    let mainDiv = document.querySelector("div.text-center");
    const domParser = new DOMParser();
    const doc = domParser.parseFromString(
        "<p>Paragraph from DOM parser</p>", "text/html"
    );
    const newP = doc.querySelector("p");
    mainDiv.appendChild(newP);
}
