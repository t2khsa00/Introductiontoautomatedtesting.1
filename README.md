# Introduction to Automated Testing

A simple Node.js project demonstrating automated testing with Jest.

## Overview

This project implements a `divide()` function with comprehensive error handling and unit tests. It serves as an introduction to automated testing concepts.

## Features

- **Divide Function**: Performs division of two numbers with validation
- **Error Handling**: 
  - Validates that arguments are numbers
  - Checks for NaN values
  - Prevents division by zero
  - Handles missing arguments
- **Jest Tests**: 5 test cases covering positive and negative scenarios

## Project Structure

```
.
├── src/
│   ├── calculator.js      # Calculator implementation
│   └── index.js           # Entry point
├── __tests__/
│   └── calculator.test.js # Jest test suite
├── jest.config.js         # Jest configuration
├── package.json           # Project dependencies
└── README.md              # This file
```

## Installation

```bash
npm install
```

## Running Tests

```bash
npm test
```

## Running the Code

```bash
npm start
```

## Test Results

All 5 tests passing:
- ✅ Divides valid numbers
- ✅ Throws error if arguments are not numbers
- ✅ Throws error if arguments are NaN
- ✅ Throws error when dividing by zero
- ✅ Throws error if argument is missing
