import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/2025-1-FYZHAO/",
  title: "FAB LAB2025-FENGYI ZHAO",
  description: "A VitePress Site",
  head: [
    ['link', { rel: 'icon', href: 'https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/zhao/zf.png', type: 'image/png' }]
  ],
  themeConfig: {
    logo: {
      light: 'https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/zhao/zf.png',
      dark: 'https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/zhao/zf-2.png'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Homework', items: [
        { text: 'Week 1', link: '/week1/projectmanage' },
        { text: 'Week 2', link: '/week2/arduino' },
        { text: 'Week 3', link: '/week3/PCB'},
        { text: 'Week 4', link: '/week4/Fusion' },
        { text: 'Week 5', link: '/week5/cnc' },
        { text: 'Week 6', link: '/week6/3DPrinting' },
        { text: 'Week 7', link: '/week7/IOTandInteraction' },
        { text: 'Week 8', link: '/week8/8' },
        { text: 'Week 9', link: '/week9/9' },
        { text: 'Week 10', link: '/week10/10' }
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
        text: 'Final Project',
        items: [
          { text: 'Final project presentation', link: '/finalproject/final' },
          { text: 'Prepare', link: '/finalproject/prepare' },

        ]
      },
      {
        text: 'Assignments',
        items: [
          { text: 'Week 1.Project Manage', link: '/week1/projectmanage' },
          { text: 'Week 2.Arduino application', link: '/week2/arduino' },
          { text: 'Week 3.Electronic design', link: '/week3/PCB'},
          { text: 'Week 4.CAD Design', link: '/week4/Fusion' },
          { text: 'Week 5.CNC Manufacture', link: '/week5/cnc' },
          { text: 'Week 6.3D Printing', link: '/week6/3DPrinting' },
          { text: 'Week 7.IOT and Interaction', link: '/week7/IOTandInteraction' },
          { text: 'Week 8 Modeling and Casting', link: '/week8/8' },
          { text: 'Week 9 Interface and Application Programming', link: '/week9/9' },
          { text: 'Week 10', link: '/week10/10' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
