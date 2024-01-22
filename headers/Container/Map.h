#pragma once
#ifndef AE2F_MAP
#define AE2F_MAP
#ifndef AE2F_PAIR
#include "Pair.h"
#endif // !AE2F_PAIR
#ifdef AE2F_PAIR

struct ae2f_Map {
	struct ae2f_Dynamic pairs;
	uint64_t len;
	uint64_t _amp; uint64_t _div;
};

AE2F_CPP_PREFIX AE2F struct ae2f_Map* ae2f_Map(struct ae2f_Map* _this);
AE2F_CPP_PREFIX AE2F struct ae2f_Pair* ae2f_Map_at(struct ae2f_Map* _this, struct ae2f_Dynamic* key);
AE2F_CPP_PREFIX AE2F struct ae2f_Map* ae2f_Map_add(struct ae2f_Map* _this, struct ae2f_Dynamic* k, struct ae2f_Dynamic* v);
AE2F_CPP_PREFIX AE2F struct ae2f_Map* ae2f_Map_del(struct ae2f_Map* _this, struct ae2f_Pair* wh);
AE2F_CPP_PREFIX AE2F struct ae2f_Map* ae2f_Map_free(struct ae2f_Map* _this);
AE2F_CPP_PREFIX AE2F struct ae2f_Map* ae2f_Map_copy(struct ae2f_Map* _this, struct ae2f_Map* dest);
#endif // AE2F_PAIR
#endif // !AE2F_MAP