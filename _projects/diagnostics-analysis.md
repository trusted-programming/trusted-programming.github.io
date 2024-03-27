---
name: Using machine learning and code transformations to fix diagnostics/lints 
area: research
status: 
  label: in-progress
  css_class: attention
buttons:
  - label: Roadmap
    link: https://github.com/trusted-programming/rust-diagnostics/issues/1
---
Analsysis of diagnostic warnings from non-machine-applicable [Clippy][clippy] lints finds 21 
warnings per kLOC are found on average of [crates.io projects][cio], whilst 0.49 warnings per kLOC 
in the [Rust compiler][rustc]. By learning from manual warning fixes in `rust-lang/rust` Git 
repositories, warnings can be automatically fixed through code transformations and machine learning.

[clippy]: https://github.com/rust-lang/rust-clippy
[cio]: https://crates.io
[rustc]: https://github.com/rust-lang/rust