const state = [
  {
    title: "Closures",
    description: "Closures are a programming pattern in JavaScript that allows variables from an outer lexical scope to be used inside of a nested block of code. JavaScript supports closures transparently, and they are often used without knowing what they are.",
    editorCode: `export function translate2d(dx, dy) {
      return function translate(var1, var2){
        return [dx+var1, dy+var2]
      }
  }
  
export function memoizeTransform(f) {
    let cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }
    const result = f(...args);
    cache = {}
    cache[key] = result;
    return result;
  };
    
  
  `
  },
  {
    title: "Callbacks",
    description: "Callback functions are functions passed as arguments to other functions. The callback function may then be invoked to trigger a subsequent action. Often, callbacks are used to handle the results of work done, or handle an action when an event occurs. Callback functions can be used in synchronous and asynchronous programming.",
    editorCode: `
  export function onSuccess() {
    return notify({"message":"SUCCESS" })
}

export function orderFromGrocer(query, onSuccessCallback onErrorCallback) {
   return order(query, onSuccessCallback,onErrorCallback)
}
  `
  },
]

export default state;