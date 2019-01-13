import React from 'react'
import Layout from '../components/layout'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const IndexPage = () => (
  <Layout>
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
            Reusable bags were introduced as a solution to the vast amount of
            plastic bags wasted every year. A federal senate inquiry in July
            2018 recommended all governments phase out single-use plastics by
            2023 and the work is already underway. NSW is the only territory in
            the country without a firm commitment to ban single-use bags.
          </p>
          <p>
            However, according to a 2009 study by Dr Verghese, reusable bags
            need to be used at least 50 times in order to be environmentally
            friendly. Green bags especially take a lot more material and energy
            to create than regular plastic bags and as such Dr Verghese
            recommends we use these types of bags at least 104 times, which is
            the equivalent of once a week for two years. If these bags are used
            less than 52 times their impact on global warming is actually
            greater and that of single use plastic bags.
          </p>
          <p>
            So while we try hard to prevent some of the 200,000 bags that are
            dumped in landfill every hour going to waste, we also have to be
            very careful that our solutions don’t do more harm than good.
          </p>
          <p>
            Enter Bag Nag. Bag Nag is a nifty new app that uses geofencing to
            help people remember to grab their green bags out of the car before
            going shopping at their local supermarket. Bag Nag can help people
            save time and money by preventing them from either having to walk
            back to their cars to retrieve forgotten bags, or purchase new bags
            at the checkout. Bag Nag also helps protect the environment, by
            ensuring people really are reusing their bags, instead of doubling
            up by purchasing bags that will just sit around the house and
            eventually end up in the garbage bin.
          </p>
          <p>
            Bag Nag is easy to use, you simply select your favourite Coles and
            Woolworths stores and whenever you come within 100m of a shopping
            centre you nominated, Bag Nag will send an alert to your phone,
            reminding you to bring your bags. There is no need to open the app,
            the reminder is automatic! Bag Nag costs the equivalent of one green
            bag purchase ($0.99) and will save you time and money, all whilst
            helping the environment.
          </p>
          <p>
            Bag Nag is available on IOS and Android and can be found on the
            Apple Store and Play Store.
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
