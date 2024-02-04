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
	};

	class fun<Container::Dimension>::getter {
	protected:
		struct ae2f_Dimension* p;


		/// <param name="a">: pointer</param>
		AE2F getter(
			struct ae2f_Dimension* a	// pointer
		);

	public:

		/// <param name="a">: position array</param>
		AE2F fun<Container::Dynamic>::setter operator[](
			std::initializer_list<uint64_t> a	// position array
		);
		AE2F void* raw();
	};

	class fun<Container::Dimension>::setter :
		public fun<Container::Dimension>::getter {
	protected:
		
		/// <param name="a">: position array length</param>
		/// <param name="b">: position array</param>
		AE2F fun<Container::Dimension>::setter point(
			uint64_t a,		// position array length
			uint64_t* b		// position array
		);

		/// <param name="a">: new depth</param>
		/// <returns></returns>
		AE2F fun<Container::Dimension>::setter& setDepth(
			uint64_t a	// new depth
		);

	public:
		AE2F fun<Container::Dimension>::starter free();

		/// <param name="a">: pointer</param>
		AE2F setter(
			struct ae2f_Dimension* a	// pointer
		);
	};

	class fun<Container::Dimension>::starter :
		private fun<Container::Dimension>::setter {
	public:
		/// <param name="a">: pointer</param>
		AE2F starter(
			struct ae2f_Dimension* a	// pointer
		);

		/// <param name="a">: length array length </param>
		/// <param name="b">: length array</param>
		AE2F fun<Container::Dimension>::setter make(
			uint64_t a,	// length array length 
			uint64_t* b	// length array
		);

		/// <param name="a">: getter</param>
		AE2F fun<Container::Dimension>::setter copy(
			fun<Container::Dimension>::getter a	// getter
		);
		
		/// <param name="a">: pointer for getter</param>
		AE2F fun<Container::Dimension>::setter copy(
			fun<Container::Dimension>::getter* a	// pointer for getter
		);
	};

	namespace Container {
		class Dimension : public fun<Dimension>::setter {
		protected: struct ae2f_Dimension obj;
		public:

			/// <param name="a">: depth</param>
			/// <param name="b">: length array</param>
			AE2F Dimension( // __init__
				uint64_t a,	// depth
				uint64_t* b	// length array
			);

			/// <param name="a">: length array</param>
			AE2F Dimension(
				Linked a	// length array
			);
			/// <param name="a">: length array</param>
			AE2F Dimension(
				std::initializer_list<uint64_t> a	// length array
			);

			/// <param name="a">: source</param>
			AE2F Dimension(
				fun<Container::Dimension>::getter a	// source
			);

			/// <param name="a">: source</param>
			AE2F Dimension(
				fun<Container::Dimension>::getter* a	// source
			);

			AE2F ~Dimension();
		};
	}
}

#endif // AE2F_CPP
#endif // !AE2F_CONTAINER_DIMENSION_CPP
