#pragma once
#ifndef AE2F_MAP
#define AE2F_MAP(name) struct ae2f_Map name; ae2f_Map_init(&name);
#ifndef AE2F_DYNAMIC
#include "Dynamic.h"
#endif // !AE2F_DYNAMIC
#ifdef AE2F_DYNAMIC

struct ae2f_Pair {
	struct ae2f_Dynamic key;
	struct ae2f_Dynamic value;
};

struct ae2f_Map {
	char hV;
	struct ae2f_Pair kv;
	struct ae2f_Map* pre;
	struct ae2f_Map* next;
	struct ae2f_Map* first;
	struct ae2f_Map* end;
};

AE2F void ae2f_Map_init(struct ae2f_Map*);
AE2F struct ae2f_Map* ae2f_Map_pop(struct ae2f_Map*);
AE2F void ae2f_Map_free(struct ae2f_Map*);
AE2F struct ae2f_Map* ae2f_Map_visit(struct ae2f_Map*, struct ae2f_Dynamic);
AE2F void ae2f_Map_add(struct ae2f_Map*, struct ae2f_Dynamic, struct ae2f_Dynamic);
AE2F void ae2f_Map_add_(struct ae2f_Map*, struct ae2f_Pair);
AE2F struct ae2f_Dynamic ae2f_Map_at(struct ae2f_Map*, struct ae2f_Dynamic);
#endif // AE2F_DYNAMIC
#endif // !AE2F_MAP