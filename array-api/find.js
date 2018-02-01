// 32: array - `Array.prototype.find`
// To do: make all tests pass, leave the assert lines unchanged!
var assert = require('assert');
describe('`Array.prototype.find` makes finding items in arrays easier', () => {

  it('takes a compare function', function() {
    const found = [false, true].find( item => item === true);

    assert.equal(found, true);
  });

  it('returns the first value found', function() {
    const found = [0, 1, 2].find(item => item > 1);

    assert.equal(found, 2);
  });

  it('returns `undefined` when nothing was found', function() {
    const found = [1, 3].find(item => item === 2);
    // void 0 代表undefined
    assert.equal(found, void 0);
  });

  it('combined with destructuring complex compares become short', function() {
    const bob = {name: 'Bob'};
    const alice = {name: 'Alice'};
    // 对象name属性的length属性
    const found = [bob, alice].find(({name:{length}}) => length===5);

    assert.equal(found, alice);
  });

  it('combined with destructuring compares become short', function() {
    const bob = {name: 'Bob'};
    const alice = {name: 'Alice'};
    // 对象的name属性别名zs
    const found = [bob, alice].find(({name:zs}) => zs==="Alice");

    assert.equal(found, alice);
  });

});
