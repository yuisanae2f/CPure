# #include
## <a href="../Container.md#Dynamic">ae2f</a>_<a href="./Dynamic.md">Dynamic</a> <d id="_Dynamic"></d>
is needed for generic datatype for unordered map.

# <a href="../Container.md">ae2f</a>_Pair <d id="_Pair"></d>
```c
struct ae2f_Pair {
	struct ae2f_Dynamic key;
	struct ae2f_Dynamic value;
};
```
is to bond two of data on same place.

# <a href="../Container.md#Map">ae2f</a>_Map <d id="_Map"></d>
```c
struct ae2f_Map {
	char hV;		// works as boolean which shows if certain pointer has a value.
	struct ae2f_Pair kv;	// contains data as the structure ae2f_Pair.
	struct ae2f_Map* pre;	// is the previous pointer for certain pointer.
	struct ae2f_Map* next;	// is the next pointer for certain pointer.
	struct ae2f_Map* first;	// is the first pointer for certain pointer.
	struct ae2f_Map* end;	// is the end pointer for certain pointer.
};
```
is an unordered map as the hashmap.  
is NOT the exact hashmap.  

provides the map, which has a key.  
initialiser function will take the pointer and make it ready.

## void ae2f_Map_init(struct ae2f_Map* i); <d id="init"></d>
is the constructor of the given structure <a href="#_Map">`ae2f_Map`</a>.
```c
struct ae2f_Map a; ae2f_Map_init(&a);
```

## void ae2f_Map_add(struct ae2f_Map* _this, struct <a href="#_Dynamic">ae2f_Dynamic</a> key, struct <a href="#_Dynamic">ae2f_Dynamic</a> value); <d id="add"></d>
will add this map `_this` a copy of the pair of value.  
Since <a href="#_Dynamic">`dynamics`</a> as parametres <a href="./Dynamic.md#copy">has been duplicated</a>, still the original ones are need to be freed after the map has been freed.
```c
struct ae2f_Map a; ae2f_Map_init(&a);
struct ae2f_Dynamic 
	k = ae2f_Dynamic_init_("Hello World!", 15),
	v = ae2f_Dynamic_init_("Goodbye World!", 23);

ae2f_Map_add(&a, k, v);
```

## void ae2f_Map_add_(struct ae2f_Map* _this, struct ae2f_Pair pair); <d id="add_"></d>
does the same action as <a href="#add">`ae2f_Map_add`</a>.
```c
struct ae2f_Map a; ae2f_Map_init(&a);
struct ae2f_Pair p = {
	ae2f_Dynamic_init_("Hello World!", 15),
	ae2f_Dynamic_init_("Goodbye World!", 23) 
};

ae2f_Map_add_(&a, p);
```

## struct ae2f_Map* ae2f_Map_visit(struct ae2f_Map* _this, struct <a href="#_Dynamic">ae2f_Dynamic</a> key); <d id="visit"></d>
returns the address where the `key` matches the one certain structure `_this` has.  
returns 0 if `key` has not been found.
```c
struct ae2f_Map a; ae2f_Map_init(&a);
struct ae2f_Pair p = {
	ae2f_Dynamic_init_("Hello World!", 15),
	ae2f_Dynamic_init_("Goodbye World!", 23) 
};

ae2f_Map_add_(&a, p);

printf("%s", ae2f_Map_visit(&a, p.key)->kv.value.c); // Goodbye World!
```

## struct ae2f_Dynamic ae2f_Map_at(struct ae2f_Map* _this, struct <a href="#_Dynamic">ae2f_Dynamic</a> key); <d id="at"></d>
returns the value where the `key` matches the one certain structure `_this` has.  
casts an error when `key` has not been found.
```c
struct ae2f_Map a; ae2f_Map_init(&a);
struct ae2f_Pair p = {
	ae2f_Dynamic_init_("Hello World!", 15),
	ae2f_Dynamic_init_("Goodbye World!", 23) 
};

ae2f_Map_add_(&a, p);

printf("%s", ae2f_Map_at(&a, p.key).c);
```

## struct ae2f_Map* ae2f_Map_pop(struct ae2f_Map* _this); <d id="pop"></d>
will delete the endpoint for `_this.end`.  
```c
struct ae2f_Map a; ae2f_Map_init(&a);
struct ae2f_Pair p = {
	ae2f_Dynamic_init_("Hello World!", 15),
	ae2f_Dynamic_init_("Goodbye World!", 23) 
};

ae2f_Map_add_(&a, p);
ae2f_Map_pop(&a);
```

## void ae2f_Map_free(struct ae2f_Map* _this); <d id="free"></d>
will reset this map `_this`.
```c
struct ae2f_Map a; ae2f_Map_init(&a);
struct ae2f_Pair p = {
	ae2f_Dynamic_init_("Hello World!", 15),
	ae2f_Dynamic_init_("Goodbye World!", 23) 
};

ae2f_Map_add_(&a, p);
ae2f_Map_free(&a);
```
