#ifndef AE2F
#ifdef AE2F_EXPORT
#define AE2F __declspec(dllexport)
#else
#define AE2F __declspec(dllimport)
#endif // AE2F_EXPORT
#endif // !AE2F
#ifndef AE2F_UNIT
#define AE2F_UNIT

#ifndef AE2F_CPP_PREFIX
#ifdef AE2F_CPP
#define AE2F_CPP_PREFIX extern "C"
#else
#define AE2F_CPP_PREFIX
#endif // AE2F_CPP
#endif // !AE2F_CPP_PREFIX

AE2F_CPP_PREFIX AE2F union ae2f_Unit {
	void* raw;

	char* bt1;
	unsigned char* ubt1;

	short* bt2;
	unsigned short* ubt2;

	int* bt4;
	unsigned int* ubt4;

	long long* bt8;
	unsigned long long* ubt8;

	long long num;
	unsigned long long unum;
};

#endif // !AE2F_UNIT