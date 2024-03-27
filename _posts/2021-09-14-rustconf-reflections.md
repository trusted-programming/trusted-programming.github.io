---
layout: post
title: Reflections on RustConf 2021
authors:
  - yijunyu
---

The annual Rust conference ended successfully on September 15, 2021. Although it still had to be 
held online again due to the COVID-19 pandemic, there has been signficant progress last year: the 
established Rust Foundation sustained with Google, Huawei, AWS, Mozilla, Microsoft enterprises 
support, the readiness of Rust 2021 Edition in October after the last stable edition in Rust 2018. 
Increasing number of enterprises start to use Rust in production, as reflected by a record high 
number of sponsors for the conference, while over 2,000 people participated in the Discord live 
discussions, another testament to the popularity and importance of Rust programming language in the 
software industry. 

The conference opens with two keynote updates given by Niko Matsakis and Mara Bos, respectively 
presenting a vision of the development of Rust language and library. 

1. From the perspective of safe and trustworthy programming language, Niko said 2021 was an exciting 
  year for Rust, it has been adopted in mission-critical systems and has made significant progress 
  in sustainability, e.g., considered by Linux kernel development. He emphasizes that although the 
  performance of the Rust language is already close to that of the C language, the ease of 
  learning and use of the Rust language needs to catch up with those of scripting languages. This 
  is not to say that Rust should have all the features of various programming languages, rather, 
  the emphasis is on addressing the pain points in practical uses. For example, it is not that 
  hard to add the async/await language feature, but extremely difficult to constrain the added 
  feature to introduce minimal changes to the language syntax. By doing that, we can make Rust's 
  future brighter. 
  Although Rust has been on top of the most favorite programming language by Stack Overflow polls, 
  there is still much room of improvement in popularity. Therefore, a goal is to let new users 
  learn the language in as short as 6 weeks to gain productivity. To do so, the key is to have 
  "whole product thinking", enrich the language and its learning materials to make the Rust 
  ecosystem rich. Guillaume Gomez, a Huawei expert in the Rust community for years, also believes 
  that Rust could do a better job with grammar and documentations which he is working on. Lily 
  Mara's later presentation echoes this goal that: To better popularize Rust, it is desirable to 
  simplify some of its features, even at the expense of performance where it is tolerable. These 
  performance losses can easily be made up after more language features are mastered. 
2. From the perspective of library development, Mara introduces an in-depth story: The Rust 
  standard library already has mutex implementations based on OS-specific implementations (e.g. 
  pthreads, Win32), but these APIs are designed for C use cases and don’t map well to Rust, which 
  requires expensive workarounds such as boxing the mutex. The `parking-lot` crate is a new 
  implementation designed for Rust which significantly improves performance, made by Huawei expert 
  Amanieu d'Antras in 2018. However, its inclusion in the standard library has lead community 
  discussions for years and has not been properly resolved. While both Rust and `parking-lot` have 
  been improved and developed over the years, they have never been combined. Under Mara's 
  leadership, the Rust community has adopted a strategy of removing the obstacles over the last few 
  months by making some baby steps which may lead to a significant solution. For example, getting 
  Microsoft to cooperate with the revision of their operating system API specification related to 
  mutex. This has played a role in integrating the development of other operating systems. These 
  steps helped rebuilding the confidence in the Rust community to integrate `parking-lot`. All open 
  source development tasks, even as hard as `parking-lot` integration, can learn from the lessons: 
  with determination and leadership to gradually identify and remove obstacles, the momentum of 
  Rust's Library development is even more promising. From this year onwards, the Rust Library team 
  will reorganise into two specialized teams, one focusing on the maintenance of the Library APIs 
  and the other on the development of the core Library itself. It is likely that we will see more 
  library features, such as integrating `parking-lot`, SIMD, and inline assembly into the basic 
  standard library of the Rust language 2021 Edition.

Apart from these keynotes, Brian Martin from Twitter introduced the experience of rewriting the 
buffering framework Pelikan, Hugo Peixoto from the community shared his experience in developing 
Pokemon recognision tool in Rust, Luke Westby shared the experience to extend browsers to look 
offline. After these interesting talks, Nell Shamrell-Harrington from Microsoft introduced the 
well-received This Week in Rust series and the insights from its 7 years of updates, helped greatly 
by the Rustaceans.  

Desipite of the COVID, Rust 2021 is still presented by a diversified speakers, interesting topics 
and active atmosphere. Everything will be possible in the future of Rust.

