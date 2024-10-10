function checkPasscode() {
    const passcode = document.getElementById('passcode').value;
    const errorMessage = document.getElementById('error-message');
  
    if (passcode === 'NERV') { // Richtiger Passcode
      window.location.href = 'secret-eva-page.html';
    } else {
      errorMessage.classList.remove('hidden');
    }
  }
  