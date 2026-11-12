let animacije = false;
function Filter(){
    if(!animacije)
    {
        document.querySelectorAll(".Konc, .Pred, .Rad").forEach(card => {
            card.querySelectorAll(".AnimCard1, .AnimCard2, .AnimCard3").forEach(anim => {
                anim.classList.remove("AnimCard1", "AnimCard2", "AnimCard3");
        });
    });
    animacije = true;
    }
    let filter = document.querySelector('input[name="filter"]:checked').value;
    let filterText = document.querySelector(".filtertext");
    switch(filter) {
        case "svi":
            filterText.textContent = "Svi događaji";
            break;
        case "koncert":
            filterText.textContent = "Samo koncerti";
            break;
        case "predavanje":
            filterText.textContent = "Samo predavanja";
            break;
        case "radionica":
            filterText.textContent = "Samo radionice";
            break;
    }
    filterText.style.color="black";
    let koncerti = document.querySelectorAll(".Konc");
    let predavanja = document.querySelectorAll(".Pred");
    let radionice = document.querySelectorAll(".Rad");
    koncerti.forEach(card => {
        card.style.display = (filter == "svi" || filter == "koncert") ? "block" : "none";
    });

    predavanja.forEach(card => {
        card.style.display = (filter == "svi" || filter == "predavanje") ? "block" : "none";
    });

    radionice.forEach(card => {
        card.style.display = (filter == "svi" || filter == "radionica") ? "block" : "none";
    });
}