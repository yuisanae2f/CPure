#ifndef AE2F_CONTEXT

#ifndef AE2F_DYNAMIC
#include "Dynamic.h"
#endif // !AE2F_DYNAMIC

struct ae2f_Context {
	struct ae2f_Dynamic c;
	unsigned long long len;
	unsigned long long _amp; unsigned long long _div;
};

AE2F struct ae2f_Context* ae2f_Context(struct ae2f_Context* _this);
AE2F struct ae2f_Dynamic* ae2f_Context_malloc(struct ae2f_Context* _this, unsigned long long len);
AE2F struct ae2f_Context* ae2f_Context_free(struct ae2f_Context* _this);

#endif // !AE2F_CONTEXT