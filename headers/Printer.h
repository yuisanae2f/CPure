#pragma once
#ifndef AE2F_PRINTER

#ifndef AE2F_CONTAINER
#include "./Container.h"
#endif // !AE2F_CONTAINER

#ifdef AE2F_CONTAINER
#define AE2F_PRINTER

#ifdef AE2F_PATH_C
#pragma comment(lib, AE2F_PATH_C "/Printer")
#endif // AE2F_PATH_C

#include "Printer/Settings.h"
#include "Printer/Container.h"
#include "Printer/Enum.h"

#endif // AE2F_CONTAINER
#endif // !AE2F_PRINTER