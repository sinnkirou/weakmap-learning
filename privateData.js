const _counter = new WeakMap();
const _action = new WeakMap();

class Countdown {
  constructor(counter, action) {
    _counter.set(this, counter);
    _action.set(this, action);
  }
  
  dec() {
    let counter = _counter.get(this);
    counter--;
    _counter.set(this, counter);
    if (counter === 0) {
      _action.get(this)();
    }
  }
}

let invoked = false;

const countDown = new Countdown(3, () => invoked = true);
countDown.dec();
countDown.dec();
countDown.dec();

console.log(`invoked status: ${invoked}`)
