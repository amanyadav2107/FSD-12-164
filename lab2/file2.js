import {readFile, appendFile, writeFile} from "fs/promises";
//if a function uses await keyword then the function must be async 

const readData = async (filename)=>{
    try{
    const content = await readFile(filename, "utf-8");
    return content;
    }catch(e) {
    console.log(e.message);
    console.log("File not found");
    }
    finally{
    console.log("Read data finished");
    }
};
const writeData = async (filename, content) => {
    try{
    await writeFile(filename, content);
    }catch(error){
        console.log(erroe.message);
    }
};
const appendData = async (filename, content) => {
    try{
    await appendFile(filename, content);
    }catch (error) {
        console.log(error,message);
    }
};

const deleteFile = async (filename ) => {
    try{
        await unlike(filename);
    }catch (error) {
        console.log("File not found");
    }
};
const data = await readData("file1.js");
console.log(data);