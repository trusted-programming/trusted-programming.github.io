---
name: Trait System Rewrite
area: compiler
status: 
  label: in-progress
  css_class: attention
buttons:
  - label: Tracking Issue (rust-lang/types-team#58)
    link: https://github.com/rust-lang/types-team/issues/58
---
Start an initiative with the goal of replacing the current trait system implementation of rustc. 
This new implementation should fully replace both fulfill and evaluate and offer an API a lot closer 
to the ideal of `chalk`/`a-mir-formality`.
