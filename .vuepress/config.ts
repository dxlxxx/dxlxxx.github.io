import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

export default defineUserConfig<DefaultThemeOptions>({
  title: "Deng's Blog",
  description: "Just playing around",
  theme: "reco",
  themeConfig: {
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "Deng",
    authorAvatar: "/touxiang.jpg",
    docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    autoSetCategory: true, // 自动设置分类
    // series 为原 sidebar 左侧侧边栏
    series: {
      "/docs/js/": [
        {
          text: "Js",
          children: ["js"],
        },
      ],
    },
    // 评论
    valineConfig: {
      appId: "s5kVQQUNHaTDD3R1SnGBM320-gzGzoHsz", // your appId
      appKey: "oy4zXXFskrlklyiigoe7FcnP", // your appKey
      hideComments: false, // 全局隐藏评论，默认 false
    },
    navbar: [
      { text: "首页", link: "/" },
      {
        text: "目录",
        children: [
          {
            text: "js",
            link: "/categories/reco/1/",
          },
          {
            text: "css",
            link: "/categories/reco/1/",
          },
          {
            text: "vue",
            link: "/categories/reco/1/",
          },
          {
            text: "react",
            link: "/categories/reco/1/",
          },
        ],
      },
      { text: "Tags", link: "/tags/tag1/1/" },
      {
        text: "Docs",
        children: [
          { text: "vuepress-reco", link: "/docs/theme-reco/theme" },
          { text: "vuepress-theme-reco", link: "/blogs/other/guide" },
        ],
      },
    ],
    // valineConfig 配置与 1.x 一致
    // valineConfig: {
    //   appId: 'xxx',
    //   appKey: 'xxx',
    //   placeholder: '填写邮箱可以收到回复提醒哦！',
    //   verify: true, // 验证码服务
    //   // notify: true,
    //   recordIP: true,
    //   // hideComments: true // 隐藏评论
    // },
  },
  // debug: true,
});
