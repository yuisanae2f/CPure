# include
## <a href="../Container.md#Dynamic">ae2f</a>_<a href="./Dynamic.md" id="_Dynamic">Dynamic</a>
allocates as the same length of `len` and puts its information into `_this`.  
returns the pointer of `_this`.

# <a href="../Container.md#File">ae2f</a>_File
```c
AE2F struct ae2f_File {
	const char* path;
	unsigned long long len;
	unsigned long long off;
	FILE* fp; char mode;
};
```
manages the basic file reading.  
`fp` will play a role as a file pointer, just as traditional.  
`len` stands for the current length of the file opened.  


## ae2f_File::mode
displays the state of this structure:

### -2	<d id="mode_-2"/>
File opening has been failed.  

### -1	<d id="mode_-1"/>
File closing has been failed.  

### 0	<d id="mode_0"/>
The file is closed.  

### 1	<d id="mode_1"/>
The file is opened as wb+.  

### 2	<d id="mode_2"/>
The file is opened as ab+.  

## ae2f_File::off
stands for the current offset of the current file pointer `fp`.  
functions for writing or reading decides where to operate things via where `off` points.

## struct ae2f_File* ae2f_File(struct ae2f_File* _this, const char* path);
initialises `_this` structure with a `path` for the file you would like to write or read.
```c
struct ae2f_File file; ae2f_File(&file, "fileName.extension");
```

## struct ae2f_File* ae2f_File_open(struct ae2f_File* _this, char mode);
opens the file of `_this`.  
`mode` decides the method of file opening:

<ol>
<li>wb+, file pointer starts at the beginning of the file.</li>
<li>ab+, file pointer starts at the end of the file.</li>
</ol>

```c
struct ae2f_File file; ae2f_File(&file, "fileName.extension");
ae2f_File_open(&file, 1);	// opening with wb+
```

After you call this funtion you are able to read and write both.  

## unsigned long long ae2f_File_write(struct ae2f_File* _this, <a href="#_Dynamic">struct ae2f_Dynamic buff</a>);
writes the `buff` where `_this` points.  
returns the count of bytes written successfully.
```c
struct ae2f_File file; ae2f_File(&file, "fileName.extension");
struct ae2f_Dynamic sendBuff = { "Hello World!", 13 };
ae2f_File_open(&file, 1);

// 13 bytes have been written
printf("%d bytes have been written\n", ae2f_File_write(&file, sendBuff));
```

## unsigned long long ae2f_File_read(struct ae2f_File* _this, <a href="#_Dynamic">struct ae2f_Dynamic* buff</a>);
reads the file as the size of `buff` and give `buff` the bytes read.  
returns the count of bytes read successfully.
```c
struct ae2f_File file; ae2f_File(&file, "fileName.extension");
struct ae2f_Dynamic sendBuff = { "Hello World!", 13 }, dyy;

ae2f_Dynamic(&dyy, 13);
ae2f_File_open(&file, 1);

// 13 bytes have been written
printf("%d bytes have been written\n", ae2f_File_write(&file, sendBuff)); 

// setting the offset to zero to read the data from the scratch.
file.off = 0;

// 13 bytes have been read
// Hello World!
printf("%d bytes have been read\n%s", ae2f_File_read(&file, &dyy), dyy.c.bt1);
```

## struct ae2f_File* ae2f_File_close(struct ae2f_File* _this);
closes the file of `_this` and set the `off`, `mode`, `len`, `fp` all back to zero.
```c
struct ae2f_File file; ae2f_File(&file, "fileName.extension");
struct ae2f_Dynamic sendBuff = { "Hello World!", 13 }, dyy;

ae2f_Dynamic(&dyy, 13);
ae2f_File_open(&file, 1);

// 13 bytes have been written
printf("%d bytes have been written\n", ae2f_File_write(&file, sendBuff));

// setting the offset to zero to read the data from the scratch.
file.off = 0;

// 13 bytes have been read
// Hello World!
printf("%d bytes have been read\n%s", ae2f_File_read(&file, &dyy), dyy.c.bt1);

// closing the file
ae2f_File_close(&file);

// file close result:
// offset	0
// mode		0
// length	0
// file pointer	0000000000000000
printf("file close result:\noffset\t\t%d\nmode\t\t%d\nlength\t\t%d\nfile pointer\t%p", file.off, file.mode, file.len, file.fp);
```