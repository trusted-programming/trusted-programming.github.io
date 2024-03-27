---
name: Type Privacy and private-in-public lints
area: compiler
status: 
  label: in-progress
  css_class: attention
buttons:
  - label: Tracking Issue (rust-lang/rust#48054)
    link: https://github.com/rust-lang/rust/issues/48054
  - label: Bug fix (rust-lang/rust#112670)
    link: https://github.com/rust-lang/rust/issues/112670
---
Right now this is mostly about leaking private types from public interfaces
(like functions returning private types), and lints trying to prevent it.

People have been disagreeing what "public" means in this context, and the RFC
specifies new design based on reachability that will match people's intuition
better. Ivakin Kirill is implementing the reachability algorithms and lints
now.
