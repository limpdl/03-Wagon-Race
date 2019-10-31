// TODO: write your code here
const player1_td = document.querySelectorAll("#player1_race td");
const player2_td = document.querySelectorAll("#player2_race td");
let x = 0;
let y = 0;
document.addEventListener('keyup', (event) => {
  const keyName = event.key;

  if (keyName === 'q') {
    if (player1_td[x].className == "active") {
       player1_td[x].classList.remove("active");
       player1_td[x+1].classList.add("active");
       x++;
    }
  }

  if (keyName === 'p') {
    if (player2_td[y].className == "active") {
       player2_td[y].classList.remove("active");
       player2_td[y+1].classList.add("active");
       y++;
    }
  }

  if (x == 19 && x > y) {
    alert("Player 1 won!");
    location.reload();
  }

  if (y == 19 && y > x) {
    alert("Player 2 won!");
    location.reload();
  }
});
