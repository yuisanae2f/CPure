#pragma once
#ifndef AE2F_DICE_MANAGED

#ifndef AE2F_DICE_DICE
#include "Dice.h"
#endif // !AE2F_DICE_DICE

#ifdef AE2F_DICE_DICE
#define AE2F_DICE_MANAGED

AE2F_CPP_PREFIX AE2F unsigned long long ae2f_Dice_Managed(struct ae2f_Dice* _this, unsigned long long* arr, unsigned long long len);

#endif // AE2F_DICE_DICE
#endif // !AE2F_DICE_MANAGED
