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
		/// <param name="a">: base ptr</param>
		AE2F getter(
			struct ae2f_Pair* a	// base ptr
		);

		AE2F Container::Linked key();
		AE2F Container::Linked value();

		AE2F void* raw();
	};

	class fun<Container::Pair>::setter : protected fun<Container::Pair>::getter {
	public:
		class _key;
		class _val;

		/// <param name="a">: base ptr</param>
		AE2F setter(
			struct ae2f_Pair* a	// base ptr
		);
		AE2F starter free();

		AE2F void* raw();

		template<typename tt> class el {
		protected:
			setter* p;
		public:
			/// <param name="a">: base ptr</param>
			AE2F el(
				setter* a	// base ptr
			);

			AE2F Container::Linked operator()();

			/// <param name="a">: setter val ptr</param>
			AE2F el<tt>& operator()(
				Container::Linked* a	// setter val ptr
			);

			/// <param name="a">: setter val ptr</param>
			AE2F el<tt>& operator()(
				Container::Linked a	// setter val
			);
		};

		AE2F el<_key> key();
		AE2F el<_val> value();
	};

	class fun<Container::Pair>::starter {
	protected:
		struct ae2f_Pair* p;
	public:
		/// <param name="a">: base ptr</param>
		AE2F starter(
			struct ae2f_Pair* a	// base ptr
		);

		/// <param name="a">: key</param>
		/// <param name="b">: val</param>
		AE2F setter alloc(
			Container::Linked a,	// key
			Container::Linked b		// val
		);

		/// <param name="a">: key ptr</param>
		/// <param name="b">: val ptr</param>
		AE2F setter alloc(
			Container::Linked* a,	// key ptr
			Container::Linked* b	// val ptr
		);

		/// <param name="a">: source</param>
		AE2F setter copy(
			getter a	// source
		);

		/// <param name="a">: source ptr</param>
		AE2F setter copy(
			getter* a	// source ptr
		);
	};

	namespace Container {
		class Pair : public fun<Pair>::setter {
		protected:
			struct ae2f_Pair obj;

		public:
			
			/// <param name="a">: key</param>
			/// <param name="b">: val</param>
			AE2F Pair(
				Linked a,	// key
				Linked b	// value
			);

			/// <param name="a">: key ptr</param>
			/// <param name="b">: val ptr</param>
			AE2F Pair(
				Linked* a,	// key ptr
				Linked* b	// val ptr
			);

			/// <param name="a">: key</param>
			AE2F Pair(
				Linked a	// key
			);

			/// <param name="a">: key ptr</param>
			AE2F Pair(
				Linked* a	// key ptr
			);

			/// <param name="a">: source</param>
			AE2F Pair(
				struct ae2f_Pair a	// source
			);

			/// <param name="a">: source ptr</param>
			AE2F Pair(
				struct ae2f_Pair* a	// source ptr
			);

			AE2F ~Pair();
		};
	}
}

#endif // AE2F_CPP
#endif // !AE2F_CONTAINER_PAIR_CPP
