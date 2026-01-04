"use client";
import { motion } from "motion/react";

export default function BorderSections() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section with Bottom Border */}
      <section className="relative">
        <hr />
        <div className="max-w-7xl mx-auto border-l border-r border-gray-200 px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-red-500 text-sm mb-4">
              For fast moving engineering teams,
            </p>
            <h1 className="text-6xl font-bold mb-6">
              Manage and simulate
              <br />
              agentic <span className="text-red-500">workflows</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              We empower developers and technical teams to create, simulate, and
              manage AI-driven workflows visually
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
                Start building
              </button>
              <button className="border border-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-900 transition">
                View pricing
              </button>
            </div>
          </motion.div>
        </div>
        <hr className="" />
      </section>

      {/* Features Section with Top and Bottom Borders */}
      <section className="relative">
        <div className="max-w-7xl mx-auto border-l border-r border-b border-gray-200 px-6 py-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-red-500 text-sm mb-4">Features</p>
            <h2 className="text-5xl font-bold mb-4">
              Built for Agentic Intelligence
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Build, test and deploy AI agents with a powerful visual interface
              designed for technical teams
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border border-gray-200 rounded-xl p-8 hover:border-gray-700 transition"
            >
              <div className="mb-4">
                <svg
                  className="w-8 h-8 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">
                LLM Model Selector
              </h3>
              <p className="text-gray-400">
                Track real-time activity of agents with detailed records of
                triggers, tools used, outcomes, and timestamps.
              </p>
            </motion.div>

            {/* Feature Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border border-gray-200 rounded-xl p-8 hover:border-gray-700 transition"
            >
              <div className="mb-4">
                <svg
                  className="w-8 h-8 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">
                Text to workflow builder
              </h3>
              <p className="text-gray-400">
                Preview and debug workflow logic in a safe sandbox before
                deploying, helping you iterate with confidence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deploy & Scale Section */}
      <section className="relative">
        <div className="max-w-7xl mx-auto border-l border-r border-b border-gray-200 px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <svg
                className="w-6 h-6 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
              <h3 className="text-2xl font-semibold">Deploy & Scale</h3>
            </div>
            <p className="text-gray-400 max-w-2xl">
              Run agent workflows in a sandbox to preview behavior, debug logic,
              and test interactions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bottom Dashboard Preview */}
      <section className="relative">
        <div className="max-w-7xl mx-auto border-l border-r border-gray-200">
          <div className="border-b border-gray-800 rounded-t-3xl mx-6 mt-12 bg-linear-to-b from-gray-900 to-black p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="bg-black border border-gray-800 rounded-lg p-6 min-h-72">
              <p className="text-gray-500 text-center py-20">
                Dashboard Preview Area
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
