const hello = require('./hello');

test("greet Fulando to be equal Hello Fulano!", ()=>{
    expect(hello("Fulano")).toBe("Hello Fulano!");
});