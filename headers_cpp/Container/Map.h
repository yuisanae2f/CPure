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
		AE2F getter(struct ae2f_Map* p);

		AE2F void* raw();
		AE2F Container::Linked at(Container::Linked idx);
		AE2F Container::Linked at(Container::Linked* idx);
	};

	class fun<Container::Map>::setter : protected fun<Container::Map>::getter {
	public:
		AE2F setter(struct ae2f_Map* p);
		AE2F void* raw();

		AE2F idx at(Container::Linked idx);
		AE2F idx at(Container::Linked* idx);

		AE2F idx add(Container::Linked key);
		AE2F idx add(Container::Linked* key);

		AE2F Container::Linked operator[](Container::Linked idx);
		AE2F Container::Linked operator[](Container::Linked* idx);

		AE2F setter& free();
	};

	class fun<Container::Map>::idx : public fun<Container::Pair>::setter::el<fun<Container::Pair>::setter::_val> {
	protected:
		struct ae2f_Map* bs;
		fun<Container::Pair>::setter obj;
	public:
		AE2F idx(struct ae2f_Map* bs, struct ae2f_Pair* p);
		AE2F setter del();
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