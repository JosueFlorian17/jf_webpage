function showModal(link) {
  const modalImage = document.getElementById("modalImage");
  modalImage.src = link;
  modalImage.onload = () => {
    modalImage.style.objectFit = 'contain';
  };

  document.getElementById("customAlert").style.display = "flex";
  document.body.style.overflow = "hidden";
  document.getElementById("closeModal").addEventListener("click", closeModal);

  // Cerrar al hacer click fuera del contenido del modal
  document.getElementById("customAlert").addEventListener("mousedown", outsideModalClick);
}

function closeModal() {
  document.getElementById("customAlert").style.display = "none";
  document.getElementById("modalImage").src = "";
  document.body.style.overflow = "";
  document.getElementById("closeModal").removeEventListener("click", closeModal);
  document.getElementById("customAlert").removeEventListener("mousedown", outsideModalClick);
}

function outsideModalClick(e) {
  const modalContent = document.querySelector("#customAlert .modal-content");
  if (!modalContent.contains(e.target)) {
    closeModal();
  }
}

function showProjectModal(event) {
  const modals = document.querySelectorAll('.project-modal');
  modals.forEach(modal => modal.style.display = 'none');

  const projectTitle = event.target.parentElement.querySelector('h3').innerText.toLowerCase();

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

function closeProjectModalByClick(e) {
  if (e.target.classList.contains('project-modal')) {
    e.target.style.display = 'none';
  }
}

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

  // Cerrar modales de proyecto al hacer click fuera del contenido
  const projectModals = document.querySelectorAll('.project-modal');
  projectModals.forEach(modal => {
    modal.addEventListener('mousedown', closeProjectModalByClick);
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

/* --- ESTILOS PARA EL MODAL CON IMAGEN CENTRADA --- */
const style = document.createElement('style');
style.innerHTML = `
#customAlert {
  position: fixed !important;
  top: 0; left: 0; right: 0; bottom: 0;
  width: 100vw; height: 100vh;
  display: none;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.6);
  z-index: 9999;
}
#customAlert .modal-content {
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  max-width: 90vw;
  max-height: 90vh;
  box-shadow: 0 4px 32px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
}
#modalImage {
  max-width: 80vw;
  max-height: 70vh;
  object-fit: contain;
  border-radius: 8px;
  background: #f9f9f9;
}
#closeModal {
  margin-top: 1rem;
  cursor: pointer;
  background: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 50%;
  padding: 0.5rem 0.7rem;
  width: 2.2rem;
  height: 2.2rem;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: background 0.2s;
}
#closeModal:hover {
  background: #c0392b;
}
@media (max-width: 600px) {
  #modalImage {
    max-width: 95vw;
    max-height: 50vh;
  }
  #customAlert .modal-content {
    padding: 0.5rem;
  }
}
`;
document.head.appendChild(style);
