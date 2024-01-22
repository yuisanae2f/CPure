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

		AE2F getter(struct ae2f_Dynamic* p);
		AE2F int8_t weigh(Container::Linked another);
		AE2F int8_t weigh(Container::Linked* another);
		AE2F uint64_t puts(Container::Linked, char fitsToThis);
		AE2F uint64_t puts(Container::Linked*, char fitsToThis);

		template<typename p> p* point() { return (p*)this->p->c.raw; }
		template<typename p> p& at(uint64_t idx) {
			switch (this->p->len < idx * sizeof(p)) {
			case 0: return this->point<p>()[idx];
			case 1: return *this->point<p>();
			}
		}
		AE2F uint64_t len();
		template<typename p = char> uint64_t count() { return this->p->len / sizeof(p); }
	};
	
	class fun<Container::Dynamic>::setter : public fun<Container::Dynamic>::getter {
	protected:
		AE2F setter& _re(void* arr, uint64_t len);
	public:
		AE2F setter(struct ae2f_Dynamic* p);
		AE2F setter& re(uint64_t len);

		
		template<typename v>
		setter& re(v arr, uint64_t len) {
			static_assert(std::is_pointer<v>::value, "Dynamic setter re: arr must be a pointer");
			return this->_re((void*)arr, len);
		}

		template<typename v>
		setter& re(std::initializer_list<v> l) {
			return re(l.begin(), l.size() * sizeof(v));
		}

		AE2F setter& re(std::string s);

		AE2F fun<Container::Dynamic>::starter free();
	};
	
	class fun<Container::Dynamic>::starter {
		struct ae2f_Dynamic* p;
	public:
		AE2F starter(struct ae2f_Dynamic* p);
		
		AE2F setter alloc(uint64_t len);

		AE2F setter alloc(void* arr, uint64_t len);

		AE2F setter copy(getter src);
		AE2F setter copy(getter* src);
		AE2F setter copy(struct ae2f_Dynamic src);

		template<typename v>
		setter alloc(v arr, uint64_t len) {
			static_assert(std::is_pointer<v>::value, "Dynamic starter alloc: arr must be a pointer");
			return this->alloc((void*)arr, len);
		}

		AE2F getter link(void* arr, uint64_t len);

		template<typename v>
		getter link(v arr, uint64_t len) {
			static_assert(std::is_pointer<v>::value, "Dynamic starter link: arr must be a pointer");

			this->p->c.raw = (void*)arr;
			this->p->len = len;

			return this->p;
		}
	};

	namespace Container {
		class Dynamic : public fun<Dynamic>::setter {
		protected:
			struct ae2f_Dynamic obj;
		public:
			AE2F Dynamic(uint64_t len);
			AE2F Dynamic(std::string s);
			AE2F Dynamic(getter g);
			AE2F Dynamic(getter* g);

			template<typename v> Dynamic(v arr, uint64_t len) : setter(&this->obj){
				fun<Dynamic>::starter(&obj).alloc(arr, len);
			}

			template<typename v>
			Dynamic(std::initializer_list<v> l) : setter(&this->obj) {
				fun<Dynamic>::starter(&obj).alloc(l.begin(), l.size() * sizeof(v));
			}

			AE2F ~Dynamic();
			AE2F Linked linken();
		};
		class Linked : public fun<Dynamic>::getter {
		protected:
			struct ae2f_Dynamic obj;
		public:
			template<typename v> Linked(v arr, uint64_t len) : fun<fun<Dynamic>::getter>(&this->obj){
				fun<Dynamic>::starter(&obj).link(arr, len);
			}

			template<typename v>
			Linked(std::initializer_list<v>& l) : fun<fun<Dynamic>::getter>(&this->obj) {
				fun<Container::Dynamic>::starter(&obj).link(l.begin(), l.size() * sizeof(v));
			}

			AE2F Linked(std::string& s);

			AE2F Linked(fun<Container::Dynamic>::getter g);
			AE2F Linked(fun<Container::Dynamic>::getter* g);

			AE2F Linked(struct ae2f_Dynamic origin);

			AE2F Linked(Dynamic d);
			AE2F Linked(Dynamic* d);
		};
	}
}

#define AE2F_CONTAINER_DYNAMIC_CPP
#endif // AE2F_CPP
#endif // !AE2F_CONTAINER_DYNAMIC_CPP