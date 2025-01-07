import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    bundler: viteBundler(),
    theme: defaultTheme({
        navbar: [
            {
                text: '首页',
                link: '/',
            },
            {
                text: '工作',
                prefix: '/work/',
                children: [
                    {
                        text: '四方',
                        link: '/sf/',
                    },
                    {
                        text: '通达',
                        link: '/tdoa/',
                    },
                ],
            },
            {
                text: '技术',
                prefix: '/tech/',
                children: [
                    {
                        text: 'vue',
                        link: '/vue/',
                    },
                    {
                        text: 'vue2',
                        link: '/vue2/',
                    },
                ],
            },
            {
                text: '生活',
                prefix: '/life/',
                children: [
                    {
                        text: '读书',
                        link: '/book/',
                    },
                ],
            }
        ],
        // 侧边栏数组
        sidebar: {
            '/': [
                {
                    text: '首页',
                    prefix: '/',
                    link: '/',
                    children: [
                        'index.md',
                    ],
                },
            ],
            '/tdoa/': [
                {
                    text: '通达OA',
                    prefix: '/tdoa/',
                    link: '/tdoa/',
                    children: [
                        'index.md',
                    ],
                },
            ],
        },
    }),

    base: '/docs/',
    lang: 'zh-CN',
    title: '你好， Jazzy ！',
    description: '乱七八糟',
})