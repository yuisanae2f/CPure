# #include
## <a href="../Dice.md#Dice">ae2f</a>_<a href="./Dice.md">Dice</a>
generates the random number once initialised.

# <a href="../../README.md#Dice">ae2f</a>_<a href="../Dice.md#Dice">_Dice</a>_Managed
## unsigned long long ae2f_Dice_Managed(struct ae2f_Dice* _this, unsigned long long* arr, unsigned long long len);
receives the random number generator `_this` and an array `arr` as the length of `len`.  
Each component of `arr` will be its probability via which this function would select among the array `arr`.  
returns the index of the selected component from `arr`.
```c
struct ae2f_Dice dice;
unsigned long long score[] = { 0,0 };
ae2f_Dice_init(&dice, time(0));             // Set seed by current time
unsigned long long cnt = 0;

for (; !(score[0] == score[1] && score[0] == 2500);cnt++) {
    score[0] = score[1] = 0;
    for (unsigned long long i = 0; i < 5000; i++) {
        unsigned long long arr[] = { 1,1 }; // probability set
        unsigned long picked = ae2f_Dice_Managed(&dice, arr, 2);

        score[picked]++;
    }

    printf("result: ");

    for (int i = 0; i < 2; i++)
        printf("%d ", score[i]);            // Approximately 2500, 2500

    printf("\n");
} printf("\nDone! count: %d", cnt);
```