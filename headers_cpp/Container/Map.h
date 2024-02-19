#pragma once
#ifndef AE2F_CONTAINER_MAP_CPP
#ifdef AE2F_CPP
#define AE2F_CONTAINER_MAP_CPP

#include "Pair.h"

#pragma region Map
#ifdef AE2F_PAIR
#ifndef AE2F_MAP
#define AE2F_MAP
typedef struct ae2f_Map {
	struct ae2f_Dynamic pairs;
	uint64_t len;
	uint64_t _amp; uint64_t _div;
}*ptr_ae2f_Map;
#endif // !AE2F_MAP
#ifndef AE2F_MAP_FUN
#define AE2F_MAP_FUN
/// <param name="a">: map to be initialised</param>
AE2F_CPP_PREFIX AE2F ptr_ae2f_Map ae2f_Map(
	ptr_ae2f_Map a	// map to be initialised
);

/// <param name="a">: map</param>
/// <param name="b">: key to search</param>
AE2F_CPP_PREFIX AE2F ptr_ae2f_Pair ae2f_Map_at(
	ptr_ae2f_Map a,		// map
	ptr_ae2f_Dynamic b	// key to search
);

/// <param name="a">: map</param>
/// <param name="b">: key to add</param>
/// <param name="c">: value to add</param>
AE2F_CPP_PREFIX AE2F ptr_ae2f_Map ae2f_Map_add(
	ptr_ae2f_Map a,		// map
	ptr_ae2f_Dynamic b,	// key to add
	ptr_ae2f_Dynamic c	// value to add
);

/// <param name="a">: map</param>
/// <param name="b">: pointer to be dead</param>
AE2F_CPP_PREFIX AE2F ptr_ae2f_Map ae2f_Map_del(
	ptr_ae2f_Map a,	// map 
	ptr_ae2f_Pair b	// pointer to be dead
);

/// <param name="a">: map</param>
AE2F_CPP_PREFIX AE2F ptr_ae2f_Map ae2f_Map_free(
	ptr_ae2f_Map a	// map
);

/// <param name="a">: source</param>
/// <param name="b">: destination</param>
AE2F_CPP_PREFIX AE2F ptr_ae2f_Map ae2f_Map_copy(
	ptr_ae2f_Map a,	// source
	ptr_ae2f_Map b	// destination
);
#endif // !AE2F_MAP_FUN
#endif // AE2F_PAIR
#pragma endregion

namespace ae2f {
	template<typename t> class fun;

	namespace Container {
		class Map;
	}


	template<> class fun<Container::Map> {
	public:
		class getter;
		class setter;

		class idx;
	};

	class fun<Container::Map>::getter {
	protected:
		struct ae2f_Map* p;
	public:
		/// <param name="a">: pointer</param>
		AE2F getter(
			struct ae2f_Map* a	// pointer
		);

		AE2F void* raw();

		/// <param name="a">: key</param>
		AE2F Container::Linked at(
			Container::Linked a	// key
		);

		/// <param name="a">: key ptr</param>
		AE2F Container::Linked at(
			Container::Linked* a	// key ptr
		);
	};

	class fun<Container::Map>::setter : protected fun<Container::Map>::getter {
	public:
		/// <param name="a">: map ptr</param>
		AE2F setter(
			struct ae2f_Map* a	// map ptr
		);

		AE2F void* raw();

		/// <param name="a">: key</param>
		AE2F idx at(
			Container::Linked a	// key
		);

		/// <param name="a">: key ptr</param>
		AE2F idx at(
			Container::Linked* a	// key ptr
		);

		/// <param name="a">: key</param>
		AE2F idx add(
			Container::Linked a	// key
		);

		/// <param name="a">: key ptr</param>
		AE2F idx add(
			Container::Linked* a	// key ptr
		);

		/// <param name="a">: key</param>
		AE2F Container::Linked operator[](
			Container::Linked a	// key
		);

		/// <param name="a">: key ptr</param>
		AE2F Container::Linked operator[](
			Container::Linked* a	// key ptr
		);

		AE2F setter& free();
	};

	class fun<Container::Map>::idx : public fun<Container::Pair>::setter::el<Container::Pair::_val> 
	{
	protected:
		struct ae2f_Map* bs;
		fun<Container::Pair>::setter obj;
	public:

		/// <param name="a">: map</param>
		/// <param name="b">: index</param>
		AE2F idx(
			struct ae2f_Map* a,	// map 
			struct ae2f_Pair* b	// index
		);

		AE2F setter del();

		/// <param name="a">: map, pair</param>
		AE2F void* raw(
			uint8_t a	// map, pair
		);
	};

	namespace Container {
		class Map : public fun<Container::Map>::setter {
		protected:
			struct ae2f_Map obj;
		public:
			AE2F Map();
			AE2F ~Map();
		};
	}
}

#endif // AE2F_CPP
#endif // !AE2F_CONTAINER_MAP_CPP