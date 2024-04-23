---
name: Improvements of Standard Library Mutex 
area: library
status: 
  label: complete
  css_class: open
buttons:
  - label: Tracking Issue (rust-lang/rust#93740)
    link: https://github.com/rust-lang/rust/issues/93740
---
On most platforms, these structures are currently wrappers around their pthread equivalent, such as 
`pthread_mutex_t`. These types are not movable, however, forcing us to wrap them in a `Box`, 
resulting in an allocation and indirection for our lock types. This also gets in the way of a 
const constructor for these types, which makes static locks more complicated than necessary. 

In terms of performance, this feature has enabled at least 2x speedup for reducing the overhead of 
locks, while in the extreme situations, super-linear speed up for multiple-core/multithread usage 
scenarios.