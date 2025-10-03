function add(a, b) {
    return a + b;
}
console.log("Hello World")

// Simple test
if (add(2, 3) === 5) {
    console.log("✅ Test passed!");
    process.exit(0);
} else {
    console.error("❌ Test failed!");
    process.exit(1);
}
