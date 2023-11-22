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

## MACROS
are the bunch of macro blocks to generate codes.  
are available only in the scope of function.

### #define AE2F_CONTEXT(name)
is the initialiser macro.
```c
AE2F_CONTEXT(a);
ae2f_Context_free(&a);
```

### #define AE2F_CONTEXT_USING(name, ...)
is the initialiser macro.
```c
int* p; 
AE2F_CONTEXT_USING(a, ;
p = ae2f_Context_malloc(&a, 4);
*p = 3; printf("%d", *p);
); // no need to free
```

### #define AE2F_CONTEXT_MALLOC(name, type, count)
allocates the `pointer` related to `ae2f_Context` `name`.
```c
AE2F_CONTEXT(ctx);

int* a = AE2F_CONTEXT_MALLOC(ctx, int, 1);
int* b = AE2F_CONTEXT_MALLOC(ctx, int, 1);
int* c = AE2F_CONTEXT_MALLOC(ctx, int, 1);
int* d = AE2F_CONTEXT_MALLOC(ctx, int, 1);

*a = 3, * b = 4; *c = 1; *d = 1;

printf("%p, %d\n", a, *a);	// 3
printf("%p, %d\n", b, *b);	// 4
printf("%p, %d\n", c, *c);	// 1
printf("%p, %d\n\n", d, *d);	// 1

ae2f_Context_free(&ctx);
	
printf("%p, %d\n", a, *a);	// null
printf("%p, %d\n", b, *b);	// null
printf("%p, %d\n", c, *c);	// null
printf("%p, %d\n", d, *d);	// null
```