---
name: Split DWARF
area: compiler
status: 
  label: complete
  css_class: open
buttons:
  - label: Tracking Issue (rust-lang/rust#34651)
    link: https://github.com/rust-lang/rust/issues/34651
  - label: Release Notes (1.65)
    link: https://blog.rust-lang.org/2022/11/03/Rust-1.65.0.html#splitting-linux-debuginfo
---
rustc already has support on stable for split debuginfo on Windows (`*.pdb`) and macOS (`*.dSYM`), 
but is missing support for split debuginfo  on Linux (Split DWARF's `*.dwp`/`*.dwo` files).

Large applications built with debug information have slow linking times, can experience 
out-of-memory failures at link time and slow debugger start-up times. Furthermore, debuginfo in 
these applications may result in a significant increase in storage requirements and additional 
network traffic in distributed build environments.
