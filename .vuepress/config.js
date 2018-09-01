module.exports = {
    title: 'Git x Magit 編集会議',
    description: 'そしてVuePressの練習',
    locales: {
        '/': {
            lang: 'ja'
        }
    },
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    themeConfig: {
        nav: [
            { text: '作品一覧', link: 'https://jamcha-aa.github.io/About/' },
            { text: 'GitHub', link: 'https://github.com/jamcha-aa/magit-meeting/' }
        ],
        sidebar: {
            '/article/': genSidebarConfig('目次')
        }
    },
    head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/img/favicon.png' }]
    ],
    base: '/magit-meeting/',
    dest: 'docs'
}

function genSidebarConfig (title) {
    return [
        {
            title,
            collapsable: false,
            children: [
                '',
                '01'
            ]
        }
    ]
}