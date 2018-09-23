#include <cstdlib>
#include <algorithm>
#include <iostream>
#include <vector>

#ifndef INCLUDE_GUARD
#define INCLUDE_GUARD

using std::cout;

namespace MyNamespace {
	template <class T>
	class MyClass {
		T Variable;

	  public:
		MyClass() = default;
		MyClass(const MyClass &rhs) : Variable(rhs.Variable) {}
		MyClass(MyClass &&rhs) = delete;
		virtual ~MyClass() = 0;
		MyClass &operator++() {
			switch(Variable % 3) {
			case 0: ++Variable; break;
			case 1: --Variable; break;
			default: Variable *= 2; break;
			}
		}
		friend std::ostream &operator<<(std::ostream &os, MyClass &out) {
			os << out.Variable;
		}
	};

} // namespace MyNamespace

int main(int argc, char const *argv[]) {
	using namespace MyNamespace;
	std::vector<MyClass<int>> MyVector(argc);
	using MC = typename decltype(MyVector)::value_type;
	std::for_each(MyVector.begin(), MyVector.end(), [](MC &lhs) { ++lhs; });
	for(auto myclass : MyVector) { cout << myclass << std::endl; }
	return EXIT_SUCCESS;
}
#endif
