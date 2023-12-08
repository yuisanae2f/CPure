#pragma once

#ifndef AE2F_DLLMAKER

#ifndef AE2F_CONTAINER
#include "Container.h"
#endif // !AE2F_CONTAINER

#ifdef AE2F_PATH_C
#pragma comment(lib, AE2F_PATH_C "/DllMaker")
#endif // AE2F_PATH_C

#ifdef AE2F_CONTAINER
#define AE2F_DLLMAKER
#include "DllMaker/Port.h"
#endif // AE2F_CONTAINER
#endif // !AE2F_DICE