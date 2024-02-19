#pragma once
#ifndef AE2F_CONTAINER_PAIR_CPP
#ifdef AE2F_CPP
#define AE2F_CONTAINER_PAIR_CPP


#include "Dynamic.h"

#pragma region Pair
#ifndef AE2F_PAIR
#define AE2F_PAIR

typedef struct ae2f_Pair {
	struct ae2f_Dynamic c;
	union ae2f_Unit val;
}*ptr_ae2f_Pair;

typedef struct ae2f_Dynamic ae2f_Dynamic_owned;
#endif // !AE2F_PAIR

#ifndef AE2F_PAIR_FUN
#define AE2F_PAIR_FUN
/// <param name="a">: pair</param>
/// <param name="b">: key</param>
/// <param name="c">: value</param>
AE2F_CPP_PREFIX AE2F ptr_ae2f_Pair ae2f_Pair(
	ptr_ae2f_Pair a,	// pair
	ptr_ae2f_Dynamic b,	// key
	ptr_ae2f_Dynamic c	// value
);

/// <param name="a">: pair</param>
/// <param name="b">: key</param>
/// <param name="c">: length key</param>
/// <param name="d">: value</param>
/// <param name="e">: length value</param>
AE2F_CPP_PREFIX AE2F ptr_ae2f_Pair ae2f_Pair_(
	ptr_ae2f_Pair a,	// pair
	void* b,				// key
	uint64_t c,				// length key
	void* d,				// value
	uint64_t e				// length value
);

/// <param name="a">: pair to be freed</param>
AE2F_CPP_PREFIX AE2F ptr_ae2f_Pair ae2f_Pair_free(
	ptr_ae2f_Pair a		// pair to be freed
);

/// <param name="a">: pair</param>
/// <param name="b">: value to be compared</param>
/// <param name="c">: value on 1 otherwise key</param>
AE2F_CPP_PREFIX AE2F int8_t ae2f_Pair_weigh(
	ptr_ae2f_Pair a,	// pair
	ptr_ae2f_Dynamic b,	// value to be compared
	int8_t c				// value on 1 otherwise key
);

/// <param name="a">: pair to be set</param>
/// <param name="b">: value to set</param>
/// <param name="c">: value on 1 otherwise key</param>
AE2F_CPP_PREFIX AE2F ptr_ae2f_Pair ae2f_Pair_set(
	ptr_ae2f_Pair a,	// pair to be set
	ptr_ae2f_Dynamic b,	// value to set
	int8_t c				// value on 1 otherwise key
);

/// <param name="a">: pair to get</param>
/// <param name="b">: value on 1 otherwise key</param>
AE2F_CPP_PREFIX AE2F ae2f_Dynamic_owned ae2f_Pair_get(
	ptr_ae2f_Pair a,	// pair to get
	int8_t b				// value on 1 otherwise key
);

/// <param name="a">: source</param>
/// <param name="b">: destination</param>
AE2F_CPP_PREFIX AE2F ptr_ae2f_Pair ae2f_Pair_copy(
	ptr_ae2f_Pair a,	// source
	ptr_ae2f_Pair b		// destination
);
#endif // !AE2F_PAIR_FUN
#pragma endregion

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
