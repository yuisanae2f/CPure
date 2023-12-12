# <a href="../Dice.md#Dice">ae2f</a>_Dice
```c
struct ae2f_Dice {
    unsigned long mt[624];
    int mti;
};
```
generates the random number by <a href="https://en.wikipedia.org/wiki/Mersenne_Twister#Pseudocode">`Mersenne Twister`</a>.

## struct ae2f_Dice* ae2f_Dice_init(struct ae2f_Dice* _this, unsigned long seed);
initialises the given structure `_this` with a `seed`.
```c
struct ae2f_Dice dice;
ae2f_Dice_init(&dice, time(0)); // initiailising with the current time.
```

## struct ae2f_Dice* ae2f_Dice_init_(struct ae2f_Dice* _this, unsigned long* seed, int len);
initialises the given structure `_this` with a array of `seed` as a length of `len`.
```c
struct ae2f_Dice dice;
unsigned int a[] = { 1,2,3,4,5,5,6,67,23 };
ae2f_Dice_init_(&dice, a, 9);
```

## unsigned long ae2f_Dice_int32(struct ae2f_Dice* _this);
generates the random number of `unsigned long` from `_this`.
```c
struct ae2f_Dice dice;
ae2f_Dice_init(&dice, time(0)); // initiailising with the current time.

printf("%ul", ae2f_Dice_int32(&dice));
```

## long ae2f_Dice_int31(struct ae2f_Dice* _this);
generates the random number of `long` from `_this`.
```c
struct ae2f_Dice dice;
ae2f_Dice_init(&dice, time(0)); // initiailising with the current time.

printf("%d", ae2f_Dice_int31(&dice));
```


## double ae2f_Dice_real(struct ae2f_Dice* _this);
generates the random number of `double` from `_this`.
```c
struct ae2f_Dice dice;
ae2f_Dice_init(&dice, time(0)); // initiailising with the current time.

printf("%f", ae2f_Dice_real(&dice));
```

## double ae2f_Dice_real_(struct ae2f_Dice* _this);
generates the random number of `double` from `_this`.
```c
struct ae2f_Dice dice;
ae2f_Dice_init(&dice, time(0)); // initiailising with the current time.

printf("%f", ae2f_Dice_real_(&dice));
```

## double ae2f_Dice_real_2(struct ae2f_Dice* _this);
generates the random number of `double` from `_this`.
```c
struct ae2f_Dice dice;
ae2f_Dice_init(&dice, time(0)); // initiailising with the current time.

printf("%f", ae2f_Dice_real_2(&dice));
```

## double ae2f_Dice_res53(struct ae2f_Dice* _this);
generates the random number of `double` from `_this`.
```c
struct ae2f_Dice dice;
ae2f_Dice_init(&dice, time(0)); // initiailising with the current time.

printf("%f", ae2f_Dice_res53(&dice));
```