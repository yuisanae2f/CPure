#pragma once
#ifndef AE2F_PRINTER_SETTINGS
#define AE2F_PRINTER_SETTINGS

__declspec(dllimport) const char** ae2f_Printer_PlaceHolders(unsigned long long where, unsigned long long off);
__declspec(dllimport) char* ae2f_Printer_Method(unsigned long long where);

#endif // !AE2F_PRINTER_SETTINGS