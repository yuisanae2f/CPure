#pragma once
#ifndef AE2F_DIMENSION
#ifndef AE2F_DYNAMIC
#include "Dynamic.h"
#endif // !AE2F_DYNAMIC
#ifdef AE2F_DYNAMIC
#define AE2F_DIMENSION
typedef struct ae2f_Dimension {
	struct ae2f_Dynamic c;
	uint64_t depth;
	uint8_t end;
	struct ae2f_Dimension* pre;
}* ptr_ae2f_Dimension;

/// <param name="a">: matrix</param>
/// <param name="b">: depth of the matrix</param>
/// <param name="c">: length for every depth level</param>
AE2F_CPP_PREFIX AE2F struct ae2f_Dimension* ae2f_Dimension(
	struct ae2f_Dimension* a,	// matrix
	uint64_t b,					// depth of the matrix
	uint64_t* c					// length for every depth level
);

/// <param name="a">: matrix initialised already</param>
AE2F_CPP_PREFIX AE2F struct ae2f_Dimension* ae2f_Dimension_free(
	struct ae2f_Dimension* a	// matrix initialised already
);

/// <param name="a">: matrix initialised</param>
/// <param name="b">: depth of the matrix</param>
/// <param name="c">: position for every depth level</param>
AE2F_CPP_PREFIX AE2F struct ae2f_Dimension* ae2f_Dimension_point(
	struct ae2f_Dimension* a,	// matrix initialised
	uint64_t b,					// depth of the matrix
	uint64_t* c					// position for every depth level
);

/// <param name="a">: matrix initialised yet</param>
/// <param name="b">: count of the new depth layer</param>
AE2F_CPP_PREFIX AE2F struct ae2f_Dimension* ae2f_Dimension_lay(
	struct ae2f_Dimension* a,	// matrix initialised yet
	uint64_t b					// count of the new depth layer
);

/// <param name="a">: matrix initialised yet</param>
/// <param name="b">: final size of the current depth layer</param>
AE2F_CPP_PREFIX AE2F struct ae2f_Dimension* ae2f_Dimension_morph(
	struct ae2f_Dimension* a,	// matrix initialised yet
	uint64_t b					// final size of the current depth layer
);

/// <param name="a">: matrix source</param>
/// <param name="b">: destination</param>
AE2F_CPP_PREFIX AE2F struct ae2f_Dimension* ae2f_Dimension_copy(
	struct ae2f_Dimension* a,	// matrix source
	struct ae2f_Dimension* b	// destination
);

/// <param name="a">: matrix</param>
/// <param name="b">: setter value</param>
AE2F_CPP_PREFIX AE2F struct ae2f_Dimension* ae2f_Dimension_setDepth(
	struct ae2f_Dimension* a,	// matrix
	uint64_t b					// setter value
);
#endif // AE2F_DYNAMIC
#endif // !AE2F_DIMENSION