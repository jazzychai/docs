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
                text: '技术',
                prefix: '/tech/',
                children: [
                    {
                        text: '开源库',
                        link: '/tech/opensource/',
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
            '/tech/opensource/': [
                {
                    text: '开源库',
                    prefix: '/tech/opensource/',
                    link: '/tech/opensource/',
                    children: [
                        {
                            text: 'AI-大语言模型',
                            link: '/tech/opensource/AI-LLM.md',
                        },
                        {
                            text: 'AI-语音处理',
                            link: '/tech/opensource/AI-Voice.md',
                        },
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