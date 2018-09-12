let score = 0;

const addOneToTeam1Score = event =>{
  score +=1;
  let message= `${score}`;
  const TeamOneScore = document.querySelector('.Home .score');
  TeamOneScore.textContent = message;
};

const addOneToTeam2Score = event =>{
  score +=1;
  let message= `${score}`;
  const TeamTwoScore = document.querySelector('.Away .score');
  TeamTwoScore.textContent = message;
};
const SubtractOneToTeam1Score = event =>{
  score -=1;
  let message= `${score}`;
  const TeamOneScore = document.querySelector('.Home .score');
  TeamOneScore.textContent = message;
};

const SubtractButtonTeamOne = document.querySelector('.Subtract-For-Team-One');
SubtractButtonTeamOne.addEventListener('click', SubtractOneToTeam1Score);

const SubtractOneToTeam2Score = event =>{
  score -=1;
  let message= `${score}`;
  const TeamTwoScore = document.querySelector('.Away .score');
  TeamTwoScore.textContent = message;
};

const SubtractButtonTeamTwo = document.querySelector('.Subtract-For-Team-Two');
SubtractButtonTeamTwo.addEventListener('click', SubtractOneToTeam2Score);

const changeNameTeam1 = () => {
  // console.log("its works1")
  let updateHomeTeam = document.querySelector('.NameHome');
  let HomeTeam = document.querySelector('.HomeTeam');
  let message= `${updateHomeTeam.value}`;
  HomeTeam.textContent = message;
};

  const changeNameTeam2 = () => {
    // console.log("its works1")
    let updateAwayTeam = document.querySelector('.NameAway');
    let AwayTeam = document.querySelector('.AwayTeam');
    let message= `${updateAwayTeam.value}`;
    AwayTeam.textContent = message;
};

const main = () => {
  const addButtonTeamOne = document.querySelector('.Add-For-Team-One');
  addButtonTeamOne.addEventListener('click', addOneToTeam1Score);

  const addButtonTeamTwo = document.querySelector('.Add-For-Team-Two');
  addButtonTeamTwo.addEventListener('click', addOneToTeam2Score);

  const changeNameTeamOne = document.querySelector('.ChangeNameTeamOne');
  changeNameTeamOne.addEventListener('click', changeNameTeam1);

  const changeNameTeamTwo = document.querySelector('.ChangeNameTeamTwo');
  changeNameTeamTwo.addEventListener('click', changeNameTeam2);







};

































document.addEventListener('DOMContentLoaded', main)
