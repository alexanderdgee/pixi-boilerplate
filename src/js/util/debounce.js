// source: https://davidwalsh.name/javascript-debounce-function

module.exports = function debounce(callback, wait, immediate) {
    let timeout;
    return function() {
        let context = this;
        let args = arguments;
        let elapsed = function() {
            timeout = null;
            if (!immediate) {
                callback.apply(context, args);
            }
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(elapsed, wait);
        if (callNow) {
            callback.apply(context, args);
        }
    }
}
