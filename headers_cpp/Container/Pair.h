#pragma once
#ifndef AE2F_CONTAINER_PAIR_CPP
#ifdef AE2F_CPP
#define AE2F_CONTAINER_PAIR_CPP

#ifndef AE2F_IGNORE_MISSINGS
#include "../../headers/Container/Pair.h"
#endif // !AE2F_IGNORE_MISSINGS

#include "Dynamic.h"

namespace ae2f {
	template<typename t> class fun;

	namespace Container {
		class Pair;
	}

	template<> class fun<Container::Pair> {
	public:
		class setter;
		class getter;
		class starter;
	};

	class fun<Container::Pair>::getter {
	protected: 
		struct ae2f_Pair* p;
	public:
		AE2F getter(struct ae2f_Pair* p);

		AE2F Container::Linked key();
		AE2F Container::Linked value();

		AE2F void* raw();
	};

	class fun<Container::Pair>::setter : protected fun<Container::Pair>::getter {
	public:
		class _key;
		class _val;

		AE2F setter(struct ae2f_Pair* p);
		AE2F starter free();

		AE2F void* raw();

		template<typename tt> class el {
		protected:
			setter* p;
		public:
			AE2F el(setter* p);

			AE2F el<tt>& operator()(Container::Linked* v);
			AE2F el<tt>& operator()(Container::Linked v);

			AE2F Container::Linked operator()();
		};

		AE2F el<_key> key();
		AE2F el<_val> value();
	};

	class fun<Container::Pair>::starter {
	protected:
		struct ae2f_Pair* p;
	public:
		AE2F starter(struct ae2f_Pair* p);
		AE2F setter alloc(Container::Linked key, Container::Linked value);
		AE2F setter alloc(Container::Linked* key, Container::Linked* value);

		AE2F setter copy(getter tar);
		AE2F setter copy(getter* tar);
	};

	namespace Container {
		class Pair : public fun<Pair>::setter {
		protected:
			struct ae2f_Pair obj;

		public:			
			AE2F Pair(Linked key, Linked value);
			AE2F Pair(Linked* key, Linked* value);

			AE2F Pair(Linked tar);
			AE2F Pair(Linked* tar);

			AE2F ~Pair();
		};
	}
}

#endif // AE2F_CPP
#endif // !AE2F_CONTAINER_PAIR_CPP
