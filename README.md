# justHeaders
made by someone fool who does code without external libraries.

has nothing here.
see other branches for something you might want.  
is made for Windows only.

## C/C++
### Usage method
#### Check the `critical dependency`.
You could check on the top of `md`.

#### Check the directory `dll`.
You could find the library files which has an extension of `lib` and `dll`.  
Take the file which has a name of the library you want.

#### Define the `AE2F_PATH` for `dll path`.
These headers has the macros for `implicit linking` for `dll`.  
Once global directory for dll `AE2F_PATH` defined, rest will be done automatically.  
```cpp
#define AE2F_PATH "../x64/Release" // path for your dll's.
```
If you're going to use the branch of `C`, you should define as `AE2F_PATH_C` instead of `AE2F_PATH`.
```c
#define AE2F_PATH_C "../x64/Release" // path for your dll's in C.
```

### <a href="https://github.com/yuisanae2f/justHeaders/tree/C">C</a>
### <a href="https://github.com/yuisanae2f/justHeaders/tree/CPP">CPP</a>
