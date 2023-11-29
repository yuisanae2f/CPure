#pragma once
#ifndef AE2F_PAIR
#ifndef AE2F_DYNAMIC
#include "Dynamic.h"
#endif // !AE2F_DYNAMIC

#ifdef AE2F_DYNAMIC
#define AE2F_PAIR
AE2F struct ae2f_Pair {
	struct ae2f_Dynamic c;
	union ae2f_Unit val;
};

AE2F struct ae2f_Pair* ae2f_Pair(struct ae2f_Pair* _this, struct ae2f_Dynamic key, struct ae2f_Dynamic value);
AE2F struct ae2f_Pair* ae2f_Pair_(struct ae2f_Pair* _this, void* key, unsigned long long kLen, void* val, unsigned long long vLen);
AE2F struct ae2f_Pair* ae2f_Pair_free(struct ae2f_Pair* _this);
AE2F char ae2f_Pair_weigh(struct ae2f_Pair p1, struct ae2f_Dynamic p2, char where);
AE2F struct ae2f_Pair* ae2f_Pair_re(struct ae2f_Pair* _this, struct ae2f_Dynamic val);

#endif // AE2F_DYNAMIC
#endif // !AE2F_PAIR
