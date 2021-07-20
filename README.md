# Intro to Async JS, APIs & Fetch

## Key Topics:
* Asynchronous
  * JS as a non-blocking language, intro to the callstack/event loop
  * Why is this functionality important for JavaScript to have?

* APIs
  * Application Programming Interface - BTW, the internet calls lots of things APIs
  - Information stored on web servers that can be used to populate info on applications
  - Web Documentation
  - Built-in functionality to applications that assist users/programmers
  * APIs are essentially back-end applications on servers with routes that receive requests and return information.
  * We will be working with data in JSON format, although there are also others like YAML and XML

* Promises
  * Promises are JavaScript objects that represent the eventual completion or failure of an asynchronous operation.
  * A promise will either resolve or reject.
  * We attach callbacks to promises instead of passing them in.


* Fetch
  * We use XMLHTTPRequests to receive information living on a server
  * Fetch is the built in method in the browser
  * Making GET requests to an API using the fetch function
  * Introduction to Promises and the .then() chain
  * Exploring the limits of promises, ASYNC JS, taking information from promises and appending them to the DOM

## External Resources
- [MDN Using `fetch`][using-fetch-mdn]
- [MDN Promises][mdn-promise]
- [Response][resp]
- [.json()][resp-json]
- [Loupe][loupe]

<!-- markdown vars -->
[json-server]: https://github.com/typicode/json-server
[using-fetch-mdn]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
[mdn-promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[resp]: https://developer.mozilla.org/en-US/docs/Web/API/Response
[resp-json]: https://developer.mozilla.org/en-US/docs/Web/API/Response/json
[loupe]: http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
