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
  
const cards = document.querySelectorAll(".faq-card");
cards.forEach((card) => {
  card.addEventListener("click", () => {
    openCard(card);
  });
});
const faq = querySelector(".faq");
function openCard(card) {
  console.log(card.querySelector(".faq-card-title").innerText);
  const str = card.querySelector(".faq-card-title").innerText;
  
  
  switch (str) {
    
    case "What is Netflix?":
      var ans = document.querySelector(".ans1");
      ans.classList.toggle("hidden");
      break;

    case "How much does Netflix cost?":
      var ans = document.querySelector(".ans2");
      ans.classList.toggle("hidden");
      break;

    case "Where can I watch?":
      var ans = document.querySelector(".ans3");  
      ans.classList.toggle("hidden");
      break;
  
    case "How do I cancel?":
      var ans = document.querySelector(".ans4");  
      ans.classList.toggle("hidden");
      break;
      
      
    case "What can I watch on Netflix?":
      var ans = document.querySelector(".ans5");  
      ans.classList.toggle("hidden");
      break;

    case "Is Netflix good for kids?":
      var ans = document.querySelector(".ans6");  
      ans.classList.toggle("hidden");
      break;

      default:
      break;
  }
}