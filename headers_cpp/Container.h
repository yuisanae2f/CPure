#pragma once
#ifndef AE2F_CONTAINER_CPP

#ifndef AE2F_CPP
#define AE2F_CPP
#endif // !AE2F_CPP

#ifndef AE2F_CONTAINER
#define AE2F_CONTAINER
#ifdef AE2F_PATH_C
#pragma comment(lib, AE2F_PATH_C "/Container")
#endif // AE2F_PATH_C
#endif // !AE2F_CONTAINER


#ifdef AE2F_PATH_CPP
#pragma comment(lib, AE2F_PATH_CPP "/pContainer")
#endif // AE2F_PATH_C

#define AE2F_CONTAINER_CPP
#include "Container/Unit.h"
#include "Container/Dynamic.h"
#include "Container/Pair.h"
#include "Container/Map.h"
#include "Container/Dimension.h"
#endif // !AE2F_CONTAINER_CPP