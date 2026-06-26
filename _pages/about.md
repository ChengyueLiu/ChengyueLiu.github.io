---
permalink: /
title: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<a id="about"></a>

I am a Ph.D. candidate in Computer Science at [Nanyang Technological University](https://www.ntu.edu.sg/), Singapore, advised by Prof. Yang Liu. Having passed my qualifying examination, I am now working toward my dissertation.

Before my Ph.D., I worked as an Algorithm Engineer at Shanghai TanXun Technology and as a Software Engineer / Project Manager at AVIC Airborne Systems Generic Technology Co., Ltd., where I contributed to the development of the C919, China's first large commercial aircraft.

Feel free to reach me by email at [chengyue.liu@ntu.edu.sg](mailto:chengyue.liu@ntu.edu.sg).

# 🔬 Research Interests {#research}

During my Ph.D., my research has centered on **AI for Software Engineering**, with a particular focus on **software supply-chain security**, including software composition analysis (SCA) and vulnerability detection, where I have published several papers. I am also actively exploring **AI agent frameworks and their applications**: I have applied AI agents to binary software composition analysis with strong results (accepted at ISSTA 2026), and I built [Xept](https://xept.online), an AI agent for academic writing that represents an important step toward the broader vision of AI Scientists, now serving 2,000+ users.

# 🔥 News {#news}

- **[2026]** [*Understanding the Limitations of C/C++ Binary Third-Party Library Detection Tools: An Empirical Study at Scale*](/publication/2026-fse-binary-tpl-empirical) accepted at **FSE 2026**.
- **[2026]** [*Beyond Similarity Scores: Evidence-Based Third-Party Library Detection for C/C++ Binaries*](/publication/2026-issta-blade) accepted at **ISSTA 2026**.
- **[2026]** [*Mind the Gap: An Empirical Study of Synchronization Gaps, Delays, and Missed Opportunities in Software Forks*](/publication/2026-issta-software-forks) accepted at **ISSTA 2026**.
- **[2026]** [*From Similarity Ranking to Definitive Verdict: LLM-Enhanced Source-to-Binary Function Localization*](/publication/2026-oopsla-xloc) accepted at **OOPSLA 2026**.

# 📝 Publications {#publications}

You can also find my work on my [Google Scholar profile](https://scholar.google.com/citations?user=CxVwaU0AAAAJ&hl=en). (\* equal contribution)

<ul>
{% for post in site.publications reversed %}{% include archive-single-publication.html %}{% endfor %}
</ul>

# 🚀 Projects {#projects}

{% for post in site.portfolio %}
#### [{{ post.title }}]({{ post.url }})

{{ post.excerpt }}
{% endfor %}

# 🎓 Education {#education}

- **Ph.D. in Computer Science**, Nanyang Technological University, Singapore (Jan 2024 – present). Advised by Prof. Yang Liu.
- **M.Eng. in Intelligent Manufacturing Systems and Engineering**, Beihang University (2017 – 2020).
- **B.Eng. in Mechanical Design, Manufacturing and Automation**, Harbin Institute of Technology (2013 – 2017).
