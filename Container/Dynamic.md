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
```

## struct ae2f_Dynamic ae2f_Dynamic_init_(void* val, unsigned long long len);
is the constructor for this structure, `ae2f_Dynamic`.
will allocate data as the input lenth `len`, and put the `val` into it.
```c
struct ae2f_Dynamic a = ae2f_Dynamic_init_("Hello World!", 13);
```

## struct ae2f_Dynamic ae2f_Dynamic_copy(struct ae2f_Dynamic _this);
will return a copy of `_this`.
```c
struct ae2f_Dynamic a = ae2f_Dynamic_init_("Hello World!", 13);
struct ae2f_Dynamic copy = ae2f_Dynamic_copy(a);
```

## void ae2f_Dynamic_re(struct ae2f_Dynamic* _this, unsigned long long len);
will re-allocate(or resize) the given structure `_this` in a lenth of `len`.
```c
struct ae2f_Dynamic a = ae2f_Dynamic_init_("Hello World!", 13);
a = ae2f_Dynamic_re(&a, 30);
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
```