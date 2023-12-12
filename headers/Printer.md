# <a href="../README.md#Printer">Printer</a>
provides the method of printing for other custom structures.

## AE2F_PRINTER_IGNORE_MISSING
Each headers which belongs to this will try to find the missing dependencies of file.  
If you are to prevent that move and ignore the missings, define `AE2F_PRINTER_IGNORE_MISSING`.

## General suffix
adds a function for file reading with a suffix of `_print`.  

## General feature
receives the parameters of:
+ `_this`: the data to print.

prints the data which is received as parameter.

## Using method
following code is an example of printing the value on console in a form of <a href="./Container/Dynamic.md">`ae2f_Dynamic`</a>.
```c
struct ae2f_Dynamic dataToPrint = { {"Hello World!"}, 13 };	// structure containing the value.
ae2f_Dynamic_print(dataToPrint);				// printing the value.
```

## <a id="Settings" href="./Printer/Settings.md">Settings</a>
sets the preset of printing.

## <a id="Enum" href="./Printer/Enum.md">Enum</a>
provides the enum for the magic number of <a href="#Settings">`Settings`</a>.  
could be used in <a href="#Settings">`Settings`</a>.