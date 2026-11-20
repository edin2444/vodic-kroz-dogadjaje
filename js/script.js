let animacije = false;
let nizObjekata = [];
let omiljeni = JSON.parse(localStorage.getItem("omiljeni")) || [];
let prikazFav=false;
nizObjekata[0] = {ID:1, Naziv:"Koncert Vlado Georgijev", Datum:"6.12.2026", Mesto:"Beogradska Arena, Bulevar Arsenija Čarnojevića 58, Beograd",
    Kategorija: "Koncert", Opis: "Koncert koji zasigurno ne želite da propustite! Gospodski u Areni sa pogledom na binu od 360° pruža nezaboravno iskustvo slušanja najvećih hitova Vlade Georgijeva!",
    Putanja:"img/Vlado_Arena.jpeg"
};
nizObjekata[1] = {ID:2, Naziv:"Sofiologija u ruskoj religijskoj misli", Datum:"18.11.2026", Mesto:"Dom Omladine, Makedonska 22, Beograd",
    Kategorija: "Predavanje", Opis: "Predavanje vodi prof. dr Davor Džalto sa Univerzitetskog koledža u Stokholmu, u okviru ciklusa „Na krilima (pre)mudrosti – Sofije“.",
    Putanja:"img/Sofiologija.jpeg"
};
nizObjekata[2] = {ID:3, Naziv:"IT Connect X SemRush Meetup", Datum:"19.11.2026", Mesto:"Haos Community Space, Kraljice Natalije 11, Beograd",
    Kategorija: "Radionica", Opis: "Program pokriva praktične teme iz oblasti AI agenata, kreiranja sadržaja, razvoja karijere i izgradnje zajednice u IT industriji.Predavanje je na engleskom jeziku.",
    Putanja:"img/Meetup(edited).jpeg"
};
nizObjekata[3] = {ID:4, Naziv:"Hleb sa srpskim srednjovekovnim freskama", Datum:"20.11.2026", Mesto:"Dom Jevrema Grujića, Svetogorska 17, Beograd",
    Kategorija: "Predavanje", Opis: "Program istražuje simboliku, oblike i svakodnevnu ulogu hleba u srednjovekovnoj Srbiji kroz prikaze na freskama (poput kompozicije Tajne večere).",
    Putanja:"img/Hleb(edited).png"
};
nizObjekata[4] = {ID:5, Naziv:"Koncert Magla Bend", Datum:"10.12.2026", Mesto:"Sava Centar, Milentija Popovića 9, Beograd",
    Kategorija: "Koncert", Opis: "Poslednji koncert koji Magla Bend održava ove godine. Najveći hitovi, nove pesme i poznati gosti, pretvaraju koncert u veče za pamćenje!",
    Putanja:"img/magla(edited).jpeg"
};
nizObjekata[5] = {ID:6, Naziv:"Radionica Slikanja:Toskana", Datum:"14.11.2026", Mesto:"Braće Ribnikar 29, Beograd",
    Kategorija: "Radionica", Opis: "Radionica slikanja namenjena odraslima i početnicima bez prethodnog slikarskog iskustva. Uključeno neograničeno piće, stručno vođenje radionice i sav neophodan materijal.",
    Putanja:"img/Toskana(edited).png"
};
function PrikaziDogađaje(){
    let html="";
    document.getElementById("nema").textContent="Broj prikazanih događaja: "+nizObjekata.length;
    document.getElementById("nema").style.display="block";
    for(let i=0; i< nizObjekata.length; i++)
    {
        let dogadjaj=nizObjekata[i];
        let tekstDugmeta=omiljeni.includes(String(dogadjaj.ID)) ? "Ukloni iz omiljenih" : "Dodaj u omiljene"
        let kategorijaKlasa="";
        if(dogadjaj.Kategorija=="Koncert")
            kategorijaKlasa="Konc";
        else if(dogadjaj.Kategorija=="Predavanje")
            kategorijaKlasa="Pred";
        else if(dogadjaj.Kategorija=="Radionica")
            kategorijaKlasa="Rad";
        html+="<div class='col-sm-12 col-lg-4 "+kategorijaKlasa+"' id="+dogadjaj.ID+"><div class='container AnimCard2' style='text-align: center;'> <div class='card' style='width: 18em; margin: auto;'><img src='"+dogadjaj.Putanja+"' alt='"+dogadjaj.naziv+"(slika)'> <div class='card-body'><div class='card-title'>Događaj " + dogadjaj.ID + "</div> <h5 class='card-title'>" + dogadjaj.Naziv + "</h5> <p class='card-text'>Datum: " + dogadjaj.Datum + "</p> <p class='card-text'>Lokacija: " + dogadjaj.Mesto + "</p> <p class='card-text'>Kategorija: " + dogadjaj.Kategorija + "</p> <p class='card-text'>Opis: " + dogadjaj.Opis + "</p><button class='btn btn-primary' onclick='AddFavorites(this)'>"+tekstDugmeta+"</button></div></div></div></div>";
    }
    document.getElementById("događaji").innerHTML += html;
    
}
function UkloniAnimacije()
{
    if(!animacije)
    {
        document.querySelectorAll(".Konc, .Pred, .Rad").forEach(card => {
            card.querySelectorAll(".AnimCard2").forEach(anim => {
                anim.classList.remove("AnimCard2");
        });
    });
    animacije = true;
    }
}
function Filter(){
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
    FilterTeksta();
}
function FilterTeksta() {
    UkloniAnimacije();
    let filter = document.querySelector('input[name="filter"]:checked').value;
    let tekst=document.getElementById("tekst").value.toLowerCase().trim();
    let dogadjaji = document.querySelectorAll("#događaji > div");
    let br=0;
    dogadjaji.forEach(card =>{
        let kategorija="";
        if(card.classList.contains("Konc"))
            kategorija="koncert";
        else if(card.classList.contains("Pred"))
            kategorija="predavanje";
        else if(card.classList.contains("Rad"))
            kategorija="radionica";
        let naziv=card.querySelector("h5").textContent.toLowerCase();
        let odgovaraKat = (filter == "svi" || filter == kategorija);
        let odgovaraText = naziv.includes(tekst);
        let odgovaraFav = !prikazFav || omiljeni.includes(card.id);
        card.style.display = (odgovaraKat && odgovaraText && odgovaraFav)? "" : "none";
        if(odgovaraKat && odgovaraText && odgovaraFav)
            br++;
    });
    let poruka=document.getElementById("nema");
    if(br == 0)
        poruka.textContent = "Nema događaja koji odgovaraju filteru.";
    else
        poruka.textContent= " Broj prikazanih događaja: "+br;
    poruka.style.display="block";
}
function AddFavorites(dugme)
{
    let kartica=dugme.closest("#događaji > div");
    let id=kartica.id;
    if(omiljeni.includes(id))
    {
        omiljeni=omiljeni.filter(x => x !== id);
        dugme.textContent = "Dodaj u omiljene";
    }
    else
    {
        omiljeni.push(id);
        dugme.textContent="Ukloni iz omiljenih";
    }
    localStorage.setItem("omiljeni",JSON.stringify(omiljeni))
    FilterTeksta();
}
function PrikaziFav()
{
    prikazFav = !prikazFav;
    let dugme =document.getElementById("favoriti");
    if(prikazFav)
        dugme.textContent="Prikaži sve događaje";
    else
        dugme.textContent= "Prikaži samo omiljene";
    FilterTeksta();
}