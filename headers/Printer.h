#pragma once
#ifndef AE2F_PRINTER

#ifndef AE2F_CONTAINER
#ifndef AE2F_IGNORE_MISSINGS
#include "./Container.h"
#endif // !AE2F_IGNORE_MISSINGS
#endif // !AE2F_CONTAINER

#ifdef AE2F_CONTAINER
#define AE2F_PRINTER
 
#ifdef AE2F_PATH_C
#pragma comment(lib, AE2F_PATH_C "/Printer")
#endif // AE2F_PATH_C

#ifndef AE2F_CPP_PREFIX
#ifdef AE2F_CPP
#define AE2F_CPP_PREFIX extern "C"
#else
#define AE2F_CPP_PREFIX
#endif // AE2F_CPP
#endif // !AE2F_CPP_PREFIX

#include "Printer/Settings.h"
#include "Printer/Container.h"
#include "Printer/Enum.h"

#endif // AE2F_CONTAINER
#endif // !AE2F_PRINTER