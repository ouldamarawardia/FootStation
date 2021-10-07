var db = firebase.firestore();


// Add a new document in collection "cities"
db.collection("vetement").doc("chaussue").set({
    name: "Los Angeles",
    size: "23",
    color: "BLACK"
})
.then(() => {
    console.log("Document successfully written!");
})
.catch((error) => {
    console.error("Error writing document: ", error);
});

const arrows = document.querySelectorAll('.arrow');
const piclist = document.querySelectorAll('.pic-list');

arrows.forEach((arrow, i) => {
    const itemNum = piclist[i].querySelectorAll("img").length;
    let clickNum = 0;
    arrow.addEventListener("click", () => {
        clickNum++;
        if (itemNum - (3 + clickNum) >= 0) {
            piclist[i].style.transform = `translateX(${
            piclist[i].computedStyleMap().get("transform")[0].x.value
            -287}px)`;
        } else {
            piclist[i].style.transform = "translateX(0)";
            clickNum = 0;
        }

    })
})


