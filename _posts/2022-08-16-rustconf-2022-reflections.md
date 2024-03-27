---
layout: post
title: Reflections on RustConf 2022
authors:
  - davidtwco
---
Despite being on Rust’s compiler team, I have never attended a RustConf –
Rust’s flagship yearly conference – so I jumped at the chance to attend this
years in Portland, Oregon on behalf of Huawei’s Trusted Programming Lab. Rust
is an exciting new systems programming language that combines the speed and
control of low-level languages like C and C++ with the expressivity and safety
of higher-level languages, making it a perfect choice for Huawei. Huawei is a
founding platinum member of the Rust Foundation and our Trusted Programming lab
contributes to the project and supports various members of the Rust project
from the compiler, library and developer tools teams (including me!).

![]({{site.baseurl}}/images/2022-08-16/0-conference-centre.jpeg)
_Portland’s Oregon Convention Centre_

It started for me on the day before the conference itself, with the Rust
Foundation’s “RustConf Happy Hour (and a half)”, a drinks and canapes reception
for conference attendees to meet each other. One of the exciting parts of
attending any Rust event is the opportunity to meet with other contributors
that I’ve worked with for years but never had the chance to meet in person –
particularly as the pandemic has made “All Hands” events for contributors
impractical in the last few years - a particular highlight was meeting with
other contributors to the [diagnostic translation effort][diag_blog] that I’m
leading (contributions welcome!).

Another of the exciting aspects of attending RustConf was the opportunity to
meet up with the Rust team at Futurewei, which is a Silver member of the Rust
Foundation and supports members of the Rust compiler, language, cargo and
library teams. I regularly coordinate with the team at Futurewei and we support
each other’s upstream work to better serve the Rust community. Being in
different continents, we don’t often have the opportunity to meet in person, so
it was great to finally meet them all and they were very gracious hosts.

![]({{site.baseurl}}/images/2022-08-16/1-welcome.jpeg)
_Welcome to RustConf!_

RustConf started with the two opening keynotes by Josh Triplett and Tyler
Mandry. Josh is on the Rust team at Futurewei and co-leads the Rust language
team, and Tyler is on the Fuchsia team at Google and is on the Rust compiler
team. Josh spoke about the importance of the project’s processes to its success
and took the audience on a journey through some of Rust’s history and how those
processes contributed to the development of some of Rust’s most recognizable
features (such as the “?” operator). It perfectly encapsulated how we strike a
balance between providing a stable foundation to build upon while still
evolving – it’s a must-watch talk to understand the Rust project. Tyler
unpacked the soul of Rust, the values that underpin everything we do – openness
and inclusion – and how we can sustain that soul into the future.

![]({{site.baseurl}}/images/2022-08-16/2-josh-talk.jpeg)
_Josh Triplett’s keynote talk_

There were lots of great talks at the conference. A standout talk for me was
Iryna Shestak’s talk about writing a GraphQL compiler in Rust. Iryna’s
presentation had a striking visual style which was very engaging and it was
awesome to see how some of the compiler technologies from the Rust compiler -
such as salsa, which is inspired by the Rust compiler’s query system - and
rust-analyzer are being used in other compiler projects that are very different
from those in which they were created. Of course, I’d be remiss if I didn’t
also recommend Joshua Nelson’s excellent introduction to the Rust compiler’s
bootstrapping process, and Michael Gattozzi’s weird expressions and where to
find them.

I was particularly impressed by Julie Wang’s closing keynote on the use of Rust
at Parallel Systems. They are building fully autonomous electric freight trains
and their entire tech stack is in Rust. Not only did the talk have lots of
really very cool videos of autonomous trains, it was also an great example of
the ways that Rust’s type system can be used to provide compile-time
guarantees. I don’t always have a lot of time to see the really exciting things
that people are building with Rust, so this talk was fantastic for that.

![]({{site.baseurl}}/images/2022-08-16/3-trains.png)
_Fully autonomous electric freight trains in Rust!_

![]({{site.baseurl}}/images/2022-08-16/4-sponsored-huawei.jpeg)
_Sponsored by Huawei!_

On the day following the conference, the Rust Project organized a “RustConf
PostConf UnConf”, an unconference-style event for users and implementors of the
language to discuss the project’s development. This was my first unconference,
and it was an interesting experience. An unconference is split into multiple
sessions – we had six slots, forty-five minutes in the morning and half an hour
in the afternoon, with three sessions in each slot – and it starts with
everyone having the opportunity to propose a topic that they would like to
facilitate a discussion around. Sessions varied from “Writing about Rust” to
“Making rustc faster”, from “High-throughput proxies” to “Bringing Rust to
academia and learning”, and even “Getting it right by doing it wrong”.

![]({{site.baseurl}}/images/2022-08-16/5-unconf-session.jpeg)
_A session at the RustConf PostConf UnConf_

There were lots of interesting discussions at the unconference. As a member of
the compiler team, I particularly enjoyed Nicholas Nethercote’s session on
“Making rustc faster”. Nicholas is on the Rust team at Futurewei and is the
Rust compiler team’s expert on compiler performance. During the session, we
brainstormed various avenues for investigation that could lead to improvements
in compiler performance. While our first unconference was undoubtably a
successful experiment, I felt that it would be better in years to come if it
focused on topics around the usage of Rust, topics about improving the language
and tooling were interesting (particularly to me!) but would have benefitted
from having all of the relevant experts in the room, which wasn’t always the
case.

![]({{site.baseurl}}/images/2022-08-16/6-unconf-closing.jpeg)
_Closing thoughts from Bart Massey at the RustConf PostConf UnConf_

My time in Portland concluded with a dinner at Andina in downtown Portland with
leaders from the [Rust Edu][rust_edu] organization. Rust Edu is an exciting effort
spearheaded by Bart Massey of Portland State University, Will Crichton of Brown
University and Cyrus Omar of the University of Michigan to promote the teaching
of Rust in colleges and universities by developing a Rust curriculum and to
improve the learnability of Rust.

![]({{site.baseurl}}/images/2022-08-16/7-rust-edu-dinner.jpeg)
_Dinner with leaders from the Rust Edu organization_

It is always great to meet users of Rust and to catch up with colleagues and
contributors from the Rust project, and RustConf was a great opportunity for
both.

[diag_blog]: https://blog.rust-lang.org/inside-rust/2022/08/16/diagnostic-effort.html
[rust_edu]: https://rust-edu.org/
