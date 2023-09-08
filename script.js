// Header Section Script

  // Menu toggle button 
    const toggleButton = document.getElementById("toggle-button");
    const toggleMenu = document.getElementById("toggle-menu");
    var toggleCounter = 1;
    toggleButton.onclick = function () {
      toggleCounter++;
      if(toggleCounter%2 == 0){
        toggleMenu.classList.remove("hidden");
        toggleMenu.classList.add("grid");
      }
      else{
        toggleMenu.classList.remove("grid");
        toggleMenu.classList.add("hidden");
      }
    }





// Accordion Script

  const accordionButtons = document.querySelectorAll('.accordion-button');
  const accordionMenu = document.querySelectorAll('.menu-collapse');

  accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
      const accordionCollapse = button.nextElementSibling;
      button.setAttribute('aria-expanded', button.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
      accordionCollapse.classList.toggle('hidden');
    });
  });

  // Set all accordion items to collapsed state by default
  document.querySelectorAll('.menu-collapse').forEach(collapse => {
    collapse.classList.add('hidden');
  });





// Table Script 

  const tableButtons = document.querySelectorAll('.table-button');
  const tableMenu = document.querySelectorAll('.table-collapse');
  const tableClose = document.querySelectorAll('.table-close');

  tableButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tableCollapse = button.nextElementSibling;
      button.setAttribute('aria-expanded', button.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
      tableCollapse.classList.toggle('hidden');
    });
  });

  tableClose.forEach(button => {
    button.addEventListener('click', () => {
      const tableCollapse = button.parentElement.parentElement.parentElement;
      button.setAttribute('aria-expanded', button.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
      tableCollapse.classList.toggle('hidden');
    });
  });




  const tables = document.querySelectorAll('.table-collapse');
  window.onclick = function (event) {
  for (let table of tables){
  if (event.target == table) {
    table.classList.toggle('hidden');
  }
}
};


