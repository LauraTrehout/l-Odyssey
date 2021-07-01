/* Faire un tableau avec les élements (photo et titre) des 4 photos
    Créer les const et valeur et les éléments les un à la suite des autres comme dans HLTML
    Verifier dans quelle <div> je dois les inserer.
    Effectuer une boucle qui check tout le tableau et insère les images et les titres*/

    const instructors = [ {
        paragraphe: "mariage",
        source: "../ressources/wedding.jpeg",
        bulle: "Une salle de 3000m2 est à votre disposition ainsi qu'un traiteur et des serveurs.",
        alt: "image de mariage"
    }, 
    {
        paragraphe: "dancing",
        source: "../ressources/tango.jpeg",
        bulle: "Tous les jeudis, nous proposons des cours de danse.",
        alt: "image de concert"
    },
    {
        paragraphe:"Réunion de travail",
        source: "ressources/meeting.jpeg",
        bulle: "Nous disposons de bureau équipé ainsi qu'un trés haut débit internet.",
        alt: "image de réunion de travail"
    },
    {
        paragraphe:"concert",
        source:"../ressources/cheers.jpeg",
        bulle:"Tous les 1er vendredi du mois, un artiste nous fait l'honneur de se produire chez nous.",
        alt: "image de concert"
    }
];

function pictures(paragraphe, imgUrl, bulle, alt) {
    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    document.querySelector(".event-container").appendChild(tooltip);

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");
    tooltip.appendChild(imgContainer);

    const theme = document.createElement("img");
    theme.classList.add("theme");
    theme.setAttribute("src", imgUrl);
    theme.setAttribute("alt", alt);
    imgContainer.appendChild(theme);

    const tooltiptext = document.createElement("span");
    tooltiptext.classList.add("tooltiptext");
    tooltiptext.innerHTML = bulle
    imgContainer.appendChild(tooltiptext);

    const paragraph = document.createElement("p");
    paragraph.innerHTML= paragraphe;
    imgContainer.appendChild(paragraph);

}

for (let i= 0; i < instructors.length; i++) {
    pictures(instructors[i].paragraphe, instructors[i].source, instructors[i].bulle, instructors[i].alt);
}