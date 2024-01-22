#pragma once
#ifndef AE2F_CONTAINER_CPP

#ifndef AE2F_CPP
#define AE2F_CPP
#endif // !AE2F_CPP


#ifndef AE2F_IGNORE_MISSINGS
#include "../headers/Container.h"
#endif // !AE2F_IGNORE_MISSINGS

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