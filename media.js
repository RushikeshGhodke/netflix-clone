function updateLanguageOptions() {
    var languageSelect = document.getElementById('lang');
    if (window.innerWidth <= 425) {
      languageSelect.innerHTML = '<option value="en">Eng</option><option value="en">Hin</option>';
    } else {
        languageSelect.innerHTML = '<option value="en">English</option><option value="en">Hindi</option>';
    }
  }
  
  // Call the function initially and attach it to window resize event
  updateLanguageOptions();
  window.addEventListener("resize", updateLanguageOptions);
  
