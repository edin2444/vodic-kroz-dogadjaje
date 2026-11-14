let animacije = false;
let nizObjekata = [];
nizObjekata[0] = {ID:1, Naziv:"Koncert Vlado Georgijev", Datum:"6.12.2026", Mesto:"Beogradska Arena, Bulevar Arsenija Čarnojevića 58, Beograd",
    Kategorija: "Koncert", Opis: "Koncert koji zasigurno ne želite da propustite! Gospodski u Areni sa pogledom na binu od 360° pruža nezaboravno iskustvo slušanja najvećih hitova Vlade Georgijeva! Koncert koji zasigurno ne želite da propustite! Gospodski u Areni sa pogledom na binu od 360° pruža nezaboravno iskustvo slušanja najvećih hitova Vlade Georgijeva!",
    Putanja:"img/Vlado_Arena.jpeg"
};
nizObjekata[1] = {ID:2, Naziv:"Sofiologija u ruskoj religijskoj misli", Datum:"18.11.2026", Mesto:"Dom Omladine, Makedonska 22, Beograd",
    Kategorija: "Predavanje", Opis: "Predavanje vodi prof. dr Davor Džalto sa Univerzitetskog koledža u Stokholmu, u okviru ciklusa „Na krilima (pre)mudrosti – Sofije“. Fokus razgovora biće na pojmu Božanske Premudrosti (Sofije) kod ruskih mislilaca poput Vladimira Solovjova i Sergeja Bulgakova, kao i na njenoj ulozi u savremenoj teologiji i filozofiji.",
    Putanja:"img/Sofiologija(edited).jpeg"
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
let br=1;
let pocetak = "<div class='col-sm-12 col-lg-4 Konc' id="+br+"><div class='container AnimCard2' style='text-align: center;'> <div class='card' style='width: 18em; margin: auto;'>";
function PrikaziDogađaje(){
    let html="";
    for(let i=0; i< nizObjekata.length; i++)
    {
        let dogadjaj=nizObjekata[i];
        let kategorijaKlasa="";
        if(dogadjaj.Kategorija=="Koncert")
            kategorijaKlasa="Konc";
        else if(dogadjaj.Kategorija=="Predavanje")
            kategorijaKlasa="Pred";
        else if(dogadjaj.Kategorija=="Radionica")
            kategorijaKlasa="Rad";
        if(i >=1 && i <=3)
        {
            html+="<div class='col-sm-12 col-lg-4 "+kategorijaKlasa+"' id="+(i+1)+"><div class='container AnimCard2' style='text-align: center;'> <div class='card' style='width: 18em; margin: auto;'><img src='"+nizObjekata[i].Putanja+"' alt='"+nizObjekata[i].Naziv+"(slika)' style='height: 18em;'> <div class='card-body'><div class='card-title'>Događaj " + (i+1) + "</div> <h5 class='card-title'>" + dogadjaj.Naziv + "</h5> <p class='card-text'>Datum: " + dogadjaj.Datum + "</p> <p class='card-text'>Lokacija: " + dogadjaj.Mesto + "</p> <p class='card-text'>Kategorija: " + dogadjaj.Kategorija + "</p> <p class='card-text'>Opis: " + dogadjaj.Opis + "</p></div></div></div></div>";
        }
        else
        {
            html+="<div class='col-sm-12 col-lg-4 "+kategorijaKlasa+"' id="+(i+1)+"><div class='container AnimCard2' style='text-align: center;'> <div class='card' style='width: 18em; margin: auto;'><img src='"+nizObjekata[i].Putanja+"' alt='"+nizObjekata[i].Naziv+"(slika)'> <div class='card-body'><div class='card-title'>Događaj " + (i+1) + "</div> <h5 class='card-title'>" + dogadjaj.Naziv + "</h5> <p class='card-text'>Datum: " + dogadjaj.Datum + "</p> <p class='card-text'>Lokacija: " + dogadjaj.Mesto + "</p> <p class='card-text'>Kategorija: " + dogadjaj.Kategorija + "</p> <p class='card-text'>Opis: " + dogadjaj.Opis + "</p></div></div></div></div>";
        }
    }
    document.getElementById("događaji").innerHTML = html;
}
function Filter(){
    if(!animacije)
    {
        document.querySelectorAll(".Konc, .Pred, .Rad").forEach(card => {
            card.querySelectorAll(".AnimCard2").forEach(anim => {
                anim.classList.remove("AnimCard2");
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
function FilterTeksta() {
    console.log("FilterTeksta called");
}