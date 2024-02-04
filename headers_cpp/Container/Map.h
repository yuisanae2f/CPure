#pragma once
#ifndef AE2F_CONTAINER_MAP_CPP
#ifdef AE2F_CPP
#define AE2F_CONTAINER_MAP_CPP

#ifndef AE2F_IGNORE_MISSINGS
#include "../../headers/Container/Map.h"
#endif // !AE2F_IGNORE_MISSINGS

#include "Pair.h"

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