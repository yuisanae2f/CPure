#ifndef AE2F_CONTEXT

#ifndef AE2F_DYNAMIC
#include "Dynamic.h"
#endif // !AE2F_DYNAMIC

struct ae2f_Context {
	struct ae2f_Dynamic c;
	struct ae2f_Context* nxt;
	struct ae2f_Context* end;
};

AE2F struct ae2f_Context* ae2f_Context_init(struct ae2f_Context*);
AE2F void* ae2f_Context_malloc(struct ae2f_Context*, unsigned long long);
AE2F void ae2f_Context_free(struct ae2f_Context*);
AE2F struct ae2f_Context ae2f_Context_free_(struct ae2f_Context);

#define AE2F_CONTEXT(name) struct ae2f_Context name; ae2f_Context_init(&name);
#define AE2F_CONTEXT_MALLOC(name, type, count) (type*)ae2f_Context_malloc(&name, sizeof(type) * count)
#define AE2F_CONTEXT_USING(name, ...) { AE2F_CONTEXT(name) __VA_ARGS__ ae2f_Context_free(&name); }
#endif // !AE2F_CONTEXT