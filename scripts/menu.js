//***GLOBAL VARIABLES***
const bannerDiv = document.createElement("div");
const containerDiv = document.createElement("container");
// const bannerDiv = document.getElementsByClassName("banner");
// const containerDiv = document.getElementsByClassName("container-menu");

// ***BANNER AUTO***
// Function bannerCreate() to generate 1 banner
function bannerCreate() {
const bannerTitle = document.createElement("h1");
const bannerImg = document.createElement("img");
// Creation of bannerDiv in body
bannerDiv.classList.add("banner");
document.body.appendChild(bannerDiv);
// Creation of bannerImg in bannerDiv
bannerImg.classList.add("banner-img");
bannerImg.setAttribute("src", `ressources/menu/banner-menu.jpg`);
bannerDiv.appendChild(bannerImg);
// Creation of bannerTitle in bannerDiv
bannerTitle.classList.add("banner-title");
bannerTitle.innerHTML = "A chaque wilder sa formule ! <span>Fais le bon choix... (Bisous !)</span>";
bannerDiv.appendChild(bannerTitle);
}

// ***CONTAINER AUTO***
// Function containerCreate() to generate 1 container
function containerCreate() {
// Creation of containerDiv in body
containerDiv.classList.add("container-menu");
document.body.appendChild(containerDiv);
}

// ***FUNCTION AUTO FILL***
// Function menuCreate() to generate 1 menu
function menuCreate(num) {
  // Definition of Variables
  
  let menuList = [`Menu_zero`, `Menu HTML<br>"Le Classique"`, `Menu CSS<br>"Le Vegan"`, `Menu JavaScript<br>"L'épicé"`];
  let courseList = [`Entrée`, `Plat`, `Dessert`];
  let menuPitch = [`Menu_zero`,
    `Pour nos clients qui veulent aller à l'essentiel, ce menu signature est équilibré et contient tous les bons ingrédients d'un repas réussi. Nos clients l'adorent, n'hésitez pas à consulter les avis ! `,
    `Pour respecter le style de vie de chacun, notre chef a préparé ce menu végétal avec des produits frais. Un régal pour les yeux et une cascade de saveur à chaque bouchée !`,
    `Pour les papilles les plus averties, ce menu est le plus exotique. Son sandwich au poulet croustillant (c'est la vie) et sa sauce épicée ravira les afficionados du voyage.`
  ]
  let menus = [
    [`Entree 0`, `Falafels de pois chiches et sa sauce blanche`, `Salade de Tofu et noix de cajou`, `Gambas harissa`],
    [`Plat 0`, `Burger boucher (pain brioché, steak haché de boeuf "black angus", salade verte frisée, emmental affiné, oignon rouge, ketchup de tomate), accompagné de ses frites et sa sauce barbecue.`, `Burger végétal (pain boulanger aux grains de sésame, galette de quinoa, tomate séchée, purée d'avocat, oignon rouge et sauce curry), accompagné de sa salade coleslaw (ou portion de frites au choix).`, `Burger fermier aux épices cajun (pain burger à l'encre de seiche, filets de poulet panés, tranche de Grand Suisse, pousses de salade, avocat, oignon rouge, épices Cajun), accompagné de ses frites et sa sauce curry pimentée.`],
    [`Dessert 0`, `Cheesecake (sans gluten)`, `Crème coco tapioca (sans lactose)`, `Glace choco-piment et copeaux de spéculos`]
  ];
  // HTML Structure of containerDiv
  const menuComment = document.createComment(`Menu ${num}`)
  const menuDiv = document.createElement("div");
  const topDiv = document.createElement("div");
  const topUp = document.createElement("div");
  const topLeft = document.createElement("div");
  const titleLeft = document.createElement("h2");
  const textLeft = document.createElement("p");
  const topRight = document.createElement("div");
  const topImg = document.createElement("img");
  const textDown = document.createElement("div");
  const textBottom = document.createElement("p");
  const showHide = document.createElement("div");
  const textUpDown = document.createElement("div");
  const symbolUpDown = document.createElement("div");
  const bottomDiv = document.createElement("div");
  const btnPrice = document.createElement("button");
  // Creation of comment in containerDiv (HTML)
  containerDiv.appendChild(menuComment);
  // Creation of menuDiv in containerDIv
  menuDiv.classList.add("menu");
  containerDiv.appendChild(menuDiv);
  // Creation of topDiv in menuDiv
  topDiv.classList.add("menu-top");
  menuDiv.appendChild(topDiv);
  // Creation of topUp in topDiv
  topUp.classList.add("top-up");
  topDiv.appendChild(topUp);
  // Creation of topLeft in topUp
  topLeft.classList.add("top-left");
  topUp.appendChild(topLeft);
  // Creation of titleLeft in topLeft
  titleLeft.classList.add("title-left");
  titleLeft.innerHTML = menuList[num];
  topLeft.appendChild(titleLeft);
  // Creation of textLeft in topLeft
  textLeft.classList.add("text-left");
  textLeft.innerHTML = menuPitch[num];
  topLeft.appendChild(textLeft);
  // Creation of topRight in topUp
  topRight.classList.add("top-right");
  topUp.appendChild(topRight);
  // Creation of topImg in topRight
  topImg.setAttribute("src", `ressources/menu/img-menu${num}.jpg`);
  topImg.setAttribute("alt", `Menu ${num} - Image`);
  topRight.appendChild(topImg);
  // Creation of textDown in topDiv
  textDown.classList.add("text-down");
  textDown.innerHTML = menuPitch[num];
  topDiv.appendChild(textDown);
  // Creation of textBottom in textDown
  textBottom.classList.add("text-down");
  textDown.appendChild(textBottom);
  // Creation of show-hide div in menuDiv
  showHide.classList.add("show-hide");
  showHide.setAttribute("id", `show-hide${num}`);
  menuDiv.appendChild(showHide);
  // Creation of "text" div in showHide
  textUpDown.classList.add("text-up-down");
  textUpDown.setAttribute("id", `toc-toc${num}`);
  textUpDown.innerHTML = "Afficher le contenu   ";
  showHide.appendChild(textUpDown);
  // Creation of "symbol" div in showHide
  symbolUpDown.classList.add("symbol-up-down");
  symbolUpDown.setAttribute("id", `cache-cache${num}`);
  symbolUpDown.innerHTML = "&#9661";
  symbolUpDown.setAttribute("onclick", `youSeeMe(${num})`);
  showHide.appendChild(symbolUpDown);

  // Creation of bottomDiv in menuDiv
  bottomDiv.classList.add("menu-bottom");
  bottomDiv.setAttribute("style", `display: none`);
  bottomDiv.id = `bottom${num}`;
  menuDiv.appendChild(bottomDiv);
  // Creation of 6 p blocks in bottomDiv
  for (let newP = 0; newP < 6; newP++) {
    const bottomParagraph = document.createElement("p");
    if (newP % 2 == 0) { // newP starts with 0, paragraph with 1
      bottomParagraph.classList.add("menu-courses");
      bottomParagraph.innerHTML = courseList[newP / 2];
    } else {
      bottomParagraph.classList.add("menu-others");
      bottomParagraph.innerHTML = menus[(newP - 1) / 2][num]
    }
    bottomDiv.appendChild(bottomParagraph);
  }
  // Creation of btnPrice in menuDiv
  btnPrice.classList.add("button-price");
  btnPrice.innerHTML = "Prix : 12,90 €"
  menuDiv.appendChild(btnPrice);
};

