const wm1 = new WeakMap(),
      wm2 = new WeakMap(),
      wm3 = new WeakMap();
const o1 = {},
      o2 = function(){},
      o3 = global;

wm1.set(o1, 37);
wm1.set(o2, "azerty");
wm2.set(o1, o2); // value可以是任意值,包括一个对象或一个函数
wm2.set(o3, undefined);
wm2.set(wm1, wm2); // 键和值可以是任意对象,甚至另外一个WeakMap对象

console.log(wm1.get(o2)); // "azerty"
console.log(wm2.get(o2)); // undefined,wm2中没有o2这个键
console.log(wm2.get(o3)); // undefined,值就是undefined

console.log(wm1.has(o2)); // true
console.log(wm2.has(o2)); // false
console.log(wm2.has(o3)); // true (即使值是undefined)

wm3.set(o1, 37);
console.log(wm3.get(o1)); // 37

console.log(wm1.has(o1));   // true
wm1.delete(o1);
console.log(wm1.has(o1));   // false
