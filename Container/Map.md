# <a href="../Container.md">ae2f</a>_<a href="./Dynamic.md">Dynamic</a>
is needed for generic datatype for unordered map.

# <a href="../Container.md">ae2f</a>_Pair
```c
struct ae2f_Pair {
	struct ae2f_Dynamic key;
	struct ae2f_Dynamic value;
};
```
is to bond two of data on same place.

# <a href="../Container.md">ae2f</a>_Map
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

provides the map, which key 

initialiser function will take the pointer and make it ready.

## void ae2f_Map_init(struct ae2f_Map* i);
is the constructor of the given structure `ae2f_Map`.

## struct ae2f_Map* ae2f_Map_pop(struct ae2f_Map* _this);
will delete the endpoint for `_this.end`.

## void ae2f_Map_free(struct ae2f_Map* _this);
will reset this map `_this`.

## struct ae2f_Map* ae2f_Map_visit(struct ae2f_Map* _this, struct ae2f_Dynamic key);
returns the address where the `key` matches the one certain structure `_this` has.  
returns 0 if `key` has not been found.

## void ae2f_Map_add(struct ae2f_Map* _this, struct ae2f_Dynamic key, struct ae2f_Dynamic value);
will add this map `_this` a pair of value.

## struct ae2f_Dynamic ae2f_Map_at(struct ae2f_Map* _this, struct ae2f_Dynamic key);
returns the value where the `key` matches the one certain structure `_this` has.  
has an error when `key` has not been found.