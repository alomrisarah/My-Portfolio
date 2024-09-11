document.addEventListener("DOMContentLoaded", function () {
 const form = document.getElementById("contactForm")
 const loadingMessage = document.getElementById("loading")
 const sentMessage = document.getElementById("sent-message")
 const errorMessage = document.getElementById("error-message")

 form.addEventListener("submit", function (event) {
  event.preventDefault() // Prevent the form from submitting normally

  // Show the loading message
  loadingMessage.style.display = "block"
  sentMessage.style.display = "none"
  errorMessage.style.display = "none"

  // Simulate form submission delay
  setTimeout(function () {
   // Hide the loading message
   loadingMessage.style.display = "none"

   // Simulate success or error response
   const success = Math.random() > 0.2 // 80% chance of success for demonstration

   if (success) {
    sentMessage.style.display = "block" // Show success message
   } else {
    errorMessage.style.display = "block" // Show error message
   }

   // Clear the form
   form.reset()
  }, 2000) // Simulate a 2-second delay
 })
})
