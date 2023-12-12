#pragma once
#ifndef AE2F_CONTAINER_FILE
#ifndef AE2F_PAIR
#include "Pair.h"
#endif // !AE2F_PAIR

#ifndef _INC_STDIO
#include <stdio.h>
#endif // !_INC_STDIO

#ifdef AE2F_PAIR
#ifdef _INC_STDIO
#define AE2F_CONTAINER_FILE

AE2F struct ae2f_File {
	const char* path;
	unsigned long long len;
	unsigned long long off;
	FILE* fp; char mode;
};

AE2F struct ae2f_File* ae2f_File(struct ae2f_File* _this, const char* path);
AE2F struct ae2f_File* ae2f_File_open(struct ae2f_File* _this, char mode);
AE2F unsigned long long ae2f_File_read(struct ae2f_File* _this, struct ae2f_Dynamic* buff);
AE2F unsigned long long ae2f_File_write(struct ae2f_File* _this, struct ae2f_Dynamic buff);
AE2F struct ae2f_File* ae2f_File_close(struct ae2f_File* _this);

#endif // _INC_STDIO
#endif // AE2F_PAIR
#endif // !AE2F_FILE