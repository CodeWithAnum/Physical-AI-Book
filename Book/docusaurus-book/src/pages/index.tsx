import clsx from 'clsx';
import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import ChatWidget from '../components/HomepageFeatures/ChatWidget';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/physical-ai/chapter1/lesson1">
            Start Reading Chapter 1
          </Link>
        </div>
      </div>
    </header>
  );
}

function TableOfContents() {
  return (
    <section className={styles.tableOfContents}>
      <div className="container">
        <div className="row">
          <div className="col col--10 col--offset-1">
            <Heading as="h2" className="text--center">
              About This Book
            </Heading>
            <p className="text--justify">
              "Physical AI Book: Exploring Intelligent Physical Systems in the Real World" delves into the fascinating convergence of artificial intelligence, robotics, and the physical world. This comprehensive guide introduces readers to the fundamental concepts, advanced techniques, and practical applications of intelligent systems that can perceive, reason, and act within their environments. From the mathematical foundations of robotics to cutting-edge AI algorithms and their societal implications, this book provides a holistic view for students, researchers, and professionals eager to understand and contribute to the future of Physical AI.
            </p>
            <Heading as="h2" className="text--center">
              Table of Contents
            </Heading>
            <ul className={styles.chapterList}>
              <li>
                <Link to="/docs/physical-ai/chapter1/lesson1">
                  Chapter 1: Introduction to Physical AI
                </Link>
              </li>
              <li>
                <Link to="/docs/physical-ai/chapter2/lesson1">
                  Chapter 2: Robotics Fundamentals
                </Link>
              </li>
              <li>
                <Link to="/docs/physical-ai/chapter3/lesson1">
                  Chapter 3: AI Techniques for Physical AI
                </Link>
              </li>
              <li>
                <Link to="/docs/physical-ai/chapter4/lesson1">
                  Chapter 4: Human-Robot Interaction and Ethics
                </Link>
              </li>
              <li>
                <Link to="/docs/physical-ai/chapter5/lesson1">
                  Chapter 5: Advanced Robotics Platforms and Hardware
                </Link>
              </li>
              <li>
                <Link to="/docs/physical-ai/chapter6/lesson1">
                  Chapter 6: Applications and Case Studies
                </Link>
              </li>
              <li>
                <Link to="/docs/physical-ai/chapter7/lesson1">
                  Chapter 7: Research Frontiers and Future Directions
                </Link>
              </li>
              <li>
                <Link to="/docs/physical-ai/chapter8/lesson1">
                  Chapter 8: Building a Physical AI System: A Project Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="A comprehensive guide to Physical AI, covering fundamentals, advanced techniques, and applications.">
      <HomepageHeader />
      <main>
        <TableOfContents />
      </main>
      <ChatWidget />
    </Layout>
  );
}


