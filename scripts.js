function showModal(link) {
  document.getElementById("modalIframe").src = link;
  document.getElementById("customAlert").style.display = "flex";
  document.getElementById("closeModal").addEventListener("click", closeModal);
}

function closeModal() {

  document.getElementById("customAlert").style.display = "none";
  document.getElementById("modalIframe").src = "";
  document.getElementById("closeModal").removeEventListener("click", closeModal);
}


function showProjectModal(event) {
    // Cierra cualquier modal abierto
    const modals = document.querySelectorAll('.project-modal');
    modals.forEach(modal => modal.style.display = 'none');

    // Identifica el proyecto a partir del contenido del título (h3)
    const projectTitle = event.target.parentElement.querySelector('h3').innerText.toLowerCase();

    // Determina cuál modal mostrar
    if (projectTitle.includes('tutor matemático')) {
      document.getElementById('project').style.display = 'block';
    } else if (projectTitle.includes('retinopatías')) {
      document.getElementById('project2').style.display = 'block';
    } else if (projectTitle.includes('ventus')) {
      document.getElementById('project3').style.display = 'block';
    } else if (projectTitle.includes('vital eco')) {
      document.getElementById('project4').style.display = 'block';
    } else if (projectTitle.includes('studyhive')) {
      document.getElementById('project5').style.display = 'block';
    } else if (projectTitle.includes('heredocs')) {
      document.getElementById('project6').style.display = 'block';
    }
  }

  // Asigna el evento al cargar la página
  window.onload = function () {
    const projectLinks = document.querySelectorAll('.custom-link');
    projectLinks.forEach(link => {
      link.addEventListener('click', showProjectModal);
    });

    const closeButtons = document.querySelectorAll('.close-button');
    closeButtons.forEach(button => {
      button.addEventListener('click', () => {
        button.closest('.project-modal').style.display = 'none';
      });
    });
  }



function closeprojectModal() {
  document.getElementById("project").style.display = "none";
  document.getElementById("closeprojectModal").removeEventListener("click", closeModal);
}




fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-container').innerHTML = data;
  });


fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-container').innerHTML = data;
  });

