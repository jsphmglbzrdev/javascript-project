// Function that simulates fetching user data
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: 1, name: "John Doe" }), 1000);
  });
}

// Function that simulates fetching posts
function fetchPosts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["Post 1", "Post 2", "Post 3"]), 1000);
  });
}

// Async function using Promise.all
async function fetchAllData() {
  try {
    const [user, posts] = await Promise.all([fetchUser(), fetchPosts()]);
    console.log("User:", user);
    console.log("Posts:", posts);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchAllData();


// Resolves successfully after 1s
function fetchSuccess() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Success! 🎉"), 1000);
  });
}

// Rejects with error after 1s
function fetchFailure() {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Something went wrong ❌")), 1000);
  });
}

async function handlePromises() {
  try {
    const results = await Promise.all([fetchSuccess(), fetchFailure()]);
    console.log("Results:", results);
  } catch (error) {
    console.error("Caught error:", error.message);
  }
}

handlePromises();


function fetchWithTimeout(promise, timeout) {
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject("Timeout exceeded ⏳"), timeout)
  );

  return Promise.race([promise, timeoutPromise]);
}

// Example usage
async function testTimeout() {
  try {
    // Simulate a slow promise (2s)
    const slowPromise = new Promise((resolve) =>
      setTimeout(() => resolve("Finished ✅"), 2000)
    );

    const result = await fetchWithTimeout(slowPromise, 1000); // Timeout set to 1s
    console.log("Result:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

testTimeout();
