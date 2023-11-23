#pragma once
#include <stdio.h>

#ifndef AE2F
#ifdef AE2F_EXPORT
#define AE2F __declspec(dllexport)
#else
#define AE2F __declspec(dllimport)
#endif // AE2F_EXPORT
#endif // !AE2F

#ifndef AE2F_DYNAMIC

#ifndef _INC_STDLIB
#include <stdlib.h>
#endif // !_INC_STDLIB

struct ae2f_Dynamic {
	void* c;
	unsigned long long len;
};

AE2F struct ae2f_Dynamic ae2f_Dynamic_init(unsigned long long);
AE2F struct ae2f_Dynamic ae2f_Dynamic_init_(void*, unsigned long long);
AE2F struct ae2f_Dynamic ae2f_Dynamic_copy(struct ae2f_Dynamic);
AE2F void ae2f_Dynamic_re(struct ae2f_Dynamic*, unsigned long long);
AE2F void ae2f_Dynamic_re_(struct ae2f_Dynamic*, void*, unsigned long long);
AE2F void ae2f_Dynamic_free(struct ae2f_Dynamic*);
AE2F struct ae2f_Dynamic ae2f_Dynamic_free_(struct ae2f_Dynamic);
AE2F unsigned long long ae2f_Dynamic_nEqual(struct ae2f_Dynamic, struct ae2f_Dynamic);
AE2F char ae2f_Dynamic_equal(struct ae2f_Dynamic, struct ae2f_Dynamic);
AE2F void* ae2f_Dynamic_find(struct ae2f_Dynamic, struct ae2f_Dynamic, unsigned long long);

#define AE2F_DYNAMIC(name, byte) struct ae2f_Dynamic name = ae2f_Dynamic_init(byte);
#define AE2F_DYNAMIC_(name, type, count) AE2F_DYNAMIC(name, sizeof(type) * count)
#define AE2F_DYNAMIC_CAST(name, type) ((type*)name.c)
#define AE2F_DYNAMIC_INIT(name, type, ...) struct ae2f_Dynamic name; { \
type arr##name[] = __VA_ARGS__; \
name = ae2f_Dynamic_init(sizeof(arr##name)); \
type* p##name = AE2F_DYNAMIC_CAST(name, type); \
for(unsigned long long i##name = 0; i##name < sizeof(arr##name); i##name += sizeof(type)) \
	*(p##name++) = arr##name[p##name - AE2F_DYNAMIC_CAST(name, type)]; \
}
#define AE2F_DYNAMIC_INIT_(name, type, count, ...) struct ae2f_Dynamic name; { \
type arr##name[] = __VA_ARGS__; \
name = ae2f_Dynamic_init(count * sizeof(type)); \
type* p##name = AE2F_DYNAMIC_CAST(name, type); \
unsigned long long i##name = 0;\
for(; i##name < sizeof(arr##name) && i##name < count; i##name++)\
	*(p##name++) = arr##name[p##name - AE2F_DYNAMIC_CAST(name, type)]; \
for(;i##name < count; i##name++) *(p##name++) = arr##name[p##name - AE2F_DYNAMIC_CAST(name, type)];\
}
#define AE2F_DYNAMIC_FOREACH(name, type, ...) {\
type* name##_pointer = AE2F_DYNAMIC_CAST(name, type); \
for(unsigned long long name##_i = 0; name##_i < name.len; name##_i += sizeof(type)) { \
__VA_ARGS__ name##_pointer++;}}
#define AE2F_DYNAMIC_USING(name, byte, ...) {AE2F_DYNAMIC(name, byte) __VA_ARGS__ ae2f_Dynamic_free(&name);}
#define AE2F_DYNAMIC_FIND(name, pointer, type, ignore, ...) { AE2F_DYNAMIC_INIT(name, type, ...); }
#define AE2F_DYNAMIC_AT(nest, pointer, type, ...) { \
unsigned long long arr[] = __VA_ARGS__; \
void* p##arr = nest; for(unsigned long long i##arr = 0; i##arr < sizeof(arr) / sizeof(unsigned long long) - 1; i##arr++)\
p##arr = ((void**)p##arr)[i##arr]; pointer = ((type*)p##arr) + arr[sizeof(arr) / sizeof(unsigned long long)];}

#endif // !AE2F_CONTAINER_ARRAY