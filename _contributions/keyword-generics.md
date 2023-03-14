---
name: Keyword Generics
area: compiler
status: 
  label: blocked by trait system rewrite
  css_class: accent
buttons:
  - label: Announcement Blog Post
    link: https://blog.rust-lang.org/inside-rust/2022/07/27/keyword-generics.html
---
The Keyword Generics Initiative is a new initiative in Rust with the goal researching the ability 
to abstract over the color of functions or "effects". See the official announcement post for more 
details. It is currently not possible to nicely abstract over "const-ness" and "async-ness" in 
stable Rust.