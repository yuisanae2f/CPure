#pragma once

#ifndef AE2F_CPP_PREFIX
#ifdef AE2F_CPP
#define AE2F_CPP_PREFIX extern "C"
#else
#define AE2F_CPP_PREFIX
#endif // AE2F_CPP
#endif // !AE2F_CPP_PREFIX

#ifndef AE2F_DICE_DICE
#define AE2F_DICE_DICE

#ifndef AE2F
#define AE2F __declspec(dllimport)
#endif // !AE2F

#include <stdint.h>

AE2F_CPP_PREFIX AE2F struct ae2f_Dice {
    uint32_t mt[624];
    int32_t mti;
};

/// <param name="a">: dice</param>
/// <param name="b">: seed</param>
AE2F_CPP_PREFIX AE2F struct ae2f_Dice* ae2f_Dice(
    struct ae2f_Dice* a,    // dice
    uint32_t b         // seed
);

/// <param name="a">: dice</param>
/// <param name="b">: seed array</param>
/// <param name="c">: seed array length</param>
AE2F_CPP_PREFIX AE2F struct ae2f_Dice* ae2f_Dice_(
    struct ae2f_Dice* a,    // dice
    uint32_t* b,       // seed array
    int32_t c                   // seed array length
);

/// <param name="a">: dice</param>
AE2F_CPP_PREFIX AE2F uint32_t ae2f_Dice_int32(
    struct ae2f_Dice* a // dice
);

/// <param name="a">: dice</param>
AE2F_CPP_PREFIX AE2F int32_t ae2f_Dice_int31(
    struct ae2f_Dice* a // dice
);

/// <param name="a">: dice</param>
AE2F_CPP_PREFIX AE2F double ae2f_Dice_real(
    struct ae2f_Dice* a // dice
);

/// <param name="a">: dice</param>
AE2F_CPP_PREFIX AE2F double ae2f_Dice_real_(
    struct ae2f_Dice* a // dice
);

/// <param name="a">: dice</param>
AE2F_CPP_PREFIX AE2F double ae2f_Dice_real_2(
    struct ae2f_Dice* a // dice
);

/// <param name="a">: dice</param>
AE2F_CPP_PREFIX AE2F double ae2f_Dice_res53(
    struct ae2f_Dice* a // dice
);

#endif // !AE2F_DICE_PLAIN