#pragma once
#ifndef AE2F_CONTAINER_FILE
#ifndef _INC_STDIO
#include <stdio.h>
#endif // !_INC_STDIO

#ifndef AE2F_DYNAMIC
#include "Dynamic.h"
#endif // !AE2F_DYNAMIC


#ifdef AE2F_DYNAMIC
#ifdef _INC_STDIO
#define AE2F_CONTAINER_FILE

AE2F_CPP_PREFIX AE2F struct ae2f_File {
	const char* path;
	unsigned long long len;
	unsigned long long off;
	FILE* fp; char mode;
};

AE2F_CPP_PREFIX AE2F struct ae2f_File* ae2f_File(struct ae2f_File* _this, const char* path);
AE2F_CPP_PREFIX AE2F struct ae2f_File* ae2f_File_create(struct ae2f_File* _this);
AE2F_CPP_PREFIX AE2F struct ae2f_File* ae2f_File_open(struct ae2f_File* _this, char mode);
AE2F_CPP_PREFIX AE2F unsigned long long ae2f_File_read(struct ae2f_File* _this, struct ae2f_Dynamic* buff);
AE2F_CPP_PREFIX AE2F unsigned long long ae2f_File_write(struct ae2f_File* _this, struct ae2f_Dynamic buff);
AE2F_CPP_PREFIX AE2F struct ae2f_File* ae2f_File_close(struct ae2f_File* _this);

#endif // _INC_STDIO
#endif // AE2F_DYNAMIC
#endif // !AE2F_FILE