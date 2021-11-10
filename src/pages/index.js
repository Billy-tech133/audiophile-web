import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import Hero from "../components/Hero"
import Productmodal from "../components/Productmodal"
import Speakersection from "../components/Speakersection"
export default function Home() {
  return (
    <Layout>
      <main className="main-page">
        <Hero />
        <Productmodal />
        <Speakersection />
      </main>
    </Layout>
  )
}
