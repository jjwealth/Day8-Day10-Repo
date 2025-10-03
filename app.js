// A simple add function
function add(a, b) {
  return a + b;
}

// A simple main function
function main() {
  return "Hello from Node.js CI demo";
}

// Run a basic test
if (add(2, 3) === 5) {
  console.log("✅ Test passed!");
} else {
  console.error("❌ Test failed!");
}

// Call main (not really necessary but keeps structure clean)
main();
