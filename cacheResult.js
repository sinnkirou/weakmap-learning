const cache = new WeakMap();
// const cache = new Map();
// 使用 WeakMap，你可以将先前计算的结果与对象相关联，而不必担心内存管理

function countOwnKeys(_obj) {
  if (cache.has(_obj)) {
    return [cache.get(_obj), 'cached'];
  } else {
    const count = Object.keys(_obj).length;
    cache.set(_obj, count);
    return [count, 'computed'];
  }
}

let obj = { name: "kakuqo", age: 30 };
console.log(countOwnKeys(obj));
// [2, 'computed']
console.log(countOwnKeys(obj));
// [2, 'cached']
obj = null; // 当对象不在使用时，设置为null
