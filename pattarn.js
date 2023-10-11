// Function to print hollow diamond pattern
function printHollowDiamond(n) {
    // Loop to print upper half of the diamond
    for (let i = 0; i < n; i++) {
      // Loop to print spaces before star
      for (let j = 0; j < n - i; j++) {
        console.log(" ");
      }
      // Loop to print stars
      for (let j = 0; j <= i * 2; j++) {
        // Print star only at the first and last position
        if (j == 0 || j == i * 2) {
            console.log("*");
        } else {
            console.log(" ");
        }
      }
      // Move to the next line
      console.log("<br>");
    }
    // Loop to print lower half of the diamond
    for (let i = n - 1; i >= 0; i--) {
      // Loop to print spaces before star
      for (let j = 0; j < n - i; j++) {
        console.log(" ");
      }
      // Loop to print stars
      for (let j = 0; j <= i * 2; j++) {
        // Print star only at the first and last position
        if (j == 0 || j == i * 2) {
            console.log("*");
        } else {
            console.log(" ");
        }
      }
      // Move to the next line
      console.log("<br>");
    }
  }
  
  // Call the function with n = 5
  printHollowDiamond(5);
  