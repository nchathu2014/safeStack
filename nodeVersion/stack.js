export default function Stack() {
    this._stack = [];
}

Stack.prototype.push = function(item) {
    this._stack.push(item);
}

Stack.prototype.pop = function() {
    if(this._stack.length > 0){
        return this._stack.pop();
    }
    throw "SizeError: pop() cannot perform with a null or empty Stack instance."
}

Stack.prototype.peek = function() {
    if(this._stack.length > 0){
        return this._stack[this._stack.length-1];
    }
    throw "SizeError: peek() cannot perform with a null or empty Stack instance."
}

Object.defineProperty(Stack.prototype, "count", {
    get: function count() {
        return this._stack.length
    }
});

