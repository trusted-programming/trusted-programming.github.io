---
name: C strings
area: language and library
status:
  label: in-progress
  css_class: attention
buttons:
  - label: RFC for C string literals (merged)
    link: https://github.com/rust-lang/rfcs/pull/3348
  - label: Tracking Issue
    link: https://github.com/rust-lang/rust/issues/105723
  - label: RFC for UTF-8 in C and byte strings
    link: https://github.com/rust-lang/rfcs/pull/3349
  - label: Issue to make `&CStr` a thin pointer
    link: https://github.com/rust-lang/rust/issues/59905
---
The `&std::ffi::CStr` type is used to represent (null terminated) C strings in Rust.
Currently, this type has some subtle issues and is in many ways less ergonomic than the regular string type.

Some of the areas of potential improvement:

- There is no syntax for a `&CStr` literal. (Update: We now have the experimental `c"…"` syntax.)

- Due to a language limitation, `&CStr` is currently represented as a pointer+size pair.
  It should instead be just a pointer without a size, since the size is already determined by the null terminator.

  - Because of this, conversion from `*const c_char` requires scanning the whole string to find its size.
    That should be a free/nop conversion instead.
    See the note in [this documentation](https://doc.rust-lang.org/stable/std/ffi/struct.CStr.html#method.to_bytes).

  - For the same reason, `&CStr` cannot be passed through a C FFI boundary.
    Ideally, `&CStr` should have the same ABI as a `*const c_char`.

- `CStr` has far fewer useful methods than `str` (e.g. finding, splitting, replacing, etc.) making it hard to work with directly.

- `format!()` can only produce a `String`, not a `std::ffi::CString`.

- All bytes in a `CStr` (before the terminator) are non-zero, but none of the
  methods use `NonZeroU8` to leverage the type system for this invariant.
