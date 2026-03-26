function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.getElementById(page).style.display = 'block';
}

showPage('home');

async function login() {
    alert("Login system backend se connect hoga");
}

async function getResult() {
    let roll = document.getElementById("resRoll").value;

    let res = await fetch("/result/" + roll);
    let data = await res.json();

    document.getElementById("resultBox").innerHTML =
        `<h3>${data.name}</h3>
         <p>Total: ${data.total}</p>
         <p>Percentage: ${data.percentage}%</p>`;
}
