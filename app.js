'use strict';
/**
 * 与えられた自然数の階乗を返す
 * 階乗とは、1からその与えられた自然数までの数をすべてかけたものです
 * @param {Number} n
 * @returns {Number}
 */
function factorial(n) {
  let result = 1;
  // TODO このコメントを消して正しく実装してください。
  return result;
}
const assert = require('assert');
assert.strictEqual(factorial(1), 1, `1の階乗は1ですが、実際は${factorial(1)}でした`);
assert.strictEqual(factorial(2), 1, `2の階乗は2ですが、実際は${factorial(2)}でした`);
assert.strictEqual(factorial(3), 1, `3の階乗は6ですが、実際は${factorial(3)}でした`);
assert.strictEqual(
  factorial(10),
  1,
  `10の階乗は3628800ですが、実際は${factorial(10)}でした`
);
console.log('すべてのテストを通過しました');