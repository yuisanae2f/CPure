#pragma once
#ifndef AE2F_PAIR
#ifndef AE2F_DYNAMIC
#include "Dynamic.h"
#endif // !AE2F_DYNAMIC

#ifdef AE2F_DYNAMIC
#define AE2F_PAIR

struct ae2f_Pair {
	struct ae2f_Dynamic c;
	union ae2f_Unit val;
};

typedef struct ae2f_Dynamic ae2f_Dynamic_owned;

AE2F_CPP_PREFIX AE2F struct ae2f_Pair* ae2f_Pair(struct ae2f_Pair* _this, struct ae2f_Dynamic* key, struct ae2f_Dynamic* value);
AE2F_CPP_PREFIX AE2F struct ae2f_Pair* ae2f_Pair_(struct ae2f_Pair* _this, void* key, uint64_t kLen, void* val, uint64_t vLen);
AE2F_CPP_PREFIX AE2F struct ae2f_Pair* ae2f_Pair_free(struct ae2f_Pair* _this);
AE2F_CPP_PREFIX AE2F int8_t ae2f_Pair_weigh(struct ae2f_Pair* p1, struct ae2f_Dynamic* p2, int8_t where);
AE2F_CPP_PREFIX AE2F struct ae2f_Pair* ae2f_Pair_set(struct ae2f_Pair* _this, struct ae2f_Dynamic* val, int8_t where);
AE2F_CPP_PREFIX AE2F ae2f_Dynamic_owned ae2f_Pair_get(struct ae2f_Pair* _this, int8_t where);
AE2F_CPP_PREFIX AE2F struct ae2f_Pair* ae2f_Pair_copy(struct ae2f_Pair* _this, struct ae2f_Pair* dest);
#endif // AE2F_DYNAMIC
#endif // !AE2F_PAIR
