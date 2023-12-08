#pragma once
#ifndef AE2F_DLLMAKER_PORT
#ifndef _WINDOWS_
#include <Windows.h>
#endif // !_WINDOWS_

#ifndef AE2F_CONTAINER
#include "../Container.h"
#endif // !AE2F_CONTAINER

#ifdef AE2F_CONTAINER
#define AE2F_DLLMAKER_CONTAINER

AE2F struct ae2f_DllMaker_Port {
	HINSTANCE dll;
	const char* path;
	struct ae2f_File files[2]; // header, names
};

AE2F struct ae2f_DllMaker_Port* ae2f_DllMaker_Port(struct ae2f_DllMaker_Port* _this, const char* dll, const char* header, const char* names);
AE2F struct ae2f_DllMaker_Port* ae2f_DllMaker_Port_Dynamic(struct ae2f_DllMaker_Port* _this, struct ae2f_Dynamic dy);

#endif // AE2F_CONTAINER
#endif // !AE2F_DLLMAKER_PORT