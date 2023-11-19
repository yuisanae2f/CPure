#ifndef AE2F_CONTEXT
#define AE2F_CONTEXT

#ifndef AE2F_DYNAMIC
#include "Dynamic.h"
#endif // !AE2F_DYNAMIC

struct ae2f_Context {
	struct ae2f_Dynamic c;
	struct ae2f_Context* nxt;
	struct ae2f_Context* end;
};

struct ae2f_Context* ae2f_Context_init(struct ae2f_Context*);
void* ae2f_Context_malloc(struct ae2f_Context*, unsigned long long);
struct ae2f_Dynamic ae2f_Context_malloc_(struct ae2f_Context*, unsigned long long);
void ae2f_Context_free(struct ae2f_Context*);
struct ae2f_Context ae2f_Context_free_(struct ae2f_Context);
#include "Context.c"
#endif // !AE2F_CONTEXT