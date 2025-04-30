// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
   //*****TotemTemplate*****
  title: 'Insect Totem',
   //*****TotemTemplate*****
  tagline: 'Notion 筆記',
  favicon: 'img/70_70.jpg',

  // Set the production url of your site here
     //*****TotemTemplate*****
  url: 'https://notion.insect-totem.net',
  
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'chichunhuang', // Usually your GitHub org/user name.
  //*****TotemTemplate*****
  projectName: 'nymph', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-tw',
    locales: ['zh-tw'],
  },
  
  stylesheets: [
    'https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css',
  ],
  scripts: [
    {
      src: 'https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js',
      async: true,
    },
    {
      src: '/js/init-cookieconsent.js',
      async: true,
    },
  ],  

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: false,// not works, show wrong date
          
          //when click banner link, sidebar is collapsed
          sidebarCollapsed:true,
          
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        
        gtag: {
          trackingID: 'G-Z1DF5K597H',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/800_374.jpg',
      navbar: {
           //*****TotemTemplate*****
        title: 'Totem\'s',
        logo: {
          alt: 'Site Logo of Totem\'s',
          src: 'img/70_70.jpg',
        },
		
		// when page scroll down, the menu banner will be displayed or not
        hideOnScroll: true,
		
        items: [
          {
            type: 'docSidebar', // 在 docs folder下的文章 
            sidebarId: 'totem_sidebar', //ref sidebar.js
            position: 'left',
               //*****TotemTemplate*****
            label: 'Notion 筆記',
          },
          {
            href: 'https://python.insect-totem.net/',
            label: 'Python 學習紀錄',
            position: 'left',
          },
          {
            href: 'https://rust.insect-totem.net/',
            label: 'Rust 學習紀錄',
            position: 'left',
          },
          {
            href: 'https://insect-totem.net/',
            label: 'Insect Totem 主站',
            position: 'left',
          },
          // {to: '/docs/Graphics/docs-map', label: 'Graphics', position: 'left'},
	      //{to: '/blog', label: 'Banner-----Blog----------', position: 'left'},
          //{
          //  href: 'https://chichunhuang.github.io/slash/blog',
          //  label: 'GitHub',
          //  position: 'right',
          //},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Privacy Policy',
            items: [
              {
                label: 'Privacy Policy(English)',
                to: '/docs/PrivacyPolicy_Eng',
              },
              {
                label: '隱私權政策',
                to: '/docs/PrivacyPolicy_zh_tw',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                   //*****TotemTemplate*****
                label: 'Notion 筆記',
                   //*****TotemTemplate*****
                to: '/docs/docs-map',
              },
              {
                   //*****TotemTemplate*****
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Insec Totem, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
