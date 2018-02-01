// 29: array - `Array.from` static method
// To do: make all tests pass, leave the assert lines unchanged!
var assert = require('assert');
describe('`Array.from` converts an array-like object or list into an Array', () => {

  const arrayLike = {0: 'one', 1: 'two', length: 2};

  it('call `Array.from` with an array-like object', function() {
    const arr = Array.from(arrayLike);

    assert.deepEqual(arr, ['one', 'two']);
  });
// document对象需要在浏览器环境中使用
  it('a DOM node`s classList object can be converted', function() {
    document.body.classList.add('some');
    document.body.classList.add('other');
    const classList = Array.from(document.body.classList);

    assert.equal(''+classList, ''+['some', 'other']);
  });

  it('convert a NodeList to an Array and `filter()` works on it', function() {
    const nodeList = document.querySelectorAll('body');
    const bodies = Array.from(nodeList).filter((node) => node === document.body);

    assert.deepEqual(bodies, [document.body]);
  });

  describe('custom conversion using a map function as second param', () => {
    it('we can modify the value before putting it in the array', function() {
      // 第二个参数可以返回一个值，用该值组成新数组
      const arr = Array.from(arrayLike, (value) => value.toUpperCase());
      assert.deepEqual(arr, ['ONE', 'TWO']);
    });

    it('and we also get the object`s key as second parameter', function() {
      // 第二个参数是一个函数该函数的第一个参数为arrayLike的value,第二个参数为arrayLike的key
      const arr = Array.from(arrayLike, (value,key) => `${key}=${value}`);
      assert.deepEqual(arr, ['0=one', '1=two']);
    });
  });

});
