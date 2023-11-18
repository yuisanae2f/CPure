// #include "Dynamic.h"
#ifdef AE2F_DYNAMIC
struct ae2f_Dynamic ae2f_Dynamic_init(unsigned long long len) {
	struct ae2f_Dynamic rtn;
	rtn.c = malloc(len);
	rtn.len = len;
	return rtn;
}
struct ae2f_Dynamic ae2f_Dynamic_init_(void* val, unsigned long long len) {
	struct ae2f_Dynamic rtn = ae2f_Dynamic_init(len);
	for (unsigned long long i = 0; i < len; i++)
		((char*)rtn.c)[i] = ((char*)val)[i];
	return rtn;
}
struct ae2f_Dynamic ae2f_Dynamic_copy(struct ae2f_Dynamic _this) {
	struct ae2f_Dynamic rtn = ae2f_Dynamic_init(_this.len);
	for (unsigned long long i = 0; i < rtn.len; i++)
		((char*)rtn.c)[i] = ((char*)_this.c)[i];

	return rtn;
}
void ae2f_Dynamic_re(struct ae2f_Dynamic* _this, unsigned long long len) {
	typedef unsigned long long ull;
	void* _new = malloc(len);

	ull c = 0;

	for (; c < len && c < _this->len; ((char*)(_new))[c] = ((char*)(_this->c))[c++]) {}
	for (; c < len; ((char*)(_new))[c++] = 0) {}

	_this->len = len;
	_this->c = _new;

	free(_this->c);
	return;
}
void ae2f_Dynamic_free(struct ae2f_Dynamic* _this) { free(_this->c); _this->len = 0; }
unsigned long long ae2f_Dynamic_nEqual(struct ae2f_Dynamic _this, struct ae2f_Dynamic another) {
	typedef unsigned long long ull;
	typedef struct ae2f_Dynamic arr;

	ull rtn = 0;

	arr a[2]; ull i = 0;
	char cond = _this.len > another.len;

	a[cond] = _this; a[!cond] = another;

	for (; i < a->len; rtn += (((char*)(_this.c))[i] != ((char*)(another.c))[i++])) {}
	for (; i < a[1].len; rtn += (((char*)a[1].c)[i++]) != 0) {}

	return rtn;
}
char ae2f_Dynamic_equal(struct ae2f_Dynamic _this, struct ae2f_Dynamic another) {
	switch (_this.len == another.len)
	{
	case 0:
		return 0;

	default:
		break;
	}
	unsigned long long i = 0;
	for (; i < _this.len && ((char*)(_this.c))[i] == ((char*)(another.c))[i]; i++) {}
	return i == _this.len;
}
#endif // AE2F_CONTAINER_ARRAY
