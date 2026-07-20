let hello: string = "Hello";
type User = {readonly id: number, name?: string};

let user: User = {id: 2};

function sayHello(user: {id: number, name?: string} = {id: 1, name: "John"}): number{
    console.log(hello, user.id, user.name);
    return 0;
}

sayHello();
sayHello(user);