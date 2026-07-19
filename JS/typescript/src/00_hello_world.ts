let hello: string = "Hello";

function sayHello(name: string = "John"): number{
    console.log(hello, name);
    return 0;
}

sayHello();