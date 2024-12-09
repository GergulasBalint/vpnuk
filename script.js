 // Animate benefits slider
document.addEventListener('DOMContentLoaded', () => {
    const benefits = document.querySelectorAll('.benefit-item');
    benefits.forEach((benefit, index) => {
      benefit.style.animationDelay = `${index * 0.2}s`;
    });
  
    // Sample deals integration
    const deals = [
      "ExpressVPN: 49% OFF Annual Plan",
      "NordVPN: 68% OFF 2-Year Plan",
      "Surfshark: 82% OFF + 2 Months Free"
    ];
  
    const dealElement = document.getElementById('current-deal');
    let currentDeal = 0;
  
    function updateDeal() {
      dealElement.style.opacity = 0;
      setTimeout(() => {
        dealElement.textContent = deals[currentDeal];
        dealElement.style.opacity = 1;
        currentDeal = (currentDeal + 1) % deals.length;
      }, 500);
    }
  
    updateDeal();
    setInterval(updateDeal, 5000);
  });