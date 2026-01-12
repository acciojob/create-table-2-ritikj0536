function createTable() {
  // Prompt for rows
  const rn = prompt("Input number of rows");
  // Prompt for columns
  const cn = prompt("Input number of columns");

  // Convert input to numbers
  const rows = Number(rn);
  const cols = Number(cn);

  // Validation
  if (isNaN(rows) || isNaN(cols)) {
    // non-numeric input → ignore
    return;
  }

  if (rows <= 0 || cols <= 0) {
    alert("Invalid input! Values must be positive.");
    return;
  }

  // Get table reference
  const table = document.getElementById("myTable");

  // Clear existing table content
  table.innerHTML = "";

  // Create rows and columns
  for (let i = 0; i < rows; i++) {
    const tr = document.createElement("tr");

    for (let j = 0; j < cols; j++) {
      const td = document.createElement("td");
      td.textContent = `Row-${i} Column-${j}`;
      tr.appendChild(td);
    }

    table.appendChild(tr);
  }
}
