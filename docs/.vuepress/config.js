import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'


export default defineUserConfig({
    plugins: [nprogressPlugin()],
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
                    ],
                },
            ],
            '/tech/opensource/': [
                {
                    text: '开源库',
                    prefix: '/tech/opensource/',
                    link: '/tech/opensource/',
                    children: [
                        'AI-LLM.md',
                        'AI-Voice.md',
                        'AI-Image.md',
                        'AI-Other.md'
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