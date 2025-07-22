
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Form enviado ✔️');
  var modal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
  modal.hide();
  this.reset();
});