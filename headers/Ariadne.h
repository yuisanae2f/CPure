#pragma once

#ifndef AE2F_ARIADNE
#define AE2F_ARIADNE

#ifdef AE2F_CPP
#define AE2F_PREFIX_CPP extern "C"
#endif

#ifdef AE2F_PATH_C
#pragma comment(lib, AE2F_PATH_C "/Ariadne")
#endif // AE2F_PATH_C

#include "Ariadne/String.h"
#include "Ariadne/Niddle.h"

#endif // !AE2F_ARIADNE