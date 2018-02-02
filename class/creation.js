// 22: class - creation
// To do: make all tests pass, leave the assert lines unchanged!
var assert = require('assert');
describe('class creation', () => {

  it('is as simple as `class XXX {}`', function() {
    class TestClass{};

    const instance = new TestClass();
    assert.equal(typeof instance, 'object');
  });

  it('class is block scoped', () => {
    // 类是块级作用域
    class outside {}
    {class Inside {}}
    assert.equal(typeof Inside, 'undefined');
  });

  it('special method is `constructor`', function() {
    class User {
      constructor(id) {
        this.id=id
      }
    }

    const user = new User(42);
    assert.equal(user.id, 42);
  });

  it('defining a method is simple', function() {
    class User {
      writesTests(){
        return false
      }
    }

    const notATester = new User();
    assert.equal(notATester.writesTests(), false);
  });

  it('multiple methods need no commas (opposed to object notation)', function() {
    class User {
      wroteATest() { this.everWroteATest = true; }
      // 多个方法不需要用逗号
      isLazy() {  return !this.everWroteATest }
    }

    const tester = new User();
    assert.equal(tester.isLazy(), true);
    tester.wroteATest();
    assert.equal(tester.isLazy(), false);
  });

  it('anonymous class', () => {
    // 匿名类就是这么简单没有命名的类
    const classType = typeof class {};
    assert.equal(classType, 'function');
  });

});
