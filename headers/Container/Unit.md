# <a href="../Dice.md#Unit">ae2f</a>_Unit
```c
union ae2f_Unit {
	void* raw;

	char* bt1;
	unsigned char* ubt1;

	short* bt2;
	unsigned short* ubt2;

	int* bt4;
	unsigned int* ubt4;

	long long* bt8;
	unsigned long long* ubt8;

	long long num;
	unsigned long long unum;
};
```
is the slicer for a `pointer`.  
has members share their data each other.
```c
union ae2f_Unit un = {4};
un.bt8 == un.ubt1;	// 1, true
```