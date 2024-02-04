#pragma once
#ifndef AE2F_ARIADNE_CPP
#define AE2F_CPP

#ifndef AE2F_IGNORE_MISSINGS
#include "../headers/Ariadne.h"
#include "Container.h"
#endif // !AE2F_IGNORE_MISSINGS

#ifdef AE2F_PATH_CPP
#pragma comment(lib, AE2F_PATH_CPP "/pAriadne")
#endif // AE2F_PATH_C

#define AE2F_ARIADNE_CPP
#include "Ariadne/String.h"
#include "Ariadne/Niddle.h"
#endif // !AE2F_ARIADNE_CPP
