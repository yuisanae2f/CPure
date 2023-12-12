#pragma once

#ifndef AE2F_FILE

#ifndef AE2F_CONTAINER
#include "./Container.h"
#endif // !AE2F_CONTAINER

#ifdef AE2F_CONTAINER
#define AE2F_FILE

#ifdef AE2F_PATH_C
#pragma comment(lib, AE2F_PATH_C "/File")
#endif // AE2F_PATH_C

#include "File/Container.h"
#endif // AE2F_CONTAINER
#endif // !AE2F_FILE