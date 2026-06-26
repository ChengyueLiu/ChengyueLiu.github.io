---
title: "Binary Software Composition Analysis"
excerpt: "Evidence-based detection of third-party libraries and known CVEs in C/C++ binaries.<br/>Online demo: <a href='https://hellotpl.xyz'>hellotpl.xyz</a>"
collection: portfolio
---

A research line on binary Software Composition Analysis (SCA) — detecting third-party libraries and known vulnerabilities directly in compiled C/C++ binaries.

- **Empirical study at scale** — the first large-scale benchmark of binary SCA tools, evaluating 11 tools across 38,228 test cases over 1,873 libraries, exposing the limits of similarity-based detection (FSE 2026).
- **BLADE** — an evidence-based detection framework that replaces similarity-score heuristics with multi-source verification powered by LLM-guided analysis. Achieves 97.60% precision / 93.74% recall (F1 95.63%), outperforming the best baseline by +41.83 F1 points. Integrated into a commercial SCA product for compliance checks in regulated industries such as automotive (ISSTA 2026).
- **XLoc** — localizes functions in binaries directly from source code, with no compilation required (OOPSLA 2026).

Online demo: [hellotpl.xyz](https://hellotpl.xyz)
