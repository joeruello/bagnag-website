import React from 'react'
import Layout from '../components/layout'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const IndexPage = () => (
  <Layout>
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "boot.jpeg" }) {
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          playImage: file(relativePath: { eq: "google-play-badge.png" }) {
            childImageSharp {
              fluid(maxWidth: 200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          appBadge: file(relativePath: { eq: "app-store-badge.png" }) {
            childImageSharp {
              fluid(maxWidth: 200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <>
          {console.log(data)}
          <div
            class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-dark"
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundImage: `url("${
                data.placeholderImage.childImageSharp.fluid.src
              }")`,
            }}
          >
            <div
              class="col-md-5 p-lg-5 mx-auto my-5 text-white"
              style={{
                background: 'rgba(0,0,0,0.8)',
              }}
            >
              <h1 class="display-5 font-weight-normal text-white">
                Never forget your resusable bags again
              </h1>
              <p class="lead font-weight-normal" />
              <a href="https://itunes.apple.com/us/app/bagnag/id1446253855?ls=1&mt=8">
                <img
                  style={{ maxWidth: 150 }}
                  src={data.appBadge.childImageSharp.fluid.src}
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.bagnag&ah=unlqAJrPHDmgYpLgZPipyt-iD6g">
                <img
                  style={{ maxWidth: 150 }}
                  src={data.playImage.childImageSharp.fluid.src}
                />
              </a>
            </div>
          </div>
        </>
      )}
    />

    <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
      <div class="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
        <div class="my-3 py-3">
          <p class="lead">
            The average Australian uses 170 plastic bags every year. 150 million
            of these bags end up as litter and only 3% are recycled. Worldwide
            the problem is even larger, with 2 million bags being used each
            minute.
          </p>
          <p>
            Enter BagNag. BagNag is a nifty new app that uses geofencing to help
            people remember to grab their green bags out of the car before going
            shopping at their local supermarket. BagNag can help people save
            time and money by preventing them from either having to walk back to
            their cars to retrieve forgotten bags, or purchase new bags at the
            checkout. BagNag also helps protect the environment, by ensuring
            people really are reusing their bags, instead of doubling up by
            purchasing bags that will just sit around the house and eventually
            end up in the garbage bin.
          </p>
          <p>
            BagNag is easy to use, you simply select your favourite Coles and
            Woolworths stores and whenever you come within 100m of a shopping
            centre you nominated, BagNag will send an alert to your phone,
            reminding you to bring your bags. There is no need to open the app,
            the reminder is automatic! BagNag costs the equivalent of one green
            bag purchase ($0.99) and will save you time and money, all whilst
            helping the environment.
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
