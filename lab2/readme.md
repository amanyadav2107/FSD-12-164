# File System (FS Module)
- FS module directly communicate with operating system rather than browser, the common operations on a file or folders are 
1. File -> writeFile,readFile,appendFile.
2. Folder -> MKdir/MK rmdir/rm readdir 
3. File metadata
-> Stat
-> lstat
-> rstate
4. Watch 
-> watching continuously
-> unwatch
5. Stream 
-> read_Stream 
->write_Stream 
- All functions are promise so it must be call with await keyword.

