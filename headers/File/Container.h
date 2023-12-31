#pragma once

#ifndef AE2F_CPP_PREFIX
#ifdef AE2F_CPP
#define AE2F_CPP_PREFIX extern "C"
#else
#define AE2F_CPP_PREFIX
#endif // AE2F_CPP
#endif // !AE2F_CPP_PREFIX

#ifndef AE2F_FILE_CONTAINER
#ifndef AE2F_CONTAINER
#ifndef AE2F_IGNORE_MISSINGS
#include "../Container.h"
#endif // !AE2F_IGNORE_MISSINGS
#endif // !AE2F_CONTAINER

#ifdef AE2F_CONTAINER
#define AE2F_FILE_CONTAINER
AE2F_CPP_PREFIX AE2F unsigned long long ae2f_Dynamic_write(struct ae2f_Dynamic* _this, struct ae2f_File* opened);
AE2F_CPP_PREFIX AE2F unsigned long long ae2f_Dynamic_read(struct ae2f_Dynamic* _this, struct ae2f_File* opened);

AE2F_CPP_PREFIX AE2F unsigned long long ae2f_Pair_write(struct ae2f_Pair* _this, struct ae2f_File* opened);
AE2F_CPP_PREFIX AE2F unsigned long long ae2f_Pair_read(struct ae2f_Pair* _this, struct ae2f_File* opened);

AE2F_CPP_PREFIX AE2F unsigned long long ae2f_Map_write(struct ae2f_Map* _this, struct ae2f_File* opened);
AE2F_CPP_PREFIX AE2F unsigned long long ae2f_Map_read(struct ae2f_Map* _this, struct ae2f_File* opened);

AE2F_CPP_PREFIX AE2F unsigned long long ae2f_Dimension_write(struct ae2f_Dimension* _this, struct ae2f_File* opened);
AE2F_CPP_PREFIX AE2F unsigned long long ae2f_Dimension_read(struct ae2f_Dimension* _this, struct ae2f_File* opened);
#endif // AE2F_CONTAINER
#endif // !AE2F_FILE_CONTAINER