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
        {
          text: "Array",
          children: ["array"],
        },
        {
          text: "String",
          children: ["string"],
        },
        {
          text: "ES6-ES12",
          children: ["es6"]
        }
      ],
    },
    navbar: [
      { text: "首页", link: "/" },
      {
        text: "目录",
        children: [
          {
            text: "js",
            link: "/categories/js/1/",
          },
          {
            text: "css",
            link: "/categories/css/1/",
          },
          {
            text: "vue",
            link: "/categories/vue/1/",
          },
          {
            text: "react",
            link: "/categories/react/1/",
          },
        ],
      },
      { text: "Tags", link: "/tags/Js/1/" },
    ],
    // valineConfig 配置与 1.x 一致
    valineConfig: {
      appId: "s5kVQQUNHaTDD3R1SnGBM320-gzGzoHsz",
      appKey: "oy4zXXFskrlklyiigoe7FcnP",
      placeholder: "填写邮箱可以收到回复提醒哦！",
      verify: true, // 验证码服务
      notify: true,
      recordIP: true,
      // hideComments: true // 隐藏评论
    },
  },
  // debug: true,
});
