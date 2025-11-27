// Get the "Select All" checkbox
const selectAll = document.getElementById("selectAll");

selectAll.addEventListener("change", function() {
  
  const allCheckboxes = document.querySelectorAll(".check");

  allCheckboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked;
    checkbox.dispatchEvent(new Event('change'));
  });
});
