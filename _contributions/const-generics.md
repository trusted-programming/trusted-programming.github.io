---
name: Constant Generics
area: compiler
status: 
  label: blocked by trait system rewrite
  css_class: accent
buttons:
  - label: Tracking Issue for complex Generic Constants (rust-lang/rust#76560)
    link: https://github.com/rust-lang/rust/issues/76560
  - label: Tracking Issue for complex Constant Parameter Types (rust-lang/rust#95174)
    link: https://github.com/rust-lang/rust/issues/95174
  - label: Tracking Issue for _ as a const argument (rust-lang/rust#85077)
    link: https://github.com/rust-lang/rust/issues/85077
---
Const generics allows the use of values in the type system. Most often used for arrays with a 
generic size: [u32; N] where N can be an arbitrary usize. It improves code clarity, reusability 
and the general experience of working with arrays. This can reduce heap allocations and increase 
performance. Changes to the standard library relying on const generics also increased the 
compilation speed and documentation quality.
