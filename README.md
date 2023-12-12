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

## <a href="./license" id="license">LICENSE</a>
Check the Apache License here.

## [Container](./headers/Container) <s id="Container"></s>
allocates data in void `pointer` array.

## [Dice](./headers/Dice) <s id="Dice"></s>
generates the random number by <a href="https://en.wikipedia.org/wiki/Mersenne_Twister#Pseudocode">`Mersenne Twister`</a>.