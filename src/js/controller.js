import { creatures } from './cards.js'; ///////////////
// import { teste } from "./controler.js";
import Sortable from 'sortablejs';
import { state } from './model.js';
// console.log(state);
const gameArea = document.querySelector('.gameArea');
const hand = document.querySelector('.player1Hand');
const dragareas = document.querySelectorAll('.dragarea');

new Sortable(hand, {
  group: 'shared',
  animation: 260,
  chosenclass: 'boxShadow',
  dragClass: 'drag',
});

new Sortable(gameArea, {
  group: 'shared',
  animation: 260,
  chosenclass: 'boxShadow',
  dragClass: 'drag',
});

// console.log(creatures);
let draggables = document.querySelectorAll('.cards');

const modal_play = document.getElementById('modal-play');
const btn_play = document.getElementById('btn-play');

const modal_collection = document.querySelector('.modal-collection');
const btn_collection = document.getElementById('btn-collection');

const deck1 = document.getElementById('deck1');
const builder = document.querySelector('.modal-collection-builder');
const builderArea = document.querySelector('.builder-area');

const deck = document.querySelector('.drawdeck');
const modal_content = document.querySelector('.modal-collection-content');

// new Sortable(modal_content, {
//   group: 'shared',
//   animation: 360,
//   chosenclass: 'boxShadow',
//   ghostClass: 'sortable-ghost',
//   // dragClass: 'drag',
// });

// new Sortable(builderArea, {
//   group: 'shared',
//   animation: 360,
//   chosenclass: 'boxShadow',
//   ghostClass: 'sortable-ghost',
//   // dragClass: 'drag',
// });

deck1.addEventListener('click', () => {
  console.log('click');
  builder.classList.toggle('hidden');
});

btn_collection.addEventListener('click', function () {
  modal_collection.classList.toggle('hidden');
});

btn_play.addEventListener('click', function () {
  modal_play.classList.toggle('hidden');
});

const board = {
  boardPlayer1: [],
};
const player1 = {
  hand: [],
};
/////////////// drawFromDeck////////////////////////

function drawfromDeck(number) {
  let random = generateRandomNumbers(number);
  // const cardsArray = Array.from(hand.querySelectorAll(".
  // console.log(state.activeDeck[0].url);

  hand.insertAdjacentHTML(
    'afterbegin',
    ` <div class="cards" draggable="true"><img src="${state.activeDeck[random].url}" alt="" /></div>`
  );

  draggables = document.querySelectorAll('.cards');
  // console.log(draggables);

  function makeDraggable() {
    draggables.forEach(draggable => {
      // console.log(this);
      draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
      });

      draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
      });
    });
  }
  makeDraggable();
  //   );
  // }
}

//////////

function generateRandomNumbers(number) {
  let randomNumber = number;
  const randomArray = [];

  while (randomArray.length < randomNumber) {
    const randomNumber = Math.floor(
      Math.random() * `${state.activeDeck.length}`
    );
    if (!randomArray.includes(randomNumber)) {
      randomArray.push(randomNumber);
    }
  }
  return randomArray;
}

deck.addEventListener('click', () => drawfromDeck(1));
//////////////// Draggin events /////////////////
/*

dragareas.forEach(dragarea => {
  dragarea.addEventListener('dragover', e => {
    e.preventDefault();
    const afterElement = getDragAfterElement(dragarea, e.clientX);
    const dragging = document.querySelector('.dragging');
    // console.log(afterElement);
    if (afterElement == null) {
      console.log(dragging);
      dragarea.appendChild(dragging);
    } else {
      dragarea.insertBefore(dragging, afterElement);
    }
    // console.log(dragging);
  });
});

function getDragAfterElement(dragarea, x) {
  const draggableElements = [
    ...dragarea.querySelectorAll('.cards:not(.dragging)'),
  ];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = x - box.x - box.width / 2;
      console.log(offset);
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    {
      offset: Number.NEGATIVE_INFINITY,
    }
  ).element;
}

*/

///////////// Render Collections ///////////////

// console.log(creatures[0].url);
function populateCollection(i) {
  // const card = document.createElement("div");

  let colCard = `<img class="card cards-collection" draggable="true" data-set="${i}" src="${creatures[i].url}" alt=""/>`;
  // card.innerHTML = colCard;
  modal_content.insertAdjacentHTML('afterbegin', colCard);
}

creatures.forEach((creature, i) => populateCollection(i));
// populateCollection();

console.log(generateRandomNumbers(1));

//////////////////////
/////////////////////

// function hasDragable(dropTarget) {
//   if (dropTarget.classList.contains("draggable")) return dropTarget.nextSibling;
//   else return false;
// }

function getNewPosition(dragarea, posY) {
  const cards = dragarea.querySelectorAll('.cards:not(.dragging)');
  let result;
  // console.log(cards);

  for (let refer_card of cards) {
    const box = refer_card.getBoundingClientRect();
    const boxCenterY = box.y + box.height / 2;

    if (posY >= boxCenterY) result = refer_card;
  }
  // console.log(result);
  return result;
}

function drop(event, draggintarget) {
  // event.preventDefault();
  // const data = event.dataTransfer.getData("text/plain");
  // const draggedElement = document.getElementById(data);
  // console.log(draggedElement);
  const dropTarget = event.target;
  // console.log(dropTarget);
  dropTarget.parentElement.insertBefore(draggintarget, dropTarget);
}

// const dragarea = document.querySelectorAll(".dragarea");

// document.addEventListener('click', function (e) {
//   if (e.target.draggable) {
//     console.log(e.target);
//   }
// });

/////// Move Card from Collection to Deck ////////////////

const allCollectionCards = document.querySelectorAll('.cards-collection');
let builderCollectionCards = document.querySelectorAll(
  '.builder-collection-cards'
);
// function addToCurDeck() {
// console.log(allCollectionCards);

allCollectionCards.forEach(card => {
  card.addEventListener('click', () => {
    // console.log(creatures[card.dataset.set]);
    // console.log(state.activeDeck);

    state.activeDeck.push(creatures[card.dataset.set]);
    let tempCard = card.cloneNode();
    // console.log(tempCard);
    let count = checkCardCopies(creatures[card.dataset.set]);
    if (count > 3) return;

    tempCard.classList.add('builder-collection-cards');

    tempCard.addEventListener('click', () => {
      tempCard.remove();
    });

    builderArea.appendChild(tempCard);
    // addRemovefromBuilder();
  });
});

// addToCurDeck();

const checkCardCopies = function (cardtomove) {
  builderCollectionCards = document.querySelectorAll(
    '.builder-collection-cards'
  );
  console.log(cardtomove.name);
  console.log(builderCollectionCards);
  let count = 1;
  // if (count === 3) return;
  builderCollectionCards.forEach(card => {
    console.log(creatures[card.dataset.set].name);
    if (creatures[card.dataset.set].name === cardtomove.name) {
      count++;
    }
  });
  return count;
};
