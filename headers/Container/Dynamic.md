# include
## <a href="../Container.md#Unit">ae2f</a>_<a href="./Unit.md" id="_Unit">Unit</a>
is the slicer for a `pointer`, where the dynamically allocated room are contained.

# <a href="../Container.md#Dynamic">ae2f</a>_Dynamic
```c
struct ae2f_Dynamic {
	union ae2f_Unit c;
	unsigned long long len;
};
```
is the structure where pointer of the dynamically allocated room and its length are contained.

## struct ae2f_Dynamic* ae2f_Dynamic(struct ae2f_Dynamic* _this, unsigned long long len);
allocates as the same length of `len` and puts its information into `_this`.  
returns the pointer of `_this`.
```c
struct ae2f_Dynamic a;

ae2f_Dynamic(&a, 4);
a.c.bt4 = 523;

printf("%d", a.c.bt4);	// 523
ae2f_Dynamic_free(&a);
```

## struct ae2f_Dynamic* ae2f_Dynamic_(struct ae2f_Dynamic* _this, void* val, unsigned long long len);
copies the data from `val` as the same length of `len` and puts the information into `_this`.  
returns the pointer of `_this`.
```c
struct ae2f_Dynamic a;

ae2f_Dynamic_(&a, "Hello World!", 13);
printf("val: %s %s", a.c.bt1);	// Hello World!

ae2f_Dynamic_free(&a);
```

## struct ae2f_Dynamic* ae2f_Dynamic_re(struct ae2f_Dynamic* _this, unsigned long long len);
re-allocates as the new length of `len`, while keeping the value from `_this`.  
returns the pointer of `_this`.
```c
struct ae2f_Dynamic a; ae2f_Dynamic_(&a, "Hello World!", 13);
printf("%d, %s\n", a.len, a.c.bt1);	// 13, Hello World!

ae2f_Dynamic_re(&a, 17);
printf("%d, %s", a.len, a.c.bt1);	// 17, Hello World!

ae2f_Dynamic_free(&a);
```

## struct ae2f_Dynamic* ae2f_Dynamic_re_(struct ae2f_Dynamic* _this, void* arr, unsigned long long len);
re-allocates as the new length of `len`, freeing the existing value from `_this`.  
returns the pointer of `_this`.
```c
struct ae2f_Dynamic a; ae2f_Dynamic_(&a, "Hello World!", 13);
printf("%d, %s\n", a.len, a.c.bt1);	// 13, Hello World!

ae2f_Dynamic_re_(&a, "Goodbye World!", 15);
printf("%d, %s\n", a.len, a.c.bt1); // 15, Goodbye World!

ae2f_Dynamic_free(&a);
```

## struct ae2f_Dynamic* ae2f_Dynamic_free(struct ae2f_Dynamic* _this);
frees the value of `_this`.  
The length of the pointer `_this` will be zero.  
returns the pointer of `_this`.
```c
struct ae2f_Dynamic a;

// Whatever you want with a.

ae2f_Dynamic_free(&a);
```

## struct ae2f_Dynamic ae2f_Dynamic_copy(struct ae2f_Dynamic* _this);
copies the value of `_this`.  
returns the value copied from `_this`.
```c
struct ae2f_Dynamic a;
ae2f_Dynamic_(&a, "Hello World!", 13);

struct ae2f_Dynamic b = ae2f_Dynamic_copy(&a);
ae2f_Dynamic_free(&a);

printf("%s", b.c.bt1);	// Hello World!
ae2f_Dynamic_free(&b);	// The copied value is also need to be freed.
```

## char ae2f_Dynamic_weigh(struct ae2f_Dynamic _this, struct ae2f_Dynamic another);
compares `_this` with `another`.  
returns -1 when `_this` is greater than `another`.  
returns 1 when `another` is greater than `_this`.  
returns 0 when those two(`_this`, `another`) are the same.
```c
struct ae2f_Dynamic a, b;
ae2f_Dynamic_(&a, "Hello World!", 13);
ae2f_Dynamic_(&b, "Goodbye World!", 15);

printf("%d\n", ae2f_Dynamic_weigh(a, b));	// 1
printf("%d", ae2f_Dynamic_weigh(a, a));		// 0

ae2f_Dynamic_free(&a);
ae2f_Dynamic_free(&b);
```

## unsigned long long ae2f_Dynamic_puts(struct ae2f_Dynamic* _this, struct ae2f_Dynamic another);
copies the value from `another` to `_this` without re-allocating the memory from `_this`.  
returns the length of `another`.
```c
struct ae2f_Dynamic a, b;
ae2f_Dynamic_(&a, "Hello World!", 13);
ae2f_Dynamic_(&b, "Goodbye World!", 15);

ae2f_Dynamic_puts(&b, a);
printf("%d, %s", b.len, b.c.bt1);	// 15, Hello World!

ae2f_Dynamic_free(&a);
ae2f_Dynamic_free(&b);
```