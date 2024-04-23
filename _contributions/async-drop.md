---
name: Async Drop
area: compiler
status: 
  label: in-progress
  css_class: attention
buttons:
---
Support asynchronous destruction of objects running out of scope:

1. Implement code generation for asynchronous drop

2. Implement prevention measures for running asynchronous drop synchronously

3. Implement type system pre-requisites for (2) if necessary - type system refactoring, linear types

4. Implement any other features in rustc compiler that will help Rust language team to make a decision about including async drop to the language
