---
name: Trait System Rewrite
area: compiler
status: 
  label: in-progress
  css_class: attention
buttons:
  - label: Types Team Tracking Issue (rust-lang/types-team#76)
    link: https://github.com/rust-lang/types-team/issues/76
  - label: Implementation Tracking Issue (rust-lang/rust#107374)
    link: https://github.com/rust-lang/rust/issues/107374
---
Start an initiative with the goal of replacing the current trait system implementation of rustc. 
This new implementation should fully replace both fulfill and evaluate and offer an API a lot closer 
to the ideal of `chalk`/`a-mir-formality`.

Currently working on opaque type support for the next generation trait solver.
With that all stable type system features are supported by the new solver. Will
still need a lot of small improvements afterwards: both to remove the last
dependencies on the old solver and to avoid breaking stable code when enabling
the new solver by default.
