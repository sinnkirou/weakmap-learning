在命令行输入`npm run weakmap` 或者  `node --expose-gc weakmap.js` 命令执行 `weakmap.js` 中的代码，其中 `--expose-gc` 参数表示允许手动执行垃圾回收机制。

对于 `map.js` 来说，由于在 arr 和 Map 中都保留了数组的强引用，所以在 Map 中简单的清除 arr 变量内存并没有得到释放，因为 Map 还存在引用计数。而在 WeakMap 中，它的键是弱引用，不计入引用计数中，所以当 arr 被清除之后，数组会因为引用计数为 0 而被垃圾回收清除。