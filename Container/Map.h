#ifndef AE2F_MAP
#ifndef AE2F_DYNAMIC
#include "Dynamic.h"
#endif // !AE2F_DYNAMIC

#ifdef AE2F_DYNAMIC
#define AE2F_MAP

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

void ae2f_Map_init(struct ae2f_Map* i);
struct ae2f_Map* ae2f_Map_pop(struct ae2f_Map* _this);
void ae2f_Map_free(struct ae2f_Map* _this);
struct ae2f_Map* ae2f_Map_visit(struct ae2f_Map* _this, struct ae2f_Dynamic key);
void ae2f_Map_add(struct ae2f_Map* _this, struct ae2f_Dynamic key, struct ae2f_Dynamic value);
struct ae2f_Dynamic ae2f_Map_at(struct ae2f_Map* _this, struct ae2f_Dynamic key);


#include "Map.c"
#endif // AE2F_DYNAMIC
#endif // !AE2F_MAP