北京时间2021年9月15日，一年一度的Rust语言官方大会Rustconf 2021圆满结束。由于
Covid-19的原因，今年的大会和去年一样采取线上的方式举行，组织形式也与去年大同小
异。然而，在这看似不变背后，隐藏着Rust社区过去一年的巨大变化：Rust基金会正式成
立，谷歌、华为、AWS、Mozilla、微软成为创始白金会员，Rust社区的可持续发展迈出了
极为重要的一步；三年一度的Rust  2021 Edition基本准备就绪，将在10月份正式发布；
越来越多的企业开始在生产环境中使用Rust语言等等。具体到本次线上会议的参与度上，
创纪录的10家企业选择成为大会最高级别的赞助商、多达2000人参与了会议互动同样反应
了这一点。 会议的开场演讲由Niko Matsakis和Mara Bos给出。首先，Niko Matsakis代
表语言团队(Lang Team)进行了进展同步。他在演讲中表示，2021年对Rust来说是非常激动
人心的一年，在关键系统中采用和可持续发展方面有了显著的进展，Rust 甚至被考虑用于
linux 内核。在此基础上，尽管当前的Rust在性能方面已经达到已经接近C语言的水平、
但在易用性方面还需要向脚本语言看齐。比如，增加Async/Await这个异步的语言特性并
不难，难的在于如何让这个增加的特性对语法引入最小的修改。做到这一点，才能让Rust
的未来发展得更好。另一方面，虽然Rust已经长期位列Stack Overflow最受喜爱的编程语
言第一，然而在流行程度上还有很大的提升空间。对此，Niko提出未来的目标是让新用户
在6周甚至更短的时间内从Rust中获得生产力，为了朝这个方向努力，除了需要保持当前对
可靠性、性能、简单易用这三个方面的关注外，还需要强化“全产品思维（Whole product
thinking）”，在语言本身和标准库之外丰富学习资料与工具，构建一个丰富、稳定的Rust
生态系统。作为耕耘Rust社区多年的专家，Guillaume Gomez也认为，在语法和文档适配
方面Rust还可以做得更好。后续Lily Mara的有关不要过度优化演讲中，同样回应了这个目
标：为了更好地普及Rust，哪怕在不重要的地方牺牲一点性能，简化Rust的一些特性也是
可取的。掌握了更多的语言特性以后，这些性能的损失可以很容易补回来。 接下来，Mara
Bos代表库团队（Libs Team）同步了进展，从语言特性本身发展的视角看，Mara介绍了一
个很有代表性的叙事：Rust标准库中已经基于特定操作系统（pthreads，win32）初步实
现了mutex, 但是操作系统中的这些API是针对C的用例设计的，还不能直接映射到Rust的一
般用例上。如果要在Rust上绕过这些困难实现mutex需要昂贵的boxing方式。Parking lot
是华为Rust技术专家Amanieu d'Antras在2018年发起的针对Rust的场景实现的高性能mutex
库。可是在标准库中引入parking lot在社区引起了经年的讨论，仍然无法彻底解决。虽
然在这个过程中，Rust和Parking lot都分别得到了很好的改进和发展，但是始终无法如
愿把两者结合。在Mara的领导下，这几个月Rust社区采取了化整为零的策略，逐一排除这
个跨平台同步互斥特性的障碍，获得了重大进展：比如让微软配合修改了操作系统API文
档规约，间接地起到了整合操作系统发展的作用，重新拾起了Rust社区整合parking lot
的信心。同时从今年开始，库团队会分为两个专业团队，一个专注于Library API的维护，
另一个专注于Library核心本身的发展。上述故事表明，在Rust语言发展到当今的成熟度
下，对于Parking Lot这样的硬骨头，库团队也在通过逐层分解，小步前进的方式解决。可
以预见的是，在未来会有更多的库特性（比如SIMD集成到Rust语言的标准库中来，为Rust
用户的使用提供更多的便利。 除了上述主题演讲，本次的Rustconf大会还有 来自Twitter
的Brian Martin介绍的用Rust重写缓存框架Pelikan的经历、社区开发者Hugo Peixoto分
享的用Rust开发宝可梦卡、Luke Westby分享的利用Rust开发浏览器拓展来删除页面部分区
域使自己“离线”等有趣的话题。最后，来自微软的Nell Shamrell-Harrington介绍了Rust
社区广受好评的周报“This Week in Rust”发布七年以来背后的一些有意思的洞察，展现
出Rust爱好者（Rustaceans）们互帮互助的良好习惯。总的来说，尽管受到疫情的影响，
RustConf 2021仍然一如既往的展现出了演讲人背景的多样性、议题的趣味性和活跃的气
氛，Rust未来可期。
