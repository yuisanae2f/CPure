#pragma once
#ifndef AE2F_CONTAINER_UNIT_CPP
#ifdef AE2F_CPP
#define AE2F_CONTAINER_UNIT_CPP

#ifndef AE2F_IGNORE_MISSINGS
#include <type_traits>
#endif // !AE2F_IGNORE_MISSINGS


namespace ae2f {
	namespace Container {
		template <typename T>
		union Unit {
			T* tmp;
			void* ptr;
		};
	}
}

#endif // AE2F_CPP
#endif // !AE2F_CONTAINER_UNIT_CPP