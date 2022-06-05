import '../css/atebit.css';
import CHARS_TABLE from './charsTable';

function generateChar(char) {
  const charTable = CHARS_TABLE[char.dataset.char.toUpperCase()];
  if (!charTable) {
    return null;
  }

  const markedCells = [];
  charTable.forEach((row) => {
    const rowContainer = document.createElement('div');
    rowContainer.classList.add('row');

    row.forEach((column) => {
      const cell = document.createElement('span');
      cell.classList.add('cell');
      if (column) {
        cell.classList.add('marked');
        markedCells.push(cell);
      }
      rowContainer.appendChild(cell);
    });
    char.appendChild(rowContainer);
  });

  return markedCells;
}

async function showChar(
  charMarkedBoxes,
  [animationKeyFrames, animationTiming]
) {
  // eslint-disable-next-line no-restricted-syntax
  for (const markedBox of charMarkedBoxes) {
    // Wait for an animation to finish before moving to the next markedBox
    // eslint-disable-next-line no-await-in-loop
    await markedBox.animate(animationKeyFrames, animationTiming).finished;
  }
}

export function animate(chars, animationSettings) {
  const charsMarkedCells = Array.from(chars).map(generateChar);
  charsMarkedCells.forEach((charMarkedCells) => {
    showChar(charMarkedCells, animationSettings);
  });
}
