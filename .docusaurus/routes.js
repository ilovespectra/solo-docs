import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '5ff'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'bec'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '4ad'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'a80'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'e2a'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'b84'),
            routes: [
              {
                path: '/docs/category/solo-silo',
                component: ComponentCreator('/docs/category/solo-silo', '837'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/solo-swap',
                component: ComponentCreator('/docs/category/solo-swap', 'c82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tutorial---basics',
                component: ComponentCreator('/docs/category/tutorial---basics', '20e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/solo-silo/adding-sources',
                component: ComponentCreator('/docs/solo-silo/adding-sources', 'c04'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/solo-silo/animals-objects',
                component: ComponentCreator('/docs/solo-silo/animals-objects', 'cc0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/solo-silo/contributing',
                component: ComponentCreator('/docs/solo-silo/contributing', '446'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/solo-silo/face-recognition',
                component: ComponentCreator('/docs/solo-silo/face-recognition', 'c76'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/solo-silo/getting-started',
                component: ComponentCreator('/docs/solo-silo/getting-started', '135'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/solo-silo/managing-silos',
                component: ComponentCreator('/docs/solo-silo/managing-silos', '2cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/solo-silo/overview',
                component: ComponentCreator('/docs/solo-silo/overview', '7a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/solo-silo/semantic-search',
                component: ComponentCreator('/docs/solo-silo/semantic-search', '813'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/solo-silo/settings-database',
                component: ComponentCreator('/docs/solo-silo/settings-database', 'bd9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/solo-silo/troubleshooting',
                component: ComponentCreator('/docs/solo-silo/troubleshooting', 'ee8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/solo-swap/advanced-features',
                component: ComponentCreator('/docs/solo-swap/advanced-features', 'be0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/solo-swap/getting-started',
                component: ComponentCreator('/docs/solo-swap/getting-started', '831'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/solo-swap/multi-wallet',
                component: ComponentCreator('/docs/solo-swap/multi-wallet', '79d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/solo-swap/overview',
                component: ComponentCreator('/docs/solo-swap/overview', '11b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/solo-swap/single-wallet',
                component: ComponentCreator('/docs/solo-swap/single-wallet', 'fc9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/tutorial-basics/congratulations', '458'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/connect-a-wallet',
                component: ComponentCreator('/docs/tutorial-basics/connect-a-wallet', '40c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-search',
                component: ComponentCreator('/docs/tutorial-basics/create-a-search', '987'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/view-assets',
                component: ComponentCreator('/docs/tutorial-basics/view-assets', '73f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/view-token',
                component: ComponentCreator('/docs/tutorial-basics/view-token', '797'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/view-tokens',
                component: ComponentCreator('/docs/tutorial-basics/view-tokens', 'dd7'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
