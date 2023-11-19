#ifndef AE2F_DYNAMIC
#define AE2F_DYNAMIC

#ifndef _INC_STDLIB
#include <stdlib.h>
#endif // !_INC_STDLIB

struct ae2f_Dynamic {
	void* c;
	unsigned long long len;
};

struct ae2f_Dynamic ae2f_Dynamic_init(unsigned long long);
struct ae2f_Dynamic ae2f_Dynamic_init_(void*, unsigned long long);
struct ae2f_Dynamic ae2f_Dynamic_copy(struct ae2f_Dynamic);
void ae2f_Dynamic_re(struct ae2f_Dynamic*, unsigned long long);
void ae2f_Dynamic_free(struct ae2f_Dynamic*);
unsigned long long ae2f_Dynamic_nEqual(struct ae2f_Dynamic, struct ae2f_Dynamic);
char ae2f_Dynamic_equal(struct ae2f_Dynamic, struct ae2f_Dynamic);

#include "Dynamic.c"

#endif // !AE2F_CONTAINER_ARRAY