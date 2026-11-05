const attackSelector=document.getElementById('attack type');
const defenseSelector=document.getElementById('defense type');
const wrapper=document.getElementById('wrapper');


const typeChart = {
    fire: { strongAgainst: ["grass"], weakAgainst: ["water"] },
    water: { strongAgainst: ["fire"], weakAgainst: ["electric"] },
    electric: { strongAgainst: ["water"], weakAgainst: ["grass"] },
    grass: { strongAgainst: ["electric"], weakAgainst: ["fire"] }
};

function loadAttack(){
    for(const key in typeChart){
        const ele=document.createElement("option");
        ele.setAttribute("value",key);
        ele.innerHTML=key;
        attackSelector.appendChild(ele);
    }}
function loadDefense(){
    for(const key in typeChart){
        const ele=document.createElement("option");
        ele.setAttribute("value",key);
        ele.innerHTML=key;
        defenseSelector.appendChild(ele);
    }}

function duel(){
    const attacker=attackSelector.value
    const defender=defenseSelector.value
const attackerType=typeChart[attacker];
    let multiplier=1;
    let message = "Effective!";

    if(attackerType.strongAgainst.includes(defender)){
        multiplier=2;
        message = "Super Effective!";
    } else if (attackerType.weakAgainst.includes(defender)){
        multiplier=0.5;
        message = "Not Effective!"
    }
wrapper.innerHTML= `

<h2> ${attacker} vs ${defender}</h2>
<p>Multiplier: ${multiplier}</p>
<p>${message}</p>`;
}

attackSelector.addEventListener('change', duel);
defenseSelector.addEventListener('change', duel);




loadAttack();
loadDefense();
duel();

