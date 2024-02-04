#pragma once
#ifndef AE2F_CONTAINER_DYNAMIC_CPP
#ifdef AE2F_CPP
#define AE2F_CONTAINER_DYNAMIC_CPP

#ifndef AE2F_IGNORE_MISSINGS
#include "../../headers/Container/Dynamic.h"
#include <type_traits>
#include <initializer_list>
#include <string>
#endif // !AE2F_IGNORE_MISSINGS

#include "Unit.h"


namespace ae2f {

#ifndef _AE2F_FUN
#define _AE2F_FUN
	template<typename t> class fun;
#endif // !_AE2F_FUN

	namespace Container {
		class Dynamic;
		class Linked;
	}

	template<> class fun<Container::Dynamic> {
	public:
		class setter;
		class starter;
		class getter;
	};

	class fun<Container::Dynamic>::getter {
	protected:
		struct ae2f_Dynamic* p;
	public:

		AE2F void* raw();

		/// <param name="a">: pointer</param>
		AE2F getter(
			struct ae2f_Dynamic* a	// pointer
		);

		/// <param name="a">: value to be compared</param>
		AE2F int8_t weigh(
			Container::Linked a		// value to compare
		);

		/// <param name="a">: value to compare</param>
		AE2F int8_t weigh(
			Container::Linked* a	// value to compare
		);

		/// <param name="a">: value to be inserted</param>
		/// <param name="b">: length selector</param>
		AE2F uint64_t puts(
			Container::Linked a,	// value to be inserted
			char b					// length selector
		);

		/// <param name="a">: value to be inserted</param>
		/// <param name="b">: length selector</param>
		AE2F uint64_t puts(
			Container::Linked* a,	// value to be inserted
			char b					// length selector
		);

		/// <typeparam name="p">: pointer type</typeparam>
		template<typename p> p* point() { return (p*)this->p->c.raw; }

		/// <typeparam name="p">: value type</typeparam>
		/// <param name="a">: index</param>
		template<typename p>	// value type
		p& at(
			uint64_t a			// index
		) {
			switch (this->p->len < a * sizeof(p)) {
			case 0: return this->point<p>()[a];
			case 1: return *this->point<p>();
			}
		}
		AE2F uint64_t len();

		/// <typeparam name="p">: counter type</typeparam>
		template<typename p = char>	// counter type
		uint64_t count() { return this->p->len / sizeof(p); }
	};
	
	class fun<Container::Dynamic>::setter : public fun<Container::Dynamic>::getter {
	protected:
		/// <param name="a">: container</param>
		/// <param name="b">: container length</param>
		AE2F setter& re(
			void* a,		// container
			uint64_t b		// container length
		);
	public:

		/// <param name="a">: container old</param>
		AE2F setter(
			struct ae2f_Dynamic* a	// container old
		);

		/// <param name="a">: new length</param>
		AE2F setter& re(
			uint64_t a	// new length
		);

		/// <typeparam name="v">: array type</typeparam>
		/// <param name="a">: pointer(array)</param>
		/// <param name="b">: pointer length</param>
		template<typename v>	// array type
		setter& re(
			v a,				// pointer(array)
			uint64_t b			// pointer length
		) {
			static_assert(std::is_pointer<v>::value, "Dynamic setter re: arr must be a pointer");
			return this->re((void*)a, b);
		}


		/// <typeparam name="v">: array type</typeparam>
		/// <param name="a">: initialiser array</param>
		template<typename v>			// array type
		setter& re(
			std::initializer_list<v> a	// initialiser array
		) { return re(a.begin(), a.size() * sizeof(v)); }

		/// <param name="a">: string</param>
		AE2F setter& re(
			std::string a	// string
		);

		AE2F fun<Container::Dynamic>::starter free();
	};
	
	class fun<Container::Dynamic>::starter {
		struct ae2f_Dynamic* p;
	public:

		/// <param name="a">: pointer</param>
		AE2F starter(
			struct ae2f_Dynamic* a	// pointer
		);

		/// <param name="len">: length</param>
		AE2F setter alloc(
			uint64_t a		// length
		);

		/// <param name="a">: array</param>
		/// <param name="b">: array length</param>
		/// <returns></returns>
		AE2F setter alloc(
			void* a,		// array
			uint64_t b		// array length
		);

		/// <param name="a">: source</param>
		AE2F setter copy(
			getter a		// source
		);

