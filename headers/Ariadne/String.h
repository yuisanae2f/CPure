#pragma once
#ifndef AE2F_ARIADNE_STRING
#include <stdint.h>

#ifndef AE2F_IGNORE_MISSINGS
#include "../Container/Map.h"
#endif // !AE2F_IGNORE_MISSINGS

#define AE2F_ARIADNE_STRING
struct ae2f_Ariadne_String {
	double
		* Wxh,
		* Whh,
		* Why,
		* bh,
		* by,
		* hprev,
		* outBuff,
		(*activation)(double);

	uint64_t io, hid;
};

/// <param name="a">: simple rnn model</param>
/// <param name="b">: count of buffer of input and output as [double]</param>
/// <param name="c">: count of buffer of hidden layer</param>
/// <param name="d">: early set output buffer</param>
/// <param name="e">: activation function</param>
AE2F_CPP_PREFIX AE2F struct ae2f_Ariadne_String* ae2f_Ariadne_String(
	struct ae2f_Ariadne_String* a,	// simple rnn model
	uint64_t b,						// count of buffer of input and output as [double]
	uint64_t c,						// count of buffer of hidden layer
	double* d,						// early set output buffer
	double(*e)(						// activation function
		double a					// and its parameter
	)
);

/// <param name="a">: simple rnn model</param>
/// <param name="b">: new io size</param>
/// <param name="c">: new hidden size</param>
AE2F_CPP_PREFIX AE2F struct ae2f_Ariadne_String* ae2f_Ariadne_String_re(
	struct ae2f_Ariadne_String* a,	// simple rnn model
	uint64_t b,						// new io size
	uint64_t c						// new hidden size
);

/// <param name="a">: rnn to be freed</param>
AE2F_CPP_PREFIX AE2F struct ae2f_Ariadne_String* ae2f_Ariadne_String_free(
	struct ae2f_Ariadne_String* a	// rnn to be freed
);

/// <param name="a">: rnn model</param>
/// <param name="b">: input</param>
AE2F_CPP_PREFIX AE2F double* ae2f_Ariadne_String_forward(
	struct ae2f_Ariadne_String* a,	// rnn model
	double* b						// input
);

/// <param name="a">: rnn model</param>
/// <param name="b">: input</param>
/// <param name="c">: wanted value</param>
/// <param name="d">: learning rate</param>
AE2F_CPP_PREFIX AE2F struct ae2f_Ariadne_String* ae2f_Ariadne_String_backward(
	struct ae2f_Ariadne_String* a,	// rnn model
	double* b,						// input
	double* c,						// wanted value
	double d						// learning rate
);

/// <param name="a">: rnn model</param>
/// <param name="b">: input</param>
/// <param name="c">: wanted value</param>
/// <param name="d">: learning rate</param>
AE2F_CPP_PREFIX AE2F struct ae2f_Ariadne_String* ae2f_Ariadne_String_revolve(
	struct ae2f_Ariadne_String* a,	// rnn model
	double* b,						// input
	double* c,						// wanted value
	double d						// learning rate
);

/// <param name="a">: source</param>
/// <param name="b">: destinations</param>
AE2F_CPP_PREFIX AE2F struct ae2f_Ariadne_String* ae2f_Ariadne_String_copy(
	struct ae2f_Ariadne_String* a,	// source
	struct ae2f_Ariadne_String* b	// destinations
);

/// <param name="a">: model where output buffer located</param>
AE2F_CPP_PREFIX AE2F struct ae2f_Dynamic ae2f_Ariadne_String_out(
	struct ae2f_Ariadne_String* a	// model where output buffer located
);
#endif // !AE2F_ARIADNE_NIDDLE