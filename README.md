# 📘 Algorithm Practice

A collection of algorithm problems and solutions for daily practice, built with **TypeScript** and **Vitest**. This includes problems from platforms like **LeetCode**, **HackerRank**, and classic **Data Structures & Algorithms** exercises.

## 📌 Purpose

- Sharpen problem-solving skills
- Prepare for technical interviews
- Understand common patterns in algorithms
- Master TypeScript implementation techniques
- Practice test-driven development with Vitest

## 🧠 Topics Covered

### **Algorithm Patterns**
- **Sliding Window** - Optimal subarray/substring problems
- **Two Pointers** - Array manipulation and optimization
- **Arrays** - Common array operations and transformations
- **Greedy** - Local optimization strategies
- **Graphs** - Graph traversal and algorithms

### **Additional Topics**
- Sorting & Searching
- Recursion & Backtracking
- Dynamic Programming
- Binary Search, Divide & Conquer
- Hash Maps & Sets
- Trees, Heaps, and advanced data structures

## 💡 Project Structure

```bash
practice-algorithms/
├── src/
│   ├── patterns/
│   │   ├── sliding-window/
│   │   │   ├── *.ts (solution files)
│   │   │   └── __tests__/*.test.ts
│   │   ├── two-pointers/
│   │   │   ├── *.ts (solution files)
│   │   │   └── __tests__/*.test.ts
│   │   ├── arrays/
│   │   ├── greedy/
│   │   └── graphs/
│   ├── cplusplus/ (C++ solutions)
│   └── utils/
├── vitest.config.ts
├── tsconfig.json
└── package.json
```

> ✅ Each pattern folder contains TypeScript solutions with comprehensive test suites using Vitest.

## 🚀 Getting Started

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/practice-algorithms.git
cd practice-algorithms

# Install dependencies
yarn install
```

### Development
```bash
# Run tests in watch mode
yarn test

# Run all tests once
yarn test:run

# Generate coverage report
yarn coverage

# Run with TypeScript directly
yarn dev

# Lint code
yarn lint

# Format code
yarn format
```

### Running Solutions
Browse solutions by pattern category in the `src/patterns/` directory. Each solution includes:
- Problem description at the top of the function
- TypeScript implementation
- Comprehensive test cases in `__tests__` folders

## 🛠️ Tech Stack

- **Language**: TypeScript 5.6+
- **Testing**: Vitest 2.1+
- **Runtime**: Node.js with tsx for development
- **Linting**: ESLint with TypeScript support
- **Formatting**: Prettier
- **Package Manager**: Yarn
- **Git Hooks**: Husky for pre-commit linting

## 📈 Progress Tracker

- ✅ **40+ Problems Solved** (TypeScript implementations)
- 🧪 **Comprehensive Test Coverage** with Vitest
- 🔄 **Regularly Updated** with new problems and patterns
- 📊 **Pattern-Based Organization** for efficient learning

### Current Pattern Coverage
- ✅ Sliding Window
- ✅ Two Pointers
- ✅ Arrays
- ✅ Greedy
- ✅ Graphs
- 🔄 More patterns coming soon...

## ✨ Features

- 🎯 **Type-Safe Solutions** - Full TypeScript type safety
- 🧪 **Test-Driven** - Every solution includes comprehensive tests
- 📝 **Well-Documented** - Problem descriptions included in code
- 🏗️ **Pattern-Based** - Organized by algorithmic patterns
- ⚡ **Modern Tooling** - ESLint, Prettier, Husky pre-commit hooks
- 🔍 **Code Quality** - Automated linting and formatting

## 📚 Resources & References

- [LeetCode](https://leetcode.com/) - Primary problem source
- [NeetCode](https://neetcode.io/) - Pattern-based learning
- [GeeksForGeeks](https://www.geeksforgeeks.org/) - Algorithm explanations
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - TypeScript reference

## 🤝 Contributing

Feel free to contribute by:
1. Adding new problem solutions
2. Improving existing implementations
3. Adding more test cases
4. Fixing bugs or improving documentation

**Note**: All solutions should include problem descriptions at the top of functions and follow the existing code style.

---

**Happy Coding! 🚀**

