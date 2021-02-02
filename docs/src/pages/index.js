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
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
          <meta name="apple-mobile-web-app-title" content="Glade Docs"/>
          <meta name="application-name" content="Glade Docs"/>
          <meta name="theme-color" content="#1A535C"/>
          <meta name="msapplication-TileColor" content="#1A535C"/>
          <meta name="url" property="url" content="https://docs.glade.app"/>
          <meta name="robots" property="robots" content="index,follow"/>
          <meta name="keywords" property="keywords" content="glade,glade software,annotations,glade-element,glade docs,glade-annotatable,comments,open comments"/>
          <meta name="description" content="Open source annotation system, it's like a comments system - but directly on your content!"/>
          <meta name="og:url" property="og:url" content="https://docs.glade.app"/>
          <meta name="og:locale" property="og:locale" content="en-US"/>
          <meta name="og:site_name" property="og:site_name" content="Glade Docs"/>
          <meta name="og:title" property="og:title" content="Glade Docs | Open Source Annotation Platform"/>
          <meta name="og:description" property="og:description" content="Check out the docs for our open source annotation system, it's like a comments system - but directly on your content!"/>
          <meta name="og:type" property="og:type" content="website"/>
          <meta name="og:image" property="og:image" content="https://docs.glade.app/glade-rounded.png"/>
          <meta name="og:image:alt" property="og:image:alt" content="An app icon featuring a snow covered tree on a forest green background"/>
          <meta name="twitter:site" property="twitter:site" content="gladesoftware"/>
          <meta name="twitter:card" property="twitter:card" content="summary_large_image"/>
          <meta name="twitter:title" property="twitter:title" content="Glade Docs | Open Source Annotation Platform"/>
          <meta name="twitter:description" property="twitter:description" content="Check out the docs for our open source annotation system, it's like a comments system - but directly on your content!"/>
          <meta name="twitter:image" property="twitter:image" content="https://docs.glade.app/glade-rounded.png"/>
          <meta name="twitter:image:alt" property="twitter:image:alt" content="An app icon featuring a snow covered tree on a forest green background"/>
          <link rel="canonical" href="https://docs.glade.app" />
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
              <div className="row" style={{justifyContent:'center'}}>
                <glade-annotatable verbose>
                  <p>
                    This homepage content is annotatable using Glade's open
                    annotation platform!
                  </p>
                  <p>
                    With Glade, instead of having comments at the bottom, users can create comments on any part of your content.
                  </p>
                  <p>
                    Leave an annotation here, or checkout the docs to put it on your site for free!
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