// Loop to create 1 banner + 3 menus at opening
bannerCreate();
containerCreate();
for (let digit = 1; digit < 4; digit++) {
  menuCreate(digit);
}

// ***FUNCTION FILTER***

// Function to show/hide bottomDiv & showHide following window size
let newSize = function (event) {
  for (let newWindow = 1; newWindow < 4; newWindow++) {
    const toggleVisible = document.querySelector(`#show-hide${newWindow}`);
    const toggleBottom = document.querySelector(`#bottom${newWindow}`);
    let toggleText = document.querySelector(`#toc-toc${newWindow}`);
    let toggleSymbol = document.querySelector(`#cache-cache${newWindow}`);
    if (window.innerWidth > 1279) {
      toggleVisible.setAttribute("style", `display: none`);
      toggleText.innerHTML = "Masquer le contenu   ";
      toggleSymbol.innerHTML = "&#9651";
      toggleBottom.setAttribute("style", `display: block`);
    } else {
      toggleVisible.setAttribute("style", `display: flex`);
      toggleText.innerHTML = "Afficher le contenu   ";
      toggleSymbol.innerHTML = "&#9661";
      toggleBottom.setAttribute("style", `display: none`);
    }
  }
}
// Launch function newSize onload and onresize
window.onresize = newSize;
window.onload = newSize;

// Function to show/hide bottomDiv and edit showHide on click
function youSeeMe(menu) {
  const bottomVisible = document.querySelector(`#bottom${menu}`);
  let buttonUpDown = document.querySelector(`#cache-cache${menu}`);
  let textUpDown = document.querySelector(`#toc-toc${menu}`);
  if (bottomVisible.style.display == "none") {
    bottomVisible.style = "display: block";
    textUpDown.innerHTML = "Masquer le contenu   ";
    buttonUpDown.innerHTML = "&#9651";
  } else {
    bottomVisible.style = "display: none";
    textUpDown.innerHTML = "Afficher le contenu   ";
    buttonUpDown.innerHTML = "&#9661";
  }
}
