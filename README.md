# CPure - yuisanae2f
has a prefix of `ae2f`, or `AE2F` in constant definition.

## Usage method
### Check the `critical dependency`.
You could check on the top of `md`.

### Check the directory `dll`.
You could find the library files which has an extension of `lib` and `dll`.  
Take the file which has the name of the library you want.

### Define the `AE2F_PATH_C` for `dll path`.
These headers has the macros for `implicit linking` for `dll`.  
Once global directory for dll `AE2F_PATH_C` defined, rest will be done automatically.
```c
#define AE2F_PATH_C "../x64/Release" // path for your dll's.
```

## <a href="./lcse.md" id="LICENSE">LICENSE</a>
Check the Apache License here.

## Community Discord Server
https://discord.gg/x6atqkuYaZ

## <a href="./headers/Container.md" id="Container">Container</a>
allocates data in void `pointer` array.

## <a id="Dice" href="./headers/Dice.md" id="Dice">Dice</a>
generates the random number by <a href="https://en.wikipedia.org/wiki/Mersenne_Twister#Pseudocode">`Mersenne Twister`</a>.

## <a id="File" href="./headers/File.md" id="File">File</a>
provides the sugary features of file I/O for other custom structures.

## <a id="Printer" href="./headers/Printer.md" id="Printer">Printer</a>
provides the method of printing for other custom structures.
