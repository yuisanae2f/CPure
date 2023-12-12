#pragma once
#ifndef AE2F_DICE_DICE
#define AE2F_DICE_DICE

#ifndef AE2F
#ifdef AE2F_EXPORT
#define AE2F __declspec(dllexport)
#else
#define AE2F __declspec(dllimport)
#endif // AE2F_EXPORT
#endif // !AE2F

AE2F struct ae2f_Dice {
    unsigned long mt[624];
    int mti;
};

AE2F struct ae2f_Dice* ae2f_Dice_init(struct ae2f_Dice* _this, unsigned long s);
AE2F struct ae2f_Dice* ae2f_Dice_init_(struct ae2f_Dice* _this, unsigned long* seed, int len);
AE2F unsigned long ae2f_Dice_int32(struct ae2f_Dice* _this);
AE2F long ae2f_Dice_int31(struct ae2f_Dice* _this);
AE2F double ae2f_Dice_real(struct ae2f_Dice* _this);
AE2F double ae2f_Dice_real_(struct ae2f_Dice* _this);
AE2F double ae2f_Dice_real_2(struct ae2f_Dice* _this);
AE2F double ae2f_Dice_res53(struct ae2f_Dice* _this);

#endif // !AE2F_DICE_PLAIN