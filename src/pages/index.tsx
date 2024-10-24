import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">{siteConfig.title}</Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
          <img src={require('@site/static/img/ColorPalette-icon.png').default} alt={"Color Palette Logo"} style={{height:'352px'}}/>
          <div className={styles.buttons}>
              <Link
                  className="button button--secondary button--lg"
                  to="/docs/getting-started">
                  Learn more
              </Link>
          </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
        title={""}
      description="Easily import, export, and collaborate on palettes with your team">
      <HomepageHeader />
      <main>
          {/*<HomepageFeatures/>*/}
      </main>
    </Layout>
  );
}
