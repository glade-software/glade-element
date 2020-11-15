import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Head from '@docusaurus/Head';

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <>
      <Layout title={`Glade`} description="Docs  <glade-annotatable>">
        <Head>
          <script
            type="module"
            src="https://unpkg.com/@glade-software/glade-annotatable"
          ></script>
          <style>
            {`
            glade-annotatable > * {
              cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEqADAAQAAAABAAAAEgAAAACaqbJVAAAAQ0lEQVQ4EWNkwA/+o0kzovHhXCY4i0LGqEGEA5BqYQSKTvQoJmw9FhVUc9HgMwhnkocGA3r44VQ/+Lw26iIsSRlNCABZuwMhw3OLPQAAAABJRU5ErkJggg==),
                auto;
            }

            .glade-has-annotations {
              background-color: skyblue;
              cursor: context-menu;
            }
          `}
          </style>
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
                <glade-annotatable verbose>
                  <p>
                    This homepage content is annotateable using Glade's open
                    annotation platform!
                  </p>
                </glade-annotatable>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}

export default Home;
