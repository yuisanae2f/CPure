#ifndef AE2F_CONTEXT
#ifndef AE2F_DYNAMIC
#include "Dynamic.h"
#endif // !AE2F_DYNAMIC
#ifdef AE2F_DYNAMIC
#define AE2F_CONTEXT

struct ae2f_Context {
	struct ae2f_Dynamic c;
	uint64_t len;
	uint64_t _amp; uint64_t _div;
};

AE2F_CPP_PREFIX AE2F struct ae2f_Context* ae2f_Context(struct ae2f_Context* _this);
AE2F_CPP_PREFIX AE2F struct ae2f_Dynamic* ae2f_Context_malloc(struct ae2f_Context* _this, uint64_t len);
AE2F_CPP_PREFIX AE2F struct ae2f_Context* ae2f_Context_free(struct ae2f_Context* _this);
#endif // AE2F_DYNAMIC
#endif // !AE2F_CONTEXT