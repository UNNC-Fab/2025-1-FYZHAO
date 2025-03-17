import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/2025-1-FYZHAO/",
  title: "FAB LAB",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Homework', items: [
        { text: 'Week 1', link: '/week1/projectmanage' },
        { text: 'Week 2', link: '/week2/arduino' }
      ] },
      { text: 'Final Project', items: [
        { text: 'Final', link: '/finalproject/final' },
        { text: 'Prepare', link: '/finalproject/prepare' }
      ] }
    ],

    sidebar: [
      {
        text: 'About',
        items: [
          { text: 'About me', link: '/aboutme/me' },
          { text: 'Student agreement', link: '/aboutme/studentag' }
        ]
      },
      {
        text: 'Assignments',
        items: [
          { text: 'Week 1.Project Manage', link: '/week1/projectmanage' },
          { text: 'Week 2.Arduino application', link: '/week2/arduino' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
