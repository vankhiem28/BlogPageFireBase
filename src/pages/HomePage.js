import { signOut } from "firebase/auth";
import React from "react";
import Header from "../components/layout/Header";
import Layout from "../components/layout/Layout";
import { auth } from "../firebase-app/firebase-config";
import HomeBanner from "../module/home/HomeBanner";
import HomeFeature from "../module/home/HomeFeature";
import HomeNewest from "../module/home/HomeNewest";

function HomePage() {
  return (
    <div>
      <Layout>
        <HomeBanner></HomeBanner>
        <HomeFeature></HomeFeature>
        <HomeNewest></HomeNewest>
      </Layout>
    </div>
  );
}

export default HomePage;
