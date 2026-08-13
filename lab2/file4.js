import {mkdir, rm} from "fs/promises";
//create recursive directory

// await mkdir("uploads/resume", {recursive: true});
//create single directory
// await mkdir("uploads/images");

//remove directory
await rm("uploads/images",{ recursive: true}); //Operation not permitted but Why???????????

