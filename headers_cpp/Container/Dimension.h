#pragma once
#ifndef AE2F_CONTAINER_DIMENSION_CPP
#ifdef AE2F_CPP
#define AE2F_CONTAINER_DIMENSION_CPP

#include "Dynamic.h"
#pragma region Dimension
#ifdef AE2F_DYNAMIC
#ifndef AE2F_DIMENSION
#define AE2F_DIMENSION
typedef struct ae2f_Dimension {
	struct ae2f_Dynamic c;
	uint64_t depth;
	uint8_t end;
	struct ae2f_Dimension* pre;
}*ptr_ae2f_Dimension;
#endif // !AE2F_DIMENSION

#ifndef AE2F_DIMENSION_FUN
#define AE2F_DIMENSION_FUN
/// <param name="a">: matrix</param>
/// <param name="b">: depth of the matrix</param>
/// <param name="c">: length for every depth level</param>
AE2F_CPP_PREFIX AE2F ptr_ae2f_Dimension ae2f_Dimension(
	ptr_ae2f_Dimension a,		// matrix
	uint64_t b,					// depth of the matrix
	uint64_t* c					// length for every depth level
);

/// <param name="a">: matrix initialised already</param>
AE2F_CPP_PREFIX AE2F ptr_ae2f_Dimension ae2f_Dimension_free(
	ptr_ae2f_Dimension a	// matrix initialised already
);

/// <param name="a">: matrix initialised</param>
/// <param name="b">: depth of the matrix</param>
/// <param name="c">: position for every depth level</param>
AE2F_CPP_PREFIX AE2F ptr_ae2f_Dimension ae2f_Dimension_point(
	ptr_ae2f_Dimension a,		// matrix initialised
	uint64_t b,					// depth of the matrix
	uint64_t* c					// position for every depth level
);

/// <param name="a">: matrix initialised yet</param>
/// <param name="b">: count of the new depth layer</param>
AE2F_CPP_PREFIX AE2F ptr_ae2f_Dimension ae2f_Dimension_lay(
	ptr_ae2f_Dimension a,		// matrix initialised yet
	uint64_t b					// count of the new depth layer
);

/// <param name="a">: matrix initialised yet</param>
/// <param name="b">: final size of the current depth layer</param>
AE2F_CPP_PREFIX AE2F ptr_ae2f_Dimension ae2f_Dimension_morph(
	ptr_ae2f_Dimension a,		// matrix initialised yet
	uint64_t b					// final size of the current depth layer
);

/// <param name="a">: matrix source</param>
/// <param name="b">: destination</param>
AE2F_CPP_PREFIX AE2F ptr_ae2f_Dimension ae2f_Dimension_copy(
	ptr_ae2f_Dimension a,	// matrix source
	ptr_ae2f_Dimension b	// destination
);

/// <param name="a">: matrix</param>
/// <param name="b">: setter value</param>
AE2F_CPP_PREFIX AE2F ptr_ae2f_Dimension ae2f_Dimension_setDepth(
	ptr_ae2f_Dimension a,		// matrix
	uint64_t b					// setter value
);
#endif // !AE2F_DIMENSION_FUN
#endif // AE2F_DYNAMIC
#pragma endregion

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
