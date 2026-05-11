const stack = require('../src/stack');

test('push should place the new value on top', () => {
    stack.push("äpple");
    expect(stack.peek()).toBe("äpple");
});