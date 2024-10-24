import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Color Palette Plugin',
  tagline: 'Easily import, export, and collaborate on palettes with your team',
  favicon: 'img/favicon.ico',

  url: 'https://M-Cool-Glitch.github.io',
  baseUrl: '/ColorPalette-Documentation/',

  // GitHub pages deployment config.
  organizationName: 'M-Cool-Glitch', // Usually your GitHub org/user name.
  projectName: 'ColorPalette-Documentation', // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Color Palette',
      logo: {
        alt: 'Color Palette Logo',
        src: 'img/ColorPalette-icon.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },

        {to: "/changelog", label: "Changelog", position: "right"},
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
              to: '/docs/getting-started',
            },
              
            {
              label: 'Changelog',
              to: '/changelog',
            },
              
          ],
        },
        {
          title: "FAB",
          items: [
            {
              label: "Color Palette Plugin",
              href: "com.epicgames.launcher://ue/Fab/product/44d4ba43-10ad-453b-a83f-0203391cf2c9",
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.coolglitch.net',
            }
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Cool Glitch OU.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