		/// <param name="a">: source pointer</param>
		AE2F setter copy(
			getter* a		// source pointer
		);

		/// <param name="a">: source</param>
		AE2F setter copy(
			struct ae2f_Dynamic a	// source
		);

		/// <param name="a">: source ptr</param>
		AE2F setter copy(
			struct ae2f_Dynamic* a	// source ptr
		);

		/// <typeparam name="v">: array type</typeparam>
		/// <param name="a">: array</param>
		/// <param name="b">: array length</param>
		template<typename v>	// array type
		setter alloc(
			v a,		// array
			uint64_t b	// array length
		) {
			static_assert(std::is_pointer<v>::value, "Dynamic starter alloc: arr must be a pointer");
			return this->alloc((void*)a, b);
		}

		/// <param name="a">: container</param>
		/// <param name="b">: container length</param>
		AE2F getter link(
			void* a,	// container
			uint64_t b	// container length
		);

		/// <typeparam name="v">: array type</typeparam>
		/// <param name="a">: array pointer</param>
		/// <param name="b">: array length</param>
		template<typename v>	// array type
		getter link(
			v a,				// array pointer
			uint64_t b			// array length
		) {
			static_assert(std::is_pointer<v>::value, "Dynamic starter link: arr must be a pointer");

			switch ((uint64_t)a) {
			case 0: throw 3;
			default: break;
			}

			this->p->c.raw = (void*)a;
			this->p->len = b;

			return this->p;
		}
	};

	namespace Container {
		class Dynamic : public fun<Dynamic>::setter {
		protected:
			struct ae2f_Dynamic obj;
		public:

			/// <param name="a">: length</param>
			AE2F Dynamic(
				uint64_t a	// length
			);

			/// <param name="a">: string</param>
			AE2F Dynamic(
				std::string a	// string
			);

			/// <param name="a">: getter</param>
			AE2F Dynamic(
				getter a	// getter
			);

			/// <param name="a">: getter pointer</param>
			AE2F Dynamic(
				getter* a	// getter
			);

			/// <typeparam name="v">: array pointer type</typeparam>
			/// <param name="a">: array</param>
			/// <param name="b">: length</param>
			template<typename v>	// array pointer type
			Dynamic(
				v a,		// array
				uint64_t b	// length
			) : setter(&this->obj){
				fun<Dynamic>::starter(&obj).alloc(a, b);
			}

			/// <typeparam name="v">: array type</typeparam>
			/// <param name="a">: list to initialise</param>
			template<typename v>			// array type
			Dynamic(
				std::initializer_list<v> a	// list to initialise
			) : setter(&this->obj) {
				fun<Dynamic>::starter(&obj).alloc(a.begin(), a.size() * sizeof(v));
			}

			AE2F ~Dynamic();
			AE2F Linked linken();
		};
		class Linked : public fun<Dynamic>::getter {
		protected:
			struct ae2f_Dynamic obj;
		public:

			/// <typeparam name="v">: array pointer type</typeparam>
			/// <param name="a">: array</param>
			/// <param name="b">: length</param>
			template<typename v>	// array pointer type
			Linked(
				v a,		// array
				uint64_t b	// length
			) : fun<Dynamic>::getter(&this->obj){
				fun<Dynamic>::starter(&obj).link(a, b);
			}

			/// <typeparam name="v">: array pointer type</typeparam>
			/// <param name="a">: array</param>
			template<typename v>	// array pointer type
			Linked(
				std::initializer_list<v>& a	// array
			) : fun<Dynamic>::getter(&this->obj) {
				fun<Container::Dynamic>::starter(&obj).link(a.begin(), a.size() * sizeof(v));
			}

			/// <param name="a">: string</param>
			AE2F Linked(
				std::string& a	// string
			);

			/// <param name="a">: getter</param>
			AE2F Linked(
				fun<Container::Dynamic>::getter a	// getter
			);

			/// <param name="a">: getter</param>
			AE2F Linked(
				fun<Container::Dynamic>::getter* a	// getter
			);

			/// <param name="a">: value source</param>
			AE2F Linked(
				struct ae2f_Dynamic a	// value source
			);
		};
	}
}

#define AE2F_CONTAINER_DYNAMIC_CPP
#endif // AE2F_CPP
#endif // !AE2F_CONTAINER_DYNAMIC_CPP