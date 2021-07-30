export function clearScreen() {
    const root = document.getElementById("root");
    root.style.position = "initial";
    root.style.color = "black"
    root.style.backgroundColor = "white";

    const rootLinks = document.getElementsByClassName("link")
    for (let el of rootLinks) {
        el.style.textDecoration = "underline";
        el.style.color = "#0645AD";
    }
}