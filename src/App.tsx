/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Achievements } from './components/Achievements';
import { Certificates } from './components/Certificates';
import { Footer } from './components/Footer';
import { data } from './data';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero data={data} />
        <About data={data} />
        <Achievements data={data.achievements} />
        <Certificates data={data.certificates} />
      </main>
      <Footer data={data} />
    </div>
  );
}
