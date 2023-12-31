# CPure - yuisanae2f
is the bunch of C/C++ libraries made just by hobby.  
has a prefix of `ae2f`, or `AE2F` in constant definition.

# definitions
## AE2F_CPP
Most of the code is written in Language of C.  
If you are to use these in a landscape of C++, define `AE2F_CPP` to declare it.
```c
#define AE2F_CPP
```

## AE2F_IGNORE_MISSINGS 
Each of the headers which has any of `critical dependencies` would try to find it by including.  
If you want it not, define `AE2F_IGNORE_MISSINGS` to halt it.
```c
#define AE2F_IGNORE_MISSINGS
```

# Usage method
## Check the `critical dependency`.
You could check on the top of `md`.

## Check the directory `dll`.
You could find the library files which has an extension of `lib` and `dll`.  
Take the file which has the name of the library you want.

## Define the `AE2F_PATH_C` for `dll path`.
These headers has the macros for `implicit linking` for `lib`.  
Once global directory for dll `AE2F_PATH_C` defined, rest will be done automatically.
```c
#define AE2F_PATH_C "../x64/Release" // path for your dll's.
```

# C++ Libraries
These libraries also has a version for C++.  
Each of those has a suffix as `_Plus`.  

## AE2F_PATH_CPP
Unlike the existing libraries, the one with a suffix of `_Plus` finds its `lib` with a value of `AE2F_PATH_CPP`.  
If you are to use them both, you need to define those two both.
```cpp
#define AE2F_PATH_C "../x64/Release" // for originals
#define AE2F_PATH_CPP "../x64/Release" // for C++ libraries
```

# <a href="./lcse.md" id="LICENSE">LICENSE</a>
Check the Apache License here.

# Libraries as C
## <a href="./headers/Container.md" id="Container">Container</a>
allocates data in void `pointer` array.

## <a href="./headers/Dice.md" id="Dice">Dice</a>
generates the random number by <a href="https://en.wikipedia.org/wiki/Mersenne_Twister#Pseudocode">`Mersenne Twister`</a>.

## <a href="./headers/File.md" id="File">File</a>
provides the sugary features of file I/O for other custom structures.

## <a href="./headers/Printer.md" id="Printer">Printer</a>
provides the method of printing for other custom structures.

# Libraries as C++
## <a href="./headers_cpp/Thrower.md" id="Thrower">Thrower</a>
forms an exception to throw.
## <a href="./headers_cpp/Container.md" id="Container_Plus">Container_Plus</a>
manages the data which is allocated in order to bytes.
## <a href="./headers_cpp/File.md" id="File_Plus">File_Plus</a>