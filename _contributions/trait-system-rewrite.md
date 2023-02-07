---
name: Trait System Rewrite
area: compiler
status: 
  label: in-progress
  css_class: attention
buttons:
  - label: Types Team Initiative Proposal (rust-lang/types-team#58)
    link: https://github.com/rust-lang/types-team/issues/58
  - label: Types Team Tracking Issue (rust-lang/types-team#76)
    link: https://github.com/rust-lang/types-team/issues/76
  - label: Implementation Tracking Issue (rust-lang/rust#107374)
    link: https://github.com/rust-lang/rust/issues/107374
---
Start an initiative with the goal of replacing the current trait system implementation of rustc. 
This new implementation should fully replace both fulfill and evaluate and offer an API a lot
closer to the ideal of `chalk`/`a-mir-formality`.

Refactoring the trait solver of rustc is necessary for many future type system extensions and
bug fixes. The new implementation will also be more performant than the current system and is
expected to improve the compile time of many existing crates.