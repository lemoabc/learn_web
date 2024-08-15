// alert('table.js')

function addRow() {
    var table = document.getElementById("datatable");
    // console.log(table);
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    cell1.innerHTML = "New Name";
    cell2.innerHTML = "newuser@example.com";
    cell3.innerHTML = '<button onclick="editRow(this)">Edit</button><button onclick="deleteRow(this)">Delete</button>';
}

function deleteRow(r) { 
    var i = r.parentNode.parentNode.rowIndex; 
    document.getElementById("datatable").deleteRow(i); 
}

function editRow(r) { 
    var row = r.parentNode.parentNode;
    var nameCell = row.cells[0];
    var emailCell = row.cells[1];
    var newName = prompt("Enter new name:", nameCell.innerHTML);
    var newEmail = prompt("Enter new email:", emailCell.innerHTML);
    if (newName != null && newName != "") {
        nameCell.innerHTML = newName;
    }
    if (newEmail != null && newEmail != "") {
        emailCell.innerHTML = newEmail;
    }
}