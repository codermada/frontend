"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let hello = "Hello";
let user = { id: 2 };
function sayHello(user = { id: 1, name: "John" }) {
    console.log(hello, user.id, user.name);
    return 0;
}
sayHello();
sayHello(user);
//# sourceMappingURL=00_hello_world.js.map