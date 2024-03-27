---
name: Unsafe Keyword Classifier
area: research
status: 
  label: in-progress
  css_class: attention
buttons:
  - label: Roadmap
    link: https://github.com/trusted-programming/curs/issues/1
---
Training a machine learning model to efficiently classify Rust functions and blocks as unsafe or 
safe (using 374 mLOC from [crates.io][cio]). Accuracy on functions is 95%, and accuracy on blocks 
is 85%. Results can be obtained in less than a second while editing the item, faster than waiting 
for compilation.

[cio]: https://crates.io
