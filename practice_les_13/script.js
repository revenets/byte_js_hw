// clicksElement = document.getElementById('clicksElement');
// movesElement = document.getElementById('movesElement');

// const handleClicksCounter = (event) => {
//     const element = event.target;

//     const clicksCounterElement = document.getElementById('clicksCounter');
//     const currentClicks = Number(clicksCounterElement.innerText);

//     clicksCounterElement.innerText = currentClicks + 1;
// }

// clicksElement.addEventListener('click', handleClicksCounter);

// const createInfoElement = (event) => {
//     const infoElement = document.createElement("p");
//     infoElement.innerText = `X: ${event.clientX}, Y: ${event.clientY}`;
//     infoElement.id = "infoElement";

//     return infoElement;
// };

// const handleAddInfoElement = (event) => {
//     const createdElement = createInfoElement(event);
//     const maybeElement = document.getElementById(createdElement.id);

//     if (maybeElement) {
//         maybeElement.remove()
//     } else {
//         document.body.append(createdElement)
//     }
// }

// clicksElement.addEventListener("click", handleAddInfoElement);

// const updateCoordsInInfoElement = (event, element) => {
//     element.innerText = `X: ${event.clientX}, Y: ${event.clientY}`;
// }

// let infoElement = null;

// movesElement.addEventListener("mouseenter", (event) => {
//     infoElement = createInfoElement(event);
//     movesElement.append(infoElement);
// });

// movesElement.addEventListener("mousemove", (event) => {
//     updateCoordsInInfoElement(event, infoElement)
// });

// movesElement.addEventListener("mouseleave", (event) => {
//     infoElement.remove();
// });

// const keysList = [...document.querySelectorAll(".keyboard-item")];

// const handleKeyDown = (event) => {
//     const pressedKey = event.key;

//     const currentKeyElement = keysList.find((key) => {
//         return key.innerText.toLowerCase() === pressedKey.toLowerCase();
//     });

//     if(!currentKeyElement) {
//         return;
//     }
//     currentKeyElement.classList.add("keyboard-item--pressed");
// }

// const handleKeyUp = (event) => {
//     const releasedKey = event.key;

//     const currentKeyElement = keysList.find((key) => {
//         return key.innerText.toLowerCase() === releasedKey.toLowerCase();
//     });

//     if(!currentKeyElement) {
//         return;
//     }

//     currentKeyElement.classList.remove("keyboard-item--pressed");

// }

// window.addEventListener("keyup", handleKeyUp);
// window.addEventListener("keydown", handleKeyDown);

const container = document.getElementById ('container');
const hole = document.getElementById ('hole');

const moveAt = (event, x, y) => {
  const currentBall = event.target;

  currentBall.style.left = `${event.clientX - x}px`;
  currentBall.style.top = `${event.clientY - y}px`;
};

const isMatchingWithBallCoords = ball => {
  const ballCoords = ball.getBoundingClientRect ();
  const holeCoords = hole.getBoundingClientRect ();

  return (
    ballCoords.top > holeCoords.top &&
    ballCoords.bottom < holeCoords.bottom &&
    ballCoords.left > holeCoords.left &&
    ballCoords.right < holeCoords.right
  ) 
};

const onDragMove = event => {
  const currentBall = event.target;

  const shiftY = currentBall.offsetHeight / 2;
  const shiftX = currentBall.offsetWidth / 2;

  moveAt (event, shiftX, shiftY);
};

const onDragEnd = event => {
  const currentBall = event.target;

  currentBall.removeEventListener ('mousemove', onDragMove);
  currentBall.onmouseup = null;

  if(isMatchingWithBallCoords (currentBall)){
      currentBall.remove();
  };
};

const onDragStart = event => {
  const currentBall = event.target;

  const shiftY = currentBall.offsetHeight / 2;
  const shiftX = currentBall.offsetWidth / 2;

  moveAt (event, shiftX, shiftY);
  currentBall.addEventListener ('mousemove', onDragMove);
  currentBall.onmouseup = onDragEnd;
};

const getRandomBallProps = () => {
  const size = Math.ceil (Math.random () * 40) + 80;
  return {
    size: size,
    top: (container.offsetHeight - size) * Math.random (),
    left: (container.offsetWidth - size) * Math.random (),
  };
};

const createBalls = () => {
  for (let i = 0; i < 10; i++) {
    const ball = document.createElement ('div');
    const ballProps = getRandomBallProps ();

    ball.classList.add ('ball');
    ball.style.top = `${ballProps.top}px`;
    ball.style.left = `${ballProps.left}px`;
    ball.style.width = `${ballProps.size}px`;
    ball.style.height = `${ballProps.size}px`;

    ball.addEventListener ('mousedown', onDragStart);

    container.append (ball);
  }
};

createBalls ();
