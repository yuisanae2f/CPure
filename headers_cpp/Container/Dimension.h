#pragma once
#ifndef AE2F_CONTAINER_DIMENSION_CPP
#ifdef AE2F_CPP
#ifndef AE2F_IGNORE_MISSINGS
#include "../../headers/Container/Dimension.h"
#endif // !AE2F_IGNORE_MISSINGS
#define AE2F_CONTAINER_DIMENSION_CPP

#include "Dynamic.h"

namespace ae2f {
	namespace Container {
		class Dimension;
	}

	template<> class fun<Container::Dimension> {
	public:
		class getter;
		class setter;
		class starter;
		class egg;
	};

	class fun<Container::Dimension>::getter {
	protected:
		struct ae2f_Dimension* p;
		AE2F getter(struct ae2f_Dimension* p);
	public:
		AE2F fun<Container::Dynamic>::setter operator[](std::initializer_list<uint64_t> idx);
		AE2F void* raw();
	};

	class fun<Container::Dimension>::setter :
		public fun<Container::Dimension>::getter {
	protected:
		AE2F fun<Container::Dimension>::setter point(uint64_t depth, uint64_t* posArray);
		AE2F fun<Container::Dimension>::setter& setDepth(uint64_t dep);

	public:
		AE2F fun<Container::Dimension>::starter free();
		AE2F setter(struct ae2f_Dimension* p);
	};

	class fun<Container::Dimension>::starter :
		private fun<Container::Dimension>::setter {
	public:
		AE2F starter(struct ae2f_Dimension* p);
		AE2F fun<Container::Dimension>::setter make(uint64_t depth, uint64_t* lengthArray);
		AE2F fun<Container::Dimension>::setter copy(fun<Container::Dimension>::getter g);
		AE2F fun<Container::Dimension>::setter copy(fun<Container::Dimension>::getter* g);
	};

	namespace Container {
		class Dimension : public fun<Dimension>::setter {
		protected: struct ae2f_Dimension obj;
		public:
			AE2F Dimension(uint64_t depth, uint64_t* lengthArray);
			AE2F Dimension(Linked lArray);
			AE2F Dimension(std::initializer_list<uint64_t> a);

			AE2F Dimension(fun<Container::Dimension>::getter g);
			AE2F Dimension(fun<Container::Dimension>::getter* g);

			AE2F ~Dimension();
		};
	}
}

#endif // AE2F_CPP
#endif // !AE2F_CONTAINER_DIMENSION_CPP
