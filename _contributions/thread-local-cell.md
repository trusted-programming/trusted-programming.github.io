---
name: Thread local Cell methods
area: library
status:
  label: in-progress
  css_class: attention
buttons:
  - label: RFC
    link: https://rust.tf/rfc3184
  - label: Tracking issue
    link: https://github.com/rust-lang/rust/issues/92122
---
Nearly all `thread_local! { … }` variables are of `Cell` or `RefCell` type,
since without interior mutability, they'd just be thread local constants.

The variable created by the `thread_local! { … }` macro (of type `LocalKey<T>`)
is used by calling `.with(|v| ..)` on it, to restrict the lifetime to stay within the current thread.
(See [this example](https://doc.rust-lang.org/stable/std/thread/struct.LocalKey.html#examples).)

The values inside a `Cell` and `RefCell` are used through methods like `.set()`, `.get()`, `.borrow()`, etc.

This results in a lot of verbosity to access a simple thread local (mutable) integer:
`LOCAL.with(|v| v.set(123))`.

[RFC 3184](https://rust.tf/rfc3184) adds methods on `LocalKey<Cell<T>>` and `LocalKey<RefCell<T>>`
to shorten such cases to just: `LOCAL.set(123)`.

Additionally, `LOCAL.set(value)` directly initializes the thread local with the specified value,
unlike `LOCAL.with(|v| v.set(value))`, where `with` will (on the first call) initialize
the thread local with the default value first and `set` will then immediately destroy that value by overwriting it with the new value.
