---
name: Reduce binary size impact of formatting machinery 
area: library
status: 
  label: in-progress
  css_class: attention
buttons:
  - label: Tracking Issue (rust-lang/rust#99012)
    link: https://github.com/rust-lang/rust/issues/99012
---
The `format_args!()` macro and underlying `std::fmt::Argument` type form the
basis of all printing and formatting machinery in the Rust standard library,
such as `println!()`, `format!()`, and `write!()`.

By improving the macro and the in-memory representation of the `fmt::Arguments`
type, a significant reduction in binary size can be achieved. This is
especially important for embedded software running on devices with limited
storage and memory.

To be more flexible, currently working on the lifetime of hygenic macros to
ensure safe expansion of unsafe code in the macros.
