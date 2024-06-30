* chunking/code splitting/lazy loading/dynamic building/on demand loading

* Instead of making our bundler size more we can use dynamic imports which will not include that particular file in the bundler creates one more js file to load it
and it is called LAZY LOADING
* we have to wrap it in the suspense boundary so that till this page loads we can show some fallback for that component


