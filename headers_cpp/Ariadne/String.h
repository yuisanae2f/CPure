#pragma once
#ifndef AE2F_ARIADNE_STRING_CPP
#define AE2F_ARIADNE_STRING_CPP

#ifndef AE2F_IGNORE_MISSINGS
#include "../../headers/Ariadne.h"
#endif // !AE2F_IGNORE_MISSINGS

namespace ae2f {
#ifndef _AE2F_FUN
#define _AE2F_FUN
	template<typename t> class fun;
#endif // !_AE2F_FUN

	namespace Ariadne {
		class String;
	}

	template<> class fun<Ariadne::String> {
	public:
		class starter;
		class started;
	};

	class fun<Ariadne::String>::started {
	protected:
		struct ae2f_Ariadne_String* p;
	public:
		AE2F started(
			struct ae2f_Ariadne_String* a	// pointer
		);
		
		AE2F fun<Ariadne::String>::starter free();
		
		/// <param name="a">: input buffer</param>
		AE2F started& forward(
			double* a	// input buffer
		);

		/// <param name="a">input buffer</param>
		/// <param name="b">wanted value</param>
		/// <param name="c">learning rate</param>
		AE2F started& backward(
			double* a,	// input buffer
			double* b,	// wanted value
			double c	// learning rate
		);

		/// <param name="a">: input buffer</param>
		/// <param name="b">: wanted value</param>
		/// <param name="c">: learning rate</param>
		AE2F started& revolve(
			double* a,	// input buffer
			double* b,	// wanted value
			double c	// learning rate
		);
		
		/// <param name="a">: expected buffer size of input or output</param>
		/// <param name="b">: size of hidden layer</param>
		AE2F started& re(
			uint64_t a,	// expected buffer size of input or output
			uint64_t b	// size of hidden layer
		);
		AE2F void* raw();
	};

	class fun<Ariadne::String>::starter : fun<Ariadne::String>::started {
	public:
		/// <param name="a">: pointer</param>
		AE2F starter(
			struct ae2f_Ariadne_String* a	// pointer
		);

		/// <param name="a">: count of buffer of input and output as [double]</param>
		/// <param name="b">: count of buffer of hidden layer</param>
		/// <param name="c">: early set output buffer</param>
		/// <param name="d">: activation function</param>
		AE2F fun<Ariadne::String>::started make(
			uint64_t a,		// count of buffer of input and output as [double].
			uint64_t b,		// count of buffer of hidden layer
			double* c,		// early set output buffer
			double(*d)(		// activation function
				double a	// and its parameter
			)
		);
	};
	namespace Ariadne {
		class String : public fun<Ariadne::String>::started {
		protected:
			struct ae2f_Ariadne_String obj;

		public:

			/// <param name="a">: count of buffer of input and output as [double]</param>
			/// <param name="b">: count of buffer of hidden layer</param>
			/// <param name="c">: early set output buffer</param>
			/// <param name="d">: activation function</param>
			AE2F String(
				uint64_t a,		// count of buffer of input and output as [double].
				uint64_t b,		// count of buffer of hidden layer
				double* c,		// early set output buffer
				double(*d)(		// activation function
					double a	// and its parameter
				)
			);

			/// <param name="a">: existing model</param>
			AE2F String(
				fun<Ariadne::String>::started a		// existing model
			);

			/// <param name="a">: existing model</param>
			AE2F String(
				fun<Ariadne::String>::started* a	// existing model
			);

			AE2F ~String();
		};
	}
}

#endif // !AE2F_ARIADNE_STRING_CPP
