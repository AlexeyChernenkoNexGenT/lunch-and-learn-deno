const filePath = "./assets/hello.txt";
const content = "Hello World!";
const write = await Deno.writeTextFile(filePath, content);

console.log("File written to ./assets/hello.txt");
