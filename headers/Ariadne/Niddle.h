#pragma once
#ifndef AE2F_ARIADNE_NIDDLE
#define AE2F_ARIADNE_NIDDLE
#include "String.h"

struct ae2f_Ariadne_Niddle {
	struct ae2f_Ariadne_String* str;
	struct ae2f_Map* map;
	ae2f_Dynamic_owned outBuff;
};

/// <param name="a">: receiver</param>
/// <param name="b">: functions rnn</param>
/// <param name="c">: value source</param>
AE2F_CPP_PREFIX AE2F struct ae2f_Ariadne_Niddle* ae2f_Ariadne_Niddle(
	struct ae2f_Ariadne_Niddle* a,	// receiver
	struct ae2f_Ariadne_String* b,	// functions rnn
	struct ae2f_Map* c				// value source
);

/// <param name="a">: receiver</param>
/// <param name="b">: new value source</param>
AE2F_CPP_PREFIX AE2F struct ae2f_Ariadne_Niddle* ae2f_Ariadne_Niddle_updateMap(
	struct ae2f_Ariadne_Niddle* a,	// receiver
	struct ae2f_Map* b				// new value source
);

/// <param name="a">: receiver</param>
/// <param name="b">: learning rate</param>
AE2F_CPP_PREFIX AE2F struct ae2f_Ariadne_Niddle* ae2f_Ariadne_Niddle_revolve(
	struct ae2f_Ariadne_Niddle* a,	// receiver
	double b						// learning rate
);

/// <param name="a">: receiver</param>
/// <param name="b">: input value</param>
AE2F_CPP_PREFIX AE2F ae2f_Dynamic_owned* ae2f_Ariadne_Niddle_get(
	struct ae2f_Ariadne_Niddle* a,	// receiver
	struct ae2f_Dynamic* b			// input value
);
#endif // !AE2F_ARIADNE_NIDDLE