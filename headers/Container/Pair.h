#pragma once
#ifndef AE2F_PAIR
#ifndef AE2F_DYNAMIC
#include "Dynamic.h"
#endif // !AE2F_DYNAMIC

#ifdef AE2F_DYNAMIC
#define AE2F_PAIR

typedef struct ae2f_Pair {
	struct ae2f_Dynamic c;
	union ae2f_Unit val;
}* ptr_ae2f_Pair;

typedef struct ae2f_Dynamic ae2f_Dynamic_owned;

/// <param name="a">: pair</param>
/// <param name="b">: key</param>
/// <param name="c">: value</param>
AE2F_CPP_PREFIX AE2F struct ae2f_Pair* ae2f_Pair(
	struct ae2f_Pair* a,	// pair
	struct ae2f_Dynamic* b,	// key
	struct ae2f_Dynamic* c	// value
);

/// <param name="a">: pair</param>
/// <param name="b">: key</param>
/// <param name="c">: length key</param>
/// <param name="d">: value</param>
/// <param name="e">: length value</param>
AE2F_CPP_PREFIX AE2F struct ae2f_Pair* ae2f_Pair_(
	struct ae2f_Pair* a,	// pair
	void* b,				// key
	uint64_t c,				// length key
	void* d,				// value
	uint64_t e				// length value
);

/// <param name="a">: pair to be freed</param>
AE2F_CPP_PREFIX AE2F struct ae2f_Pair* ae2f_Pair_free(
	struct ae2f_Pair* a		// pair to be freed
);

/// <param name="a">: pair</param>
/// <param name="b">: value to be compared</param>
/// <param name="c">: value on 1 otherwise key</param>
AE2F_CPP_PREFIX AE2F int8_t ae2f_Pair_weigh(
	struct ae2f_Pair* a,	// pair
	struct ae2f_Dynamic* b,	// value to be compared
	int8_t c				// value on 1 otherwise key
);

/// <param name="a">: pair to be set</param>
/// <param name="b">: value to set</param>
/// <param name="c">: value on 1 otherwise key</param>
AE2F_CPP_PREFIX AE2F struct ae2f_Pair* ae2f_Pair_set(
	struct ae2f_Pair* a,	// pair to be set
	struct ae2f_Dynamic* b,	// value to set
	int8_t c				// value on 1 otherwise key
);

/// <param name="a">: pair to get</param>
/// <param name="b">: value on 1 otherwise key</param>
AE2F_CPP_PREFIX AE2F ae2f_Dynamic_owned ae2f_Pair_get(
	struct ae2f_Pair* a,	// pair to get
	int8_t b				// value on 1 otherwise key
);

/// <param name="a">: source</param>
/// <param name="b">: destination</param>
AE2F_CPP_PREFIX AE2F struct ae2f_Pair* ae2f_Pair_copy(
	struct ae2f_Pair* a,	// source
	struct ae2f_Pair* b		// destination
);
#endif // AE2F_DYNAMIC
#endif // !AE2F_PAIR
