---
name: Delegation
area: compiler
status: 
  label: in-progress
  css_class: attention
buttons:
---
Support syntactic sugar for conveniently delegating implementation to other types.

1. Implement a compiler pass detecting delegation-like patterns in code

2. Run the pass on code from crates.io, analyze found delegation patterns, analyze previous delegation proposals

3. Implement syntactic sugar for common delegation patterns as a procedural macro or a built-in language feature

4. Write an RFC that proposes including delegation into Rust language
