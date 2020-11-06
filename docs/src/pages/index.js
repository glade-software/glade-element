import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Head from '@docusaurus/Head';

const features = [
  {
    title: <>Step 1</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: <>Include the JS Library</>,
  },
  {
    title: <>Step 2</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: <>Wrap your content</>,
  },
  {
    title: <>Step 3</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: <>Annotate!</>,
  },
];

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <>
      <Layout title={`Glade`} description="Docs  <glade-annotateable>">
        <Head>
          <script
            type="module"
            src="https://unpkg.com/@glade-software/glade-annotateable"
          ></script>
        </Head>
        <header className={classnames('hero hero--primary', styles.heroBanner)}>
          <div className="container">
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className={classnames(
                  'button button--outline button--tertiary button--lg',
                  styles.getStarted
                )}
                to={useBaseUrl('docs/getting-started')}
              >
                Get Started
              </Link>
            </div>
          </div>
        </header>
        <main>
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                <glade-annotateable>
                  <p>
                    This homepage content is annotateable using Glade's open annotation
                    platform!
                  </p>
                </glade-annotateable>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}

export default Home;
