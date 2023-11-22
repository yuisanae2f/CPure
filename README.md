# justHeaders - yuisanae2f
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
```cpp
#define AE2F_PATH_C "../x64/Release" // path for your dll's.
```

## <a href="./headers/Container.md">Container</a>
allocates data in void `pointer` array.

## Updates <a id="Updates"></a>
### <a href="./headers/Container/Context.md">ae2f_Context_malloc_ has been deleted.</a>
was degined to manage allocation with <a href="./headers/Container/Dynamic.md">Dynamic</a>.  
Since <a href="./headers/Container/Context">ae2f_Context</a> has member of <a href="./headers/Container/Dynamic.md">Dynamic</a>,
it is not able to be returned as `pointer`.  

### Container - Massive preprocessor macros update.
are the builders of the bunch of code.  
must be used in a scope of function.

### ae2f_Dynamic_find updated.