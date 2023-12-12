# #include
## <a href="./Container.md#File">Container</a>
provides the features of basic file managing.

# <a href="../README.md#File">File</a>
provides the sugary features of file I/O for other custom structures.  

## AE2F_FILE_IGNORE_MISSING
Each headers which belongs to this will try to find the missing dependencies of file.  
If you are to prevent that move and ignore the missings, define `AE2F_FILE_IGNORE_MISSING`.

## General suffix
adds a function for file writing with a suffix of `_write`.  
adds a function for file reading with a suffix of `_read`.  

## General feature
### write
receives the parameters of:
+ `_this`: the pointer of data to write.
+ `opened`: the pointer of <a href="./Container/File.md">`ae2f_File`</a> which is opened.

writes the data from the buffer of `_this`.  
returns the count of bytes which are successfully written.

### read
receives the parameters of:
+ `_this`: the pointer of blank buffer to read which is no matter how allocated.
+ `opened`: the pointer of <a href="./Container/File.md">`ae2f_File`</a> which is opened.

reads the data from the buffer of `_this`.  

Use an empty buffer since the function assigns a new value to the pointer without freeing the existing value.  

returns the count of bytes which are successfully read.

## Using method
Following code is an example of writing and reading from `Hello.txt` in a form of <a href="./Container/Dynamic.md">`ae2f_Dynamic`</a>.
```c
struct ae2f_File file;
ae2f_File(&file, "Hello.txt");

struct ae2f_Dynamic 
	// buffer to write
	d = { {"Hello World!"}, 13 },

	// buffer to read
	rdBuff;

// file opening
ae2f_File_open(&file, 1);

// writing
ae2f_Dynamic_write(&d, &file);

// setting the file pointer offset zero to read the certain file from the beginning.
file.off = 0;

// reading
ae2f_Dynamic_read(&rdBuff, &file);

// printing to diagnose whether rdBuff has read the file correctly.
// length: 13, contains: Hello World!
printf("length: %d, contains: %s", rdBuff.len, rdBuff.c.bt1);

// file closing
ae2f_File_close(&file);
```