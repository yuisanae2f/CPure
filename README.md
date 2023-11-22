# justHeaders - yuisanae2f
has a prefix of `ae2f`, or `AE2F` in constant definition.

## <a href="./Container.md">Container</a>
allocates data in void `pointer` array.

## Updates <a id="Updates"></a>
### Container.h has been added.

### <a href="./Container/Context.md">ae2f_Context_malloc_ has been deleted.</a>
was degined to manage allocation with <a href="./Container/Dynamic.md">Dynamic</a>.  
Since <a href="./Container/Context">ae2f_Context</a> has member of <a href="./Container/Dynamic.md">Dynamic</a>,
it is not able to be returned as `pointer`.  

### Container - Massive preprocessor macros update.
are the builders of the bunch of code.  
must be used in a scope of function.

### ae2f_Dynamic_find updated.