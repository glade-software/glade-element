// So that yup doesn't validate via net call every keystroke
// https://stackoverflow.com/a/66773336/2183475
const asyncDebouncer = (fn, wait, callFirst) => {
  var timeout;
  return function () {
    return new Promise(async (resolve) => {
      if (!wait) {
        const result = await fn.apply(this, arguments);
        resolve(result);
      }

      var context = this;
      var args = arguments;
      var callNow = callFirst && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(async function () {
        timeout = null;
        if (!callNow) {
          const result = await fn.apply(context, args);
          resolve(result);
        }
      }, wait);

      if (callNow) {
        const result = await fn.apply(this, arguments);
        resolve(result);
      }
    });
  };
};

export default asyncDebouncer;
