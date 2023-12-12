#pragma once
#ifndef AE2F_FILE_EXPLORER
#ifndef AE2F_CONTAINER
#include "../Container.h"
#endif // !AE2F_CONTAINER

#ifndef _WINDOWS_
#include <Windows.h>
#endif // !_WINDOWS_

#ifdef AE2F_CONTAINER
#define AE2F_FILE_EXPLORER
AE2F struct ae2f_File_Explorer {
	const char* dir;
	HANDLE hv;
	WIN32_FIND_DATAA dir;
};



#endif // AE2F_CONTAINER
#endif // !AE2F_FILE_EXPLORER