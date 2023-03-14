---
name: Polymorphization
area: compiler
status: 
  label: blocked by trait system rewrite
  css_class: accent
---
Polymorphization is a code-size optimisation, aimed at reducing unnecessary monomorphization, 
thereby reducing the quantity of LLVM IR generated. By reducing the quantity of generated LLVM IR, 
it is expected that time spent in LLVM during compilation will decrease, resulting in improved 
overall compilation times.