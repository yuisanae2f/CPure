#pragma once
#ifndef AE2F_ARIADNE_NIDDLE_CPP
#define AE2F_ARIADNE_NIDDLE_CPP

#ifndef AE2F_IGNORE_MISSINGS
#include "../../headers/Ariadne/Niddle.h"
#endif // !AE2F_IGNORE_MISSINGS

namespace ae2f {
	template<typename T> class fun;

	namespace Ariadne {
		class Niddle;
	}

	template<>
	class fun<Ariadne::Niddle> {
	public:
		class setter;
	};

	class fun<Ariadne::Niddle>::setter {
	protected:
		struct ae2f_Ariadne_Niddle* p;
		bool hasPtr;
	public:
		AE2F setter(struct ae2f_Ariadne_Niddle* a);

		AE2F setter& updateMap(
			Container::Map& a
		);

		AE2F setter& updateMap(
			struct ae2f_Map* a
		);

		AE2F setter& revolve(
			double a
		);

		AE2F fun<Container::Dynamic>::getter get(
			Container::Linked a
		);
	};

	namespace Ariadne {
		class Niddle : public fun<Niddle>::setter {
		protected:
			struct ae2f_Ariadne_Niddle obj;
		public:
			inline struct ae2f_Ariadne_Niddle* p() { return &obj; }

			AE2F Niddle(
				String& a,
				Container::Map& b
			);

			AE2F Niddle(
				String& a
			);

			AE2F ~Niddle();
		};
	}
}

#endif // !AE2F_ARIADNE_NIDDLE
