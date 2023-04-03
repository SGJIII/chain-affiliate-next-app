// chain-affiliate-next-app/src/pages/home.tsx
import React from "react";
import styles from "./home.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Chain Affiliate | On-Chain Affiliate Management Platform</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css"
          integrity="sha384-KyZXEAg3QhqLMpG8r+Knujsl7/3VoeF6lS2wT3GzEzz1SJn9j6C9GAYtiNmnlfta"
          crossOrigin="anonymous"
        />
      </Head>
      <header>
        <div className={styles.headerContainer}>
          <div className={styles.logo}>
            <Image
              src="/images/logo.png"
              alt="Chain Affiliate"
              width={300}
              height={400}
            />
          </div>
          <div className={styles.headerSignup}>
            <Link href="/signup" className={styles.signupLink}>
              Sign up
            </Link>
          </div>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.top}>
          <h1>First On-Chain Affiliate Management Solution</h1>
          <h3>
            Trustless automated affiliate management powered by blockchain
            technology
          </h3>
        </div>
        <div className={styles.section}>
          <div>
            <h1>Tracking you can trust</h1>
          </div>
          <div className={styles.twoColumns}>
            <div>
              <p>
                No more data discrepancies between analytics platforms.
                Conversions are automatically logged to the blockchain and can
                be verified by all parties allowing for complete transparency.
              </p>
              <div>
                <p>
                <Link href="/signup" className={styles.signupLink}>
                  Sign up
                </Link>
                </p>
              </div>
            </div>
            <div>
              <div>
                <Image
                  className={styles.sideImage}
                  src="/images/analytics.png"
                  alt=""
                  width={500}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div>
            <h1>Lower operator costs</h1>
          </div>
          <div className={styles.twoColumns}>
            <div>
              <p>
                Other affiliate management platforms take up to 40% from
                affiliate commission. Our, completely on-chain solution only
                charges a 3% transaction fee so you can pay more to your
                affiliates and recruit the best affiliates out there.
              </p>
              <p>
                <Link href="/signup" className={styles.signupLink}>
                  Sign up
                </Link>
              </p>
            </div>
            <div>
              <div>
                <Image
                  className={styles.sideImage}
                  src="/images/accounting.png"
                  alt=""
                  width={500}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div>
          <h1>Easy to Use SDK</h1>
        </div>
        <div className={styles.twoColumns}>
          <div>
            <p>
              Integrating the affiliate platform with other systems, such as
              e-commerce platforms, content management systems, and analytics
              tools, can be challenging and time-consuming. With the Affiliate
              SDK, you can easily integrate the affiliate platform with existing
              payment solutions like Stripe to get started quickly.
            </p>
            <p>
               <Link href="/signup" className={styles.signupLink}>
                  Sign up
                </Link>
            </p>
          </div>
          <div>
            <code className={styles.code}>
              const AffiliateSDK = require(&apos./affiliate-sdk&apos); <br />
              const config = require(&apos./config&apos); // Initialize the
              Affiliate SDK
              <br />
              const sdk = new AffiliateSDK( <br />
              config.storePrivateKey, <br />
              config.contractAddress, <br />
              config.providerUrl,
              <br />
              config.tokenAddress );
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
