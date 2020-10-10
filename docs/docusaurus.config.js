module.exports = {
  title: '<glade-annotateable>',
  tagline: 'make any webpage annotateable',
  url: 'https://docs.glade.app',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'glade-software', // Usually your GitHub org/user name.
  projectName: 'glade-element', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Glade',
      logo: {
        alt: 'Glade Software logo',
        src: 'img/glade-rounded.png',
      },
      items: [
        {
          to: 'docs/getting-started',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {href: 'https://demos.glade.app', label: 'Demos', position: 'left'},
        {
          href: 'https://github.com/glade-software/glade-element',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/getting-started',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/gladesoftware',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Demos',
              to: 'https://demos.glade.app',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/glade-software/glade-element',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Glade Software, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/glade-software/glade-element/edit/master/docs/',
        },
        demos: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/glade-software/glade-element/edit/master/demos/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
