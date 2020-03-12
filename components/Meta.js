import React, { Component } from "react";
import Head from "next/head";

const rootUrl = "http://niko.pizza"; // Replace with url

const defaults = {
  company: "Name the Trees",
  url: rootUrl,
  twitterImage: "/images/social-cards/twitter-card.jpg",
  facebookImage: "/images/social-cards/facebook-card.jpg"
};

class Meta extends Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }

  render() {
    let canonicalUrl = `${rootUrl}${this.props.path}`;
    let twitterImage = `${rootUrl}${this.props.twitterImage ||
      defaults.twitterImage}`;
    let facebookImage = `${rootUrl}${this.props.facebookImage ||
      defaults.facebookImage}`;

    return (
      <Head>
        <title>{this.props.title}</title>
        <meta name="description" content={this.props.description} />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />

        <meta property="og:title" content={this.props.title} />
        <meta property="og:description" content={this.props.description} />
        <meta property="og:site_name" content="Major League Hacking" />
        <meta property="fb:app_id" content="1612424139009027" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={facebookImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={canonicalUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={this.props.title} />
        <meta name="twitter:description" content={this.props.description} />
        <meta name="twitter:image" content={twitterImage} />
        <link rel="stylesheet" href="https://unpkg.com/tachyons@4/css/tachyons.min.css">
        <link rel="stylesheet" href="/styles/index.css" />
        <link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/v1.8.0/mapbox-gl.css" />
      </Head>
    );
  }
}

export default Meta;
