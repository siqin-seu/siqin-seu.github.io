window.SITE_DATA = {
  // 个人资料：留空的链接和可选文本会自动隐藏。
  profile: {
    name: "Si Qin",
    chineseName: "秦思",
    role: "M.S. Student at Southeast University",
    affiliation: "Southeast University",
    affiliationUrl: "", // 可选：学校或学院主页，留空则只显示名称
    location: "Nanjing, Jiangsu, China",
    email: "siqin@seu.edu.cn",
    github: "https://github.com/siqin-seu",
    googleScholar: "https://scholar.google.com.hk/citations?user=bn7zXE8AAAAJ&hl=zh-CN", // 填入个人主页地址后，资料区和 Publications 旁的入口同时生效
    cv: "assets/resume.pdf",
    profileImage: "assets/profile.jpg",
    advisorName: "Prof. Yuheng Jia",
    advisorUrl: "https://jyh-learning.github.io/",
    shortBio: "I am currently a M.S. student in School of Computer Science and Engineering at Southeast University, under the supervision of Prof. Yuheng Jia. Before that, I obtained my B.S. degree in 2025 from Nanjing Agricultural University. My research focuses on Vision-language Models (VLMs) and weakly supervised learning.",
  },
  // News：把新动态放在数组开头；不需要跳转时，link 留空或省略。
  news: [
    {
      date: "2026.10",
      text: "Our work \"Vocabulary-Incomplete Unsupervised Vision-Language Model Adaptation\" is available on arXiv.",
      link: "https://arxiv.org/abs/2610.23919",
      kind: "paper"
    },
    {
      date: "2026.09",
      text: "Our work \"Progressive Pseudo-label Self-balancing Towards Unsupervised Vision-Language Models Adaptation\" is accepted by NeurIPS 2026.",
      link: "https://neurips.cc/virtual/2026/loc/sydney/poster/150525",
      kind: "paper"
    },
    {
      date: "2026.03",
      text: "Our work \"Local Search-based Attribute Reduction Approach for Neighborhood Rough Sets using Hash Hypercube\" is accepted by International Journal of Machine Learning and Cybernetics.",
      link: "https://link.springer.com/article/10.1007/s13042-026-03140-2",
      kind: "paper"
    },
    {
      date: "2025.05",
      text: "Our work \"Label Distribution Learning with Biased Annotations Assisted by Multi-Label Learning\" is accepted by IJCAI 2025.",
      link: "https://www.ijcai.org/proceedings/2025/617",
      kind: "paper"
    }
  ],
  // Honors & Awards：机构不确定时 organization 留空，页面会自动隐藏该列。
  awards: [
    {
      date: "2026.10",
      title: "Huatai Securities Science and Technology Scholarship",
      organization: "Huatai Securities"
    },
    {
      date: "2026.10",
      title: "First-Class Academic Scholarship",
      organization: "Southeast University"
    },
    {
      date: "2025.06",
      title: "Outstanding Graduate",
      organization: "Nanjing Agricultural University"
    },
    {
      date: "2024.05",
      title: "Excellent Student Cadre",
      organization: "Nanjing Agricultural University"
    },
    {
      date: "2023.12",
      title: "National Scholarship",
      organization: "Ministry of Education of the People's Republic of China"
    },
  ],
  publications: [
    {
      title: "Progressive Pseudo-label Self-balancing Towards Unsupervised Vision-Language Models Adaptation",
      authors: ["Si Qin", "Yaxin Hou", "Jiawei Tang", "Yuheng Jia"],
      venue: "Annual Conference on Neural Information Processing Systems",
      venueShort: "NeurIPS 2026",
      year: "2026",
      type: "accepted",
      ccfRank: "A",
      image: "assets/PPSB.png", // 例如 "assets/publications/verda.png"
      imageAlt: "", // 图片内容说明，可选
      summary: "PPSB is a progressive pseudo-label self-balancing framework to mitigate pseudo-label bias and enhance the unsupervised adaptation of vision-language models.",
      links: [
        { label: "Paper", url: "https://neurips.cc/virtual/2026/loc/sydney/poster/150525" },
        { label: "Code", url: "https://github.com/siqin-seu/PPSB-NeurIPS-26" }
      ]
    },
    {
      title: "Vocabulary-Incomplete Unsupervised Vision-Language Model Adaptation",
      authors: ["Si Qin", "Jiawei Tang", "Yaxin Hou", "Yan Chen", "Yutong Xie", "Chen Li", "Yuheng Jia"],
      venue: "arXiv preprint",
      venueShort: "arXiv 2026",
      year: "2026",
      type: "preprint",
      image: "assets/LSR.png", // 例如 "assets/publications/eua-cal.png"
      imageAlt: "",
      summary: "LSR aims to mitigate adaptation bias caused by incomplete class vocabularies, enabling effective unsupervised vision-language model adaptation and preserving recognition of omitted classes.",
      links: [
        { label: "arXiv", url: "https://arxiv.org/abs/2610.23919" }
      ]
    },
    {
      title: "Label Distribution Learning with Biased Annotations Assisted by Multi-Label Learning",
      authors: ["Zhiqiang Kou", "\*\*Si Qin (Co-first)\*\*" , "Hailin Wang", "Jing Wang", "Mingkun Xie", "Yuheng Jia", "Tongliang Liu", "Masashi Sugiyama", "Xin Geng"],
      venue: "International Joint Conference on Artificial Intelligence",
      venueShort: "IJCAI 2025",
      year: "2025",
      type: "accepted",
      ccfRank: "A",
      image: "assets/BLDL.png", // 例如 "assets/publications/plc.png"
      imageAlt: "",
      summary: "BLDL is a multi-label learning-assisted framework to recover accurate label distributions from biased annotations by exploiting low-rank label correlations, enhancing the robustness of label distribution learning.",
      links: [
        { label: "Paper", url: "https://www.ijcai.org/proceedings/2025/617" },
        { label: "Code", url: "https://github.com/siqin-seu/BLDL-IJCAI-25" }
      ]
    },
    {
      title: "Local Search-based Attribute Reduction Approach for Neighborhood Rough Sets using Hash Hypercube",
      authors: ["Si Qin", "Haibo Li", "Haoyan Qiu", "Yima Wang", "Boxuan Zhang", "Yuqi Guan", "Yiheng Zhu", "Xiaojun Xie"],
      venue: "International Journal of Machine Learning and Cybernetics",
      venueShort: "IJMLC 2026",
      sci: true,
      year: "2026",
      type: "accepted",
      image: "assets/IJMLC.png", // 例如 "assets/publications/ilvad.png"
      imageAlt: "",
      summary: "This work proposes a hash hypercube-based local search method for efficient neighborhood rough set attribute reduction.",
      links: [
        { label: "Paper", url: "https://link.springer.com/article/10.1007/s13042-026-03140-2" },
      ]
    },
  ]
};
