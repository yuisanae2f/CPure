#pragma once

#ifndef AE2F_UNIT
#include "Unit.h"
#endif // !AE2F_UNIT


#ifdef AE2F_UNIT
#ifndef AE2F_DYNAMIC
#define AE2F_DYNAMIC

#ifndef _INC_STDLIB
#include <stdlib.h>
#endif // !_INC_STDLIB

struct ae2f_Dynamic {
	union ae2f_Unit c;
	uint64_t len;
};

AE2F_CPP_PREFIX AE2F struct ae2f_Dynamic* ae2f_Dynamic(struct ae2f_Dynamic* _this, uint64_t len);
AE2F_CPP_PREFIX AE2F struct ae2f_Dynamic* ae2f_Dynamic_(struct ae2f_Dynamic* _this, void* val, uint64_t len);
AE2F_CPP_PREFIX AE2F struct ae2f_Dynamic* ae2f_Dynamic_copy(struct ae2f_Dynamic* _this, struct ae2f_Dynamic* pos);
AE2F_CPP_PREFIX AE2F struct ae2f_Dynamic* ae2f_Dynamic_re(struct ae2f_Dynamic* _this, uint64_t len);
AE2F_CPP_PREFIX AE2F struct ae2f_Dynamic* ae2f_Dynamic_re_(struct ae2f_Dynamic* _this, void* arr, uint64_t len);
AE2F_CPP_PREFIX AE2F struct ae2f_Dynamic* ae2f_Dynamic_free(struct ae2f_Dynamic* _this);
AE2F_CPP_PREFIX AE2F union ae2f_Unit ae2f_Dynamic_find(struct ae2f_Dynamic* _this, struct ae2f_Dynamic* value, uint64_t toIgnore);
AE2F_CPP_PREFIX AE2F int8_t ae2f_Dynamic_weigh(struct ae2f_Dynamic* a, struct ae2f_Dynamic* b);
AE2F_CPP_PREFIX AE2F uint64_t ae2f_Dynamic_puts(struct ae2f_Dynamic* _this, struct ae2f_Dynamic* another, char fitToThis);
#endif // !AE2F_CONTAINER_ARRAY
#endif // AE2F_UNIT
