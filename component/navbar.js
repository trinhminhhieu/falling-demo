import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="flex gap-4 bg-white bg-opacity-70 px-6 py-3 rounded-lg shadow-md">
          <a
            href="/cherry-blossom"
            className="text-purple-700 font-medium hover:text-purple-900"
          >
            Cherry Blossom
          </a>
          <a
            href="/snowfall"
            className="text-purple-700 font-medium hover:text-purple-900"
          >
            Snowfall
          </a>
          <a
            href="/"
            className="text-purple-700 font-medium hover:text-purple-900"
          >
            Apricot Blossom
          </a>
          <a
            href="/rain"
            className="text-purple-700 font-medium hover:text-purple-900"
          >
            Rain
          </a>
        </div>
      </div>
    )
  }
}
