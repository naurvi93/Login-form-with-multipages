/*******TABLE SORTING** *****/
/** 
* @param {HTMLTableElement} table to sort
* @param {number} column the index of the column to sort
* @param {boolean} asc Determines if the sorting will be in ascending

*/
function sortTableByColumn(table, column, asc = true) {
	const dirModifier = asc ? 1: -1;
	const tBody = table.tBodies[0];
	const rows = Array.from(tBody.querySelectorAll("tr"));

 // Sort Each row
 const sortedRows =rows.sort((a, b) => {
	
	const aColText= a.querySelector(`td:nth-child(${column + 1 })`).textContent.trim();
	const bColText= b.querySelector(`td:nth-child(${column + 1 })`).textContent.trim();
	console.log(aColText);
	console.log(bColText);
 });
}

sortTableByColumn(document.querySelectorAll("table"), 1);

