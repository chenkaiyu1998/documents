module.exports = {
    title: '飞跃高山',
    description : '飞跃高山的文档',
    locales: {
      '/': {
        lang: 'zh-CN', 
      }
    },
    themeConfig: {
      lastUpdated: '上次更新',
      nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          {
              text: 'Languages',
              ariaLabel: 'Language Menu',
              items: [
                  { text: 'Chinese', link: '/language/chinese/' },
                  { text: 'Japanese', link: '/language/japanese/' },
                  { text: '亚洲', items: [
                      { text: 'Chinese', link: '/language/chinese/' },
                      { text: 'Japanese', link: '/language/japanese/' },
                  ] },
              ]
          },
          { text: 'External', link: 'https://google.com' }
      ],
      /* sidebar: [
          '/',
          '/about/',
          '/css/',
          ['/javascript/', 'Explicit link text']
      ],
      sidebarDepth: 2,
      displayAllHeaders: true,
      activeHeaderLinks: false */
      /* sidebar: [
          {
            title: 'Group 1',   // 必要的
            path: '/css/',      // 可选的, 应该是一个绝对路径
            collapsable: false, // 是否折叠, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
              '/',
              '/css/',
              '/css/css1',
            ]
          },
          {
            title: 'Group 2',
            children: []
          }
      ] */
      sidebar: {
          '/css/': [
            '',     /* /foo/ */
            'css1',  /* /foo/one.html */
            'css2'   /* /foo/two.html */
          ],
    
          '/javascript/': [
            '',      /* /bar/ */
            'javascript1', /* /bar/three.html */
            'javascript2'   /* /bar/four.html */
          ],
    
          // fallback
          '/': [
            '',        /* / */
            '/about/', /* /contact.html */
            '/about/test'    /* /about.html */
          ]
      }
    }
}