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


  function showProjectModal() {
    document.getElementById("project").style.display = "flex";
    document.getElementById("closeprojectModal").addEventListener("click", closeprojectModal);
  }


function closeprojectModal() {
  document.getElementById("project").style.display = "none";
  document.getElementById("closeprojectModal").removeEventListener("click", closeModal);
}