// Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e dovrà quindi essere rimossa dall’html.

// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.

// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, stampare dinamicamente una card per ogni membro del team.

// BONUS:
// Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, il quale viene inserito nell'array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall'utente.

// definisco un array di oggetti
const team = [
    {
        nome: "Wayne Barnett", 
        immagine: "img/wayne-barnett-founder-ceo.jpg",
        ruolo: "Founder & CEO",
        
    },
    {
        nome: "Angela Caroll", 
        immagine: "img/angela-caroll-chief-editor.jpg",
        ruolo: "Chief Editor",
        
    },
    {
        nome: "Walter Gordon", 
        immagine: "img/walter-gordon-office-manager.jpg",
        ruolo: "Office Manager",
        
    },
    {
        nome: "Angela Lopez", 
        immagine: "img/angela-lopez-social-media-manager.jpg",
        ruolo: "Social Media Manager",
        
    },
    {
        nome: "Scott Estrada", 
        immagine: "img/scott-estrada-developer.jpg",
        ruolo: "Developer",
        
    },
    {
        nome: "Barbara Ramos", 
        immagine: "img/barbara-ramos-graphic-designer.jpg",
        ruolo: "Graphic Designer",
        
    }
]
console.log(team);

const container = document.querySelector(".team-container");

// creo template di una card
// let card = document.createElement("div");
// card.setAttribute("class", "team-card");
// card.innerHTML = `
//     <div class="card-image">
//         <img
//         src="${team[2].immagine}"
//         alt="${team[2].nome}"
//         />
//     </div>
//     <div class="card-text">
//         <h3>${team[2].nome}</h3>
//         <p>${team[2].ruolo}</p>
//     </div>
// `
// console.log(card)


// ne creo una funzione richiamabile

function generateArrayCard(nomeArray, objectNumber){
    card = document.createElement("div");
    card.setAttribute("class", "team-card");
    card.innerHTML = `
        <div class="card-image">
            <img
            src="${nomeArray[objectNumber].immagine}"
            alt="${nomeArray[objectNumber].nome}"
            />
        </div>
        <div class="card-text">
            <h3>${nomeArray[objectNumber].nome}</h3>
            <p>${nomeArray[objectNumber].ruolo}</p>
        </div>
    `
    console.log(card)
    return card;
}
