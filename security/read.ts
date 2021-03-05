const filePath = "./assets/people.json";
const text = await Deno.readTextFile(filePath);

console.log(text);
