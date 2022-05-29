const gameArray = [
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0],
]

let turn = "x";

const drawGame = () => {
	document.body.innerHTML = ` `;
	let gameContainer = `<div id="game_container" class="game_container"></div>`
	document.body.innerHTML += gameContainer;
	gameArray.forEach((row, rowIdx) => {
		document.getElementById('game_container').innerHTML += `
		<div id="${rowIdx}" class="row_container">
			${row.map((elem, elemIdx) => {
			if (elem === 2) {
				return `<div id="${elemIdx}" class="zero_block"></div>`
			}
			if (elem === 1) {
				return `<div id="${elemIdx}" class="x_block"></div>`
			}
			if (elem === 0) {
				return `<div id=${elemIdx} class="empty_block" onclick="verifyVictory(${rowIdx},${elemIdx})"></div>`
			}
		}).join(' ')}
		</div>`
	})
}

drawGame()

const verifyVictory = (rowEmptyBlockIdx, elemEmptyBlockIdx) => {
	gameArray.forEach((row, rowIdx) => {
		row.forEach((elem, elemIdx) => {
			if (rowIdx === rowEmptyBlockIdx && elemIdx === elemEmptyBlockIdx) {
				if (elem === 0) {
					if (turn === "x") {
						gameArray[rowIdx][elemIdx] = 1;
						turn = "zero";
						for (let i = 0; i < row.length; i++) {
							const column = gameArray.map(row => row[i])
							if (column.filter(elem => elem === 1).length === column.length) {
								alert("X VICTORY")
							}
						}
						if (row.filter(elem => elem === 1).length === row.length) {
							alert("X VICTORY")
						}
						let mainDiagonal = [];
						let secondaryDiagonal = [];
						let arrLength = gameArray.length
						for (let i = 0; i < row.length; i++) {
							mainDiagonal.push(gameArray[i][i])
						}
						for (i = 0; i < arrLength; i++) {
							secondaryDiagonal.push(gameArray[i][arrLength - i - 1])
						}
						if (mainDiagonal.filter(elem => elem === 1).length === mainDiagonal.length || secondaryDiagonal.filter(elem => elem === 1).length === secondaryDiagonal.length) {
							alert("X VICTORY")
						}
					}
					else if (turn === "zero") {
						gameArray[rowIdx][elemIdx] = 2;
						turn = "x";
						for (let i = 0; i < row.length; i++) {
							const column = gameArray.map(row => row[i])
							if (column.filter(elem => elem === 2).length === column.length) {
								alert("ZERO VICTORY")
							}
						}
						if (row.filter(elem => elem === 2).length === row.length) {
							alert("ZERO VICTORY")
						}
						let mainDiagonal = [];
						let secondaryDiagonal = [];
						let arrLength = gameArray.length
						for (let i = 0; i < row.length; i++) {
							mainDiagonal.push(gameArray[i][i])
						}
						for (i = 0; i < arrLength; i++) {
							secondaryDiagonal.push(gameArray[i][arrLength - i - 1])
						}
						if (mainDiagonal.filter(elem => elem === 2).length === mainDiagonal.length || secondaryDiagonal.filter(elem => elem === 2).length === secondaryDiagonal.length) {
							alert("ZERO VICTORY")
						}
					}
				}
			}
		})
	})
	drawGame()
}