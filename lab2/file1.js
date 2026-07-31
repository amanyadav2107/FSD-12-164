import {writeFile, appendFile} from "fs/promises";

// await writeFile("hello.txt","JS is easy");
await appendFile("hello.txt", "\nFS is much easy than others");
