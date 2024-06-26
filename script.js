function calculateAge() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
  
    const today = new Date();
    const birthDate = new Date(year, month - 1, day); // month - 1 because months are zero-indexed in JavaScript
  
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
  
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    const resultContainer = document.getElementById('result');
    resultContainer.innerText = `Your age is ${age} years.`;
  }
  