document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz-container');
   
    quizContainer.addEventListener('click', (event) => {
      if (event.target.classList.contains('option')) {
        const optionsContainer = event.target.parentElement;
        const options = optionsContainer.children;
   
        // Remove 'selected' class from all options in the current question
        for (let option of options) {
          option.classList.remove('selected');
        }
   
        // Add 'selected' class to the clicked option
        event.target.classList.add('selected');
      }
    });
   });