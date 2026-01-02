# Project Overview
This is a TypeScript-based algorithm practice repository focused on solving LeetCode problems using pattern-based approaches. The project uses Vitest for testing, ESLint for linting, and Prettier for code formatting.

## Tech Stack
- **Language**: TypeScript 5.6+
- **Testing Framework**: Vitest 2.1+
- **Runtime**: Node.js with tsx
- **Code Quality**: ESLint + Prettier
- **Package Manager**: Yarn

## Project Structure
```
src/
├── patterns/
│   ├── sliding-window/
│   ├── two-pointers/
│   ├── arrays/
│   ├── greedy/
│   └── graphs/
└── utils/
```

# Code Style Guidelines

## Function Documentation
Every solution function must include a comprehensive comment block at the top with:
- **Link**: LeetCode problem URL
- **Pattern**: The algorithmic pattern used (e.g., Two Pointers, Sliding Window)
- **Recognition**: Key points on how to recognize when to use this pattern
- **Description**: Brief problem description with examples
- **Approach**: High-level solution approach
- **Time Complexity**: Big O notation
- **Space Complexity**: Big O notation

### Example Format:
```typescript
/**
 * Link: https://leetcode.com/problems/example/
 * Pattern: Two Pointers
 * Recognition:
 * - Key insight 1
 * - Key insight 2
 * Description: Problem description here
 * Example:
 * - Input: [1,2,3] => Output: 6
 * Approach: Brief solution approach
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
function solutionName(param: type): returnType {
  // Implementation
}
```

## TypeScript Conventions
- Use **strict type annotations** for all function parameters and return types
- Prefer `const` over `let` when variables won't be reassigned
- Use descriptive variable names that explain purpose
- Export functions using named exports: `export { functionName }`
- Use type inference where it's obvious, explicit types where it adds clarity

## Code Comments
- Add inline comments for complex logic or non-obvious operations
- Explain **why**, not **what** (code should be self-documenting for "what")
- Comment algorithmic insights and edge cases
- Keep comments concise and clear

## Testing Guidelines

### Test Structure
- Place tests in `__tests__/` folders within pattern directories
- Name test files: `{problem-name}.test.ts`
- Use descriptive test names that explain the scenario being tested

### Test Coverage Requirements
- **Minimum 8-10 test cases** per problem
- Cover edge cases: empty input, single element, minimum/maximum values
- Test boundary conditions
- Include various scenarios: best case, worst case, average case
- Test with unsorted/sorted inputs when relevant
- Verify time/space complexity requirements are met

### Test Format:
```typescript
import { describe, it, expect } from 'vitest';
import { functionName } from '../file-name';

describe('functionName()', () => {
  it('should handle basic case', () => {
    expect(functionName(input)).toBe(expected);
  });

  it('should handle edge case: empty input', () => {
    expect(functionName([])).toBe(0);
  });

  // More specific test cases...
});
```

## File Organization
- One problem per file
- File naming: use kebab-case (e.g., `two-sum.ts`)
- Group related problems by algorithmic pattern
- Keep solution files focused and single-purpose

## Problem-Solving Approach
When adding new problems:
1. Identify the pattern (sliding window, two pointers, etc.)
2. Write comprehensive documentation in function comment
3. Implement solution with clear variable names
4. Add inline comments for complex logic
5. Create comprehensive test suite (8-10+ cases)
6. Run tests: `yarn test:run`
7. Ensure code passes linting: `yarn lint`
8. Format code: `yarn format`

## Git Commit Messages
- Use conventional commit format
- Examples:
  - `feat: add two-sum problem solution`
  - `test: enhance boats-to-save-people test coverage`
  - `docs: update README with new patterns`
  - `fix: correct edge case in sliding window solution`

## Performance Considerations
- Always analyze and document time/space complexity
- Prefer O(n) or O(n log n) solutions when possible
- Avoid nested loops unless necessary (watch for O(n²))
- Use appropriate data structures (Set, Map, Array) for the problem
- Consider space-time tradeoffs

## Quality Checklist
Before submitting any solution, ensure:
- [ ] Function has complete documentation block
- [ ] TypeScript types are properly defined
- [ ] Implementation includes helpful inline comments
- [ ] Test suite has 8+ comprehensive test cases
- [ ] All tests pass (`yarn test:run`)
- [ ] Code passes linting (`yarn lint`)
- [ ] Code is formatted (`yarn format`)
- [ ] Time and space complexity are documented and optimal
