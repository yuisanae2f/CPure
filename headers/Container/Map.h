#pragma once
#ifndef AE2F_MAP
#define AE2F_MAP
#ifndef AE2F_DYNAMIC
#include "Dynamic.h"
#endif // !AE2F_DYNAMIC
#ifdef AE2F_DYNAMIC

struct ae2f_Map {
	struct ae2f_Dynamic pairs;
	unsigned long long len;
	unsigned long long _amp; unsigned long long _div;
};

AE2F struct ae2f_Map* ae2f_Map(struct ae2f_Map* _this);
AE2F struct ae2f_Pair* ae2f_Map_at(struct ae2f_Map* _this, struct ae2f_Dynamic key);
AE2F struct ae2f_Map* ae2f_Map_add(struct ae2f_Map* _this, struct ae2f_Dynamic k, struct ae2f_Dynamic v);
AE2F struct ae2f_Map* ae2f_Map_free(struct ae2f_Map* _this);
#endif // AE2F_DYNAMIC
#endif // !AE2F_MAP