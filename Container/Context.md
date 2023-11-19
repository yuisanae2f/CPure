# #include
## <a href="../Container.md">ae2f</a>_<a href="./Dynamic.md">Dynamic</a> <d id="_Dynamic"></d>
is the basic allocator for dynamic data type for C.  

# <a href="../Container.md#Context" id="_Context">ae2f</a>_Context
```c
struct ae2f_Context {
	struct ae2f_Dynamic c;
	struct ae2f_Context* nxt;
	struct ae2f_Context* end;
};
```
is the binder for the temporary dynamic allocation on scope.  
could be used when you want to manage `temporary dynamic allocation` in the same scope.

## struct ae2f_Context* ae2f_Context_init(struct ae2f_Context* _this);
initialises `_this` ready for action.
```c
struct ae2f_Context ctx; ae2f_Context_init(&ctx);
```

## void* ae2f_Context_malloc(struct ae2f_Context* _this, unsigned long long len);
allocates the room chained by `_this`, in the size of `len`.  
returns the direct address of the room allocated.
```c
struct ae2f_Context ctx; ae2f_Context_init(&ctx);
int* a = ae2f_Context_malloc(&ctx, 4);
*a = 3; printf("%d", *a); // 3
```

## struct <a href="#_Dynamic">ae2f_Dynamic</a> ae2f_Context_malloc_(struct ae2f_Context* _this, unsigned long long len);
allocates the room chained by `_this`, in the size of `len`.  
returns the <a href="#_Dynamic">`Dynamic`</a>, which manages the room.
```c
struct ae2f_Context ctx; ae2f_Context_init(&ctx);
struct ae2f_Dynamic a = ae2f_Context_malloc_(&ctx, 13);

ae2f_Dynamic_re_(&a, "Hello World!", 13);
printf("%s", a.c); // Hello World!
```

## void ae2f_Context_free(struct ae2f_Context* _this);
free all the room chained by `_this`.
```c
struct ae2f_Context ctx; ae2f_Context_init(&ctx);
int* a = ae2f_Context_malloc(&ctx, 4);
*a = 3; printf("%d\n", *a);		// 3

ae2f_Context_free(&ctx);
printf("%d", *a);			// err
```

## struct ae2f_Context ae2f_Context_free_(struct ae2f_Context this_);
free all the room chained by `_this`.
```c
struct ae2f_Context ctx; ae2f_Context_init(&ctx);
int* a = ae2f_Context_malloc(&ctx, 4);
*a = 3; printf("%d\n", *a);		// 3

ae2f_Context_free_(ctx);
printf("%d", *a);			// err
```
