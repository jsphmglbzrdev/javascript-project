

function createCounter() {
	let count = 0;

	return function(){
		count++;
		return count;
	}
}
const counter = createCounter();
console.log(counter()); // 1


function rateLimiter(fn, limit) {
  let lastCall = 0; // keeps track of the last time the function was called

  return function(...args) {
    const now = Date.now();

    if (now - lastCall < limit) {
      return "Rate limit exceeded";
    }

    lastCall = now;
    return fn(...args);
  };
}

// Example usage:
function sayHello(name) {
  return `Hello, ${name}!`;
}
const limitedSayHello = rateLimiter(sayHello, 2000); // 2 seconds

console.log(limitedSayHello("Alice")); // ✅ "Hello, Alice!"
console.log(limitedSayHello("Bob"));   // ❌ "Rate limit exceeded" (if within 2s)
setTimeout(() => console.log(limitedSayHello("Charlie")), 2500); // ✅ after 2.5s

function memoize(fn) {
  const cache = new Map();

  return function(...args) {
    const key = JSON.stringify(args); // create a key based on arguments

    if (cache.has(key)) {
      return cache.get(key); // return cached result
    }

    const result = fn(...args);
    cache.set(key, result); // store result in cache
    return result;
  };
}

// Example usage:
function slowAdd(a, b) {
  console.log("Computing...");
  return a + b;
}

const memoizedAdd = memoize(slowAdd);

console.log(memoizedAdd(2, 3)); // "Computing..." then 5
console.log(memoizedAdd(2, 3)); // 5 (from cache, no "Computing...")
console.log(memoizedAdd(4, 5)); // "Computing..." then 9
