# <a href="../Container.md">ae2f</a>_Dynamic
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

## struct ae2f_Dynamic ae2f_Dynamic_init(unsigned long long len);
is the constructor for this structure, `ae2f_Dynamic`.
will allocate data as the input length, `len`.

## struct ae2f_Dynamic ae2f_Dynamic_init_(void* val, unsigned long long len);
is the constructor for this structure, `ae2f_Dynamic`.
will allocate data as the input lenth `len`, and put the `val` into it.

## struct ae2f_Dynamic ae2f_Dynamic_copy(struct ae2f_Dynamic _this);
will return a copy of `_this`.

## void ae2f_Dynamic_re(struct ae2f_Dynamic* _this, unsigned long long len);
will re-allocate(or resize) the given structure `_this` in a lenth of `len`.

## void ae2f_Dynamic_free(struct ae2f_Dynamic* _this);
will end the allocation of the given structure `_this` and set its length `_this.len` to zero.  
must be done on the end of the code.

## unsigned long long ae2f_Dynamic_nEqual(struct ae2f_Dynamic _this, struct ae2f_Dynamic another);
will count the bytes of the given two structures' differences.  
Provided their length are no same, the lacked values will be considered as zero.

## char ae2f_Dynamic_equal(struct ae2f_Dynamic _this, struct ae2f_Dynamic another);
will check the values of the given two structures are total same.
Their length `len` has to be the same also.