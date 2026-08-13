import {writeFile, appendFile , readFile} from "fs/promises";

// await writeFile("hello.txt","JS is easy"); //Write file it always create new file and write in it 

await appendFile("hello.txt", "\nFS is much easy than others 😁"); //await means to wait and it is asynchronous
//Append means 
// await appendFile("hello.txt", "\nAman yadav"); 

const content = await readFile("hello.txt", "utf-8"); //256 character in askai 
console.log(content);

