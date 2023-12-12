#pragma once
#ifndef AE2F_PRINTER_CONTAINER
#ifndef AE2F_CONTAINER
#ifndef AE2F_PRINTER_IGNORE_MISSING
#include "../Container.h"
#endif // !AE2F_PRINTER_IGNORE_MISSING
#endif // !AE2F_CONTAINER

#ifdef AE2F_CONTAINER
#define AE2F_PRINTER_CONTAINER
AE2F void ae2f_Dynamic_print(struct ae2f_Dynamic _this);
AE2F void ae2f_Pair_print(struct ae2f_Pair _this);
AE2F void ae2f_Map_print(struct ae2f_Map _this);
#endif // AE2F_CONTAINER
#endif // !AE2F_PRINTER_CONTAINER