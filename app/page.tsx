"use client";
import React from "react";
import { products } from "./utils/products";
import { HeroParallax } from "./components/HeroParallax";

export default function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
