// // Typing effect function
// function typeEffect(element, text, delay = 100) {
//     let i = 0;
//     const interval = setInterval(() => {
//       if (i < text.length) {
//         element.textContent += text.charAt(i);
//         i++;
//       } else {
//         clearInterval(interval);
//       }
//     }, delay);
//   }
  
//   // Clear text before typing
//   function clearText(element) {
//     element.textContent = '';
//   }
  
//   // Get elements by ID
//   const animatedTextElement = document.getElementById("animated-text");
//   const webdevElement = document.getElementById("webdev");
  
//   // Initial text content
//   const animatedText = "Gourab";
//   const webdevText = "a Web Developer";
  
//   // Clear the text initially
//   clearText(animatedTextElement);
//   clearText(webdevElement);
  
//   // Type the first part ("Gourab") immediately
//   typeEffect(animatedTextElement, animatedText, 150);
  
//   // After typing "Gourab", delay the typing of "a Web Developer"
//   setTimeout(() => {
//     typeEffect(webdevElement, webdevText, 150);
//   }, animatedText.length * 150 + 500); // Adjust the delay based on the typing speed of "Gourab"
  