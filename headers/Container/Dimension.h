#pragma once
#ifndef AE2F_DIMENSION
#ifndef AE2F_DYNAMIC
#include "Dynamic.h"
#endif // !AE2F_DYNAMIC
#ifdef AE2F_DYNAMIC
#define AE2F_DIMENSION
AE2F_CPP_PREFIX AE2F struct ae2f_Dimension {
	struct ae2f_Dynamic c;
	unsigned long long depth;
	char end;
	struct ae2f_Dimension* pre;
};

AE2F_CPP_PREFIX AE2F struct ae2f_Dimension* ae2f_Dimension(struct ae2f_Dimension* _this, unsigned long long depth, unsigned long long* lengthArray);
AE2F_CPP_PREFIX AE2F struct ae2f_Dimension* ae2f_Dimension_free(struct ae2f_Dimension* _this);
AE2F_CPP_PREFIX AE2F struct ae2f_Dimension* ae2f_Dimension_point(struct ae2f_Dimension* _this, unsigned long long depth, unsigned long long* posArray);
AE2F_CPP_PREFIX AE2F struct ae2f_Dimension* ae2f_Dimension_lay(struct ae2f_Dimension* _this, unsigned long long length);
AE2F_CPP_PREFIX AE2F struct ae2f_Dimension* ae2f_Dimension_morph(struct ae2f_Dimension* _this, unsigned long long length);
AE2F_CPP_PREFIX AE2F struct ae2f_Dimension* ae2f_Dimension_copy(struct ae2f_Dimension* _this, struct ae2f_Dimension* to);
AE2F_CPP_PREFIX AE2F struct ae2f_Dimension* ae2f_Dimension_setDepth(struct ae2f_Dimension* _this, unsigned long long dep);
#endif // AE2F_DYNAMIC
#endif // !AE2F_DIMENSION