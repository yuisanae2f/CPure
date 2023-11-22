# <a href="../Container.md#Dynamic">ae2f</a>_Dynamic
```c
struct ae2f_Dynamic {
	void* c;		// allocator
	unsigned long long len;	// length
};
```
is the basic allocator for dynamic data type for C.  
uses data type `char` to operate comparision.  
So yes, it could be roughly called string.  

Initialiser functions have to be called.  
Once it is initialised, space will be allocated at `c`.  
`c` could be casted as whatever you want, and use it.

## struct ae2f_Dynamic ae2f_Dynamic_init(unsigned long long len);
is the constructor for this structure, `ae2f_Dynamic`.
will allocate data as the input length `len` and initialise to zero.
```c
struct ae2f_Dynamic a = ae2f_Dynamic_init(4);
ae2f_Dynamic_free(&a);
```

## struct ae2f_Dynamic ae2f_Dynamic_init_(void* val, unsigned long long len);
is the constructor for this structure, `ae2f_Dynamic`.
will allocate data as the input lenth `len`, and put the `val` into it.
```c
struct ae2f_Dynamic a = ae2f_Dynamic_init_("Hello World!", 13);
ae2f_Dynamic_free(&a);
```

## struct ae2f_Dynamic ae2f_Dynamic_copy(struct ae2f_Dynamic _this);
will return a copy of `_this`.
```c
struct ae2f_Dynamic a = ae2f_Dynamic_init_("Hello World!", 13);
struct ae2f_Dynamic copy = ae2f_Dynamic_copy(a);

ae2f_Dynamic_free(&a); printf("%s\n", copy.c); // Hello world!
ae2f_Dynamic_free(&copy); printf("%s", copy.c); // null
```

## void ae2f_Dynamic_re(struct ae2f_Dynamic* _this, unsigned long long len);
will re-allocate(or resize) the given structure `_this` in a lenth of `len`.
```c
struct ae2f_Dynamic a = ae2f_Dynamic_init_("Hello World!", 13);
a = ae2f_Dynamic_re(&a, 30);

ae2f_Dynamic_free(&a);
```

## void ae2f_Dynamic_re_(struct ae2f_Dynamic* _this, void* arr, unsigned long long len);
sets the dynamic `_this`s' c the value of `arr`.

## void ae2f_Dynamic_free(struct ae2f_Dynamic* _this);
will end the allocation of the given structure `_this` and set its length `_this.len` to zero.  
must be done on the end of the code.
```c
struct ae2f_Dynamic a = ae2f_Dynamic_init_("Hello World!", 13);
ae2f_Dynamic_free(&a);
```

## struct ae2f_Dynamic ae2f_Dynamic_free_(struct ae2f_Dynamic _this);
endd the allocation of the given structure `_this`.
returns the initialised value.
```c
struct ae2f_Dynamic a = ae2f_Dynamic_init_("Hello World!", 13);
a = ae2f_Dynamic_free_(a);
```

## unsigned long long ae2f_Dynamic_nEqual(struct ae2f_Dynamic _this, struct ae2f_Dynamic another);
will count the bytes of the given two structures' differences.  
Provided their length are no same, the lacked values will be considered as zero.
```c
struct ae2f_Dynamic 
	a = ae2f_Dynamic_init_("Hello World!", 13),
	b = ae2f_Dynamic_init_("Hello Man!", 11);

printf("%d\n", ae2f_Dynamic_nEqual(a, b));		// 6

ae2f_Dynamic_free(&a); ae2f_Dynamic_free(&b);

a = ae2f_Dynamic_init_("Hello World!", 13);
b = ae2f_Dynamic_init_("Hello World!", 13);

printf("%d", ae2f_Dynamic_nEqual(a, b));		// 0

ae2f_Dynamic_free(&a); ae2f_Dynamic_free(&b);
```

## char ae2f_Dynamic_equal(struct ae2f_Dynamic _this, struct ae2f_Dynamic another);
will check the values of the given two structures are total same.
Their length `len` has to be the same also.
```c
struct ae2f_Dynamic 
	a = ae2f_Dynamic_init_("Hello World!", 13),
	b = ae2f_Dynamic_init_("Hello Man!", 11);

printf("%d\n", ae2f_Dynamic_equal(a, b));	// 0, does not match

ae2f_Dynamic_free(&a); ae2f_Dynamic_free(&b);

a = ae2f_Dynamic_init_("Hello World!", 13);
b = ae2f_Dynamic_init_("Hello World!", 13);
printf("%d", ae2f_Dynamic_equal(a, b));		// 1, matches

ae2f_Dynamic_free(&a); ae2f_Dynamic_free(&b);
```

## void* ae2f_Dynamic_find(struct ae2f_Dynamic _this, struct ae2f_Dynamic val, unsigned long long ignore);
finds the value of `val` from `_this` and returns a pointer of `_this.c` where `val` has found.
```c
AE2F_DYNAMIC_INIT(a, char, "Hello World!");
AE2F_DYNAMIC_INIT_(b, char, 5, "Hello");

printf("%p %p", ae2f_Dynamic_find(a, b, 0), a.c); // same value

ae2f_Dynamic_free(&a); ae2f_Dynamic_free(&b);
```
ignores `ignore` times when value has found.  
```c
AE2F_DYNAMIC_INIT(a, char, "Hello World!");
AE2F_DYNAMIC_INIT_(b, char, 1, "l");

printf("%d\n", (char*)(ae2f_Dynamic_find(a, b, 0)) - a.c); // 2
printf("%d\n", (char*)(ae2f_Dynamic_find(a, b, 1)) - a.c); // 3
printf("%d\n", (char*)(ae2f_Dynamic_find(a, b, 2)) - a.c); // 9

ae2f_Dynamic_free(&a); ae2f_Dynamic_free(&b);
```
If the value `val` has not been found, it returns zero.  
```c
AE2F_DYNAMIC_INIT(a, char, "Hello World!");
AE2F_DYNAMIC_INIT(b, char, "Goodbye!");

printf("%p", (char*)(ae2f_Dynamic_find(a, b, 0))); // 0000000000000000

ae2f_Dynamic_free(&a); ae2f_Dynamic_free(&b);
```

## MACROS
are the bunch of macro blocks to generate codes.  
are available only in the scope of function.
### #define AE2F_DYNAMIC(name, byte)
is the basic ready-made initialiser.  
makes the variable `ae2f_Dynamic` name of `name` and initialies with the size of `byte`.
```c
AE2F_DYNAMIC(name, 4) // 4, size of int.
*((int*)name.c) = 3;
printf("%d", ((int*)name.c)[0]); // 3

ae2f_Dynamic_free(&name);
```
### #define AE2F_DYNAMIC_(name, type, count)
is the ready-made initialiser.  
makes the variable `ae2f_Dynamic` name of `name` and initialies with the size of `count` times the size of data type `type`.
```c
AE2F_DYNAMIC_(name, int, 3);
for (int i = 0; i < 3; i++) {
	AE2F_DYNAMIC_CAST(name, int)[i] = i * 2;
	printf( "%d\n", AE2F_DYNAMIC_CAST(name, int)[i]);
}

ae2f_Dynamic_free(&name);
```
### #define AE2F_DYNAMIC_INIT(name, type, ...)
is the ready-made initialiser.  
makes the variable `ae2f_Dynamic` name of `name` and initialies with the `constant array` `...`.
```c
AE2F_DYNAMIC_INIT(a, int, { 1,2,3,4,4 });
ae2f_Dynamic_free(&a);
```

### #define AE2F_DYNAMIC_INIT_(name, type, count, ...)
is the ready-made initialiser.  
makes the variable `ae2f_Dynamic` name of `name` and initialies with the `constant array` `...` which is trimmed by the length of `count`.
```c
AE2F_DYNAMIC_INIT(a, char, "Hello World!", 12);
ae2f_Dynamic_free(&a)
```

### #define AE2F_DYNAMIC_USING(name, byte, ...)
is the ready-made initialiser.  
free the `dynamic` `name` on the end of the round bracket.
```c
AE2F_DYNAMIC_USING(a, 4,;
AE2F_DYNAMIC_CAST(a, int)[0] = 3;
printf("%d", AE2F_DYNAMIC_CAST(a, int)[0]);
); // no need to free
```

### #define AE2F_DYNAMIC_CAST(name, type)
is the ready-made castre.  
casts the `void pointer` of the ae2f_Dynamic `name` as the data type `type`.
```c
AE2F_DYNAMIC_(a, int, 1);
AE2F_DYNAMIC_CAST(a, int)[0] = 3;

printf("%d", AE2F_DYNAMIC_CAST(a, int)[0]); // 3
```

### #define AE2F_DYNAMIC_FOREACH(name, type, ...)
iterates the `dynamic` `name` which is cast as an array of `type`.  
`name_i` for index number, which increases by the size of `type`.  
`name_pointer` for pointer of every iterate.
```c
AE2F_DYNAMIC_INIT(a, int, { 5,4,3,2,1 });
AE2F_DYNAMIC_FOREACH(a, int, printf("%p, %d\n", *a_pointer, a_i););
//
// 5 0
// 4 4
// 3 8
// 2 12
// 1 16
//
ae2f_Dynamic_free(&a);
```