#pragma once
#ifndef AE2F_MAP
#define AE2F_MAP
#ifndef AE2F_PAIR
#include "Pair.h"
#endif // !AE2F_PAIR
#ifdef AE2F_PAIR

typedef struct ae2f_Map {
	struct ae2f_Dynamic pairs;
	uint64_t len;
	uint64_t _amp; uint64_t _div;
}* ptr_ae2f_Map;



/// <param name="a">: map to be initialised</param>
AE2F_CPP_PREFIX AE2F struct ae2f_Map* ae2f_Map(
	struct ae2f_Map* a	// map to be initialised
);

/// <param name="a">: map</param>
/// <param name="b">: key to search</param>
AE2F_CPP_PREFIX AE2F struct ae2f_Pair* ae2f_Map_at(
	struct ae2f_Map* a,		// map
	struct ae2f_Dynamic* b	// key to search
);

/// <param name="a">: map</param>
/// <param name="b">: key to add</param>
/// <param name="c">: value to add</param>
AE2F_CPP_PREFIX AE2F struct ae2f_Map* ae2f_Map_add(
	struct ae2f_Map* a,		// map
	struct ae2f_Dynamic* b,	// key to add
	struct ae2f_Dynamic* c	// value to add
);

/// <param name="a">: map</param>
/// <param name="b">: pointer to be dead</param>
AE2F_CPP_PREFIX AE2F struct ae2f_Map* ae2f_Map_del(
	struct ae2f_Map* a,	// map 
	struct ae2f_Pair* b	// pointer to be dead
);

/// <param name="a">: map</param>
AE2F_CPP_PREFIX AE2F struct ae2f_Map* ae2f_Map_free(
	struct ae2f_Map* a	// map
);

/// <param name="a">: source</param>
/// <param name="b">: destination</param>
AE2F_CPP_PREFIX AE2F struct ae2f_Map* ae2f_Map_copy(
	struct ae2f_Map* a,	// source
	struct ae2f_Map* b	// destination
);
#endif // AE2F_PAIR
#endif // !AE2F_MAP