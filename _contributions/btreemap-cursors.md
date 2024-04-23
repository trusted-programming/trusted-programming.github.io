---
name: Cursor support for BTreeMap
area: library
status: 
  label: in-progress
  css_class: attention
buttons:
  - label: API Change Proposal
    link: https://github.com/rust-lang/libs-team/issues/141
---
One of the fundamental properties of `BTreeMap` is that it maintains elements in sorted order and 
enables efficient element lookup in `O(log(N))` time. However the current API is overly fitted 
towards a key-value API like a HashMap and fails to expose the ability to make queries about 
"nearby" keys. For example, finding the first element whose key is greater than X.

This proposal adds `Cursor` and `CursorMut` types to `BTreeMap` based on  [similar][cursor] 
[types][cursor_mut] for `LinkedList`.

[cursor]: https://doc.rust-lang.org/nightly/std/collections/linked_list/struct.Cursor.html
[cursor_mut]: https://doc.rust-lang.org/nightly/std/collections/linked_list/struct.CursorMut.html
