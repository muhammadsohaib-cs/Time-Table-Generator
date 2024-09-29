function generateTable() {
    let number = document.getElementById('number').value;
    let table = document.getElementById('table');
    table.innerHTML = '';
    for (let i = 1; i <= 12; i++) {
        let row = document.createElement('p');
        row.textContent = `${number} x ${i} = ${number * i}`;
        table.appendChild(row);
    }
}