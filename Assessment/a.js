function generateBulbs() {
    const bulbCount = document.getElementById('bulbCount').value;
    const bulbContainer = document.getElementById('bulbContainer');
    bulbContainer.innerHTML = ''; 

   
    for (let i = 0; i < bulbCount; i++) {
        const bulbDiv = document.createElement('div');
        bulbDiv.className = 'bulb';

        
        const bulbImage = document.createElement('img');
        bulbImage.src = 'off.png'; 
        bulbImage.alt = 'Bulb';

        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                bulbImage.src = 'on.png'; 
                bulbImage.classList.add('glow');
            } else {
                bulbImage.src = 'off.png'; 
                bulbImage.classList.remove('glow');
            }
        });

       
        bulbDiv.appendChild(bulbImage);
        bulbDiv.appendChild(checkbox);

       
        bulbContainer.appendChild(bulbDiv);
    }
}