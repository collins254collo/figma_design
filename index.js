// Get the "Select All" checkbox
const selectAll = document.getElementById("selectAll");

// Listen for changes on the select-all checkbox
selectAll.addEventListener("change", function() {
  // Get all checkboxes with the class 'check'
  const allCheckboxes = document.querySelectorAll(".check");

  allCheckboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked;
    checkbox.dispatchEvent(new Event('change'));
  });
});
