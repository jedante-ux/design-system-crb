# Crabi Design System Skills

Official skills for maintaining consistent design and development standards across the Crabi platform.

## 📚 Available Skills

### Brand Guidelines

#### [`crabi-design-system-01.md`](./brand-guidelines/crabi-design-system-01.md)
Complete design system guidelines covering:
- **Color Palette**: Primary, semantic, and functional colors
- **Typography**: Font families, scales, and weights
- **Spacing System**: 4px-based spacing standards
- **Component Patterns**: Button states, cards, inputs, etc.
- **Transitions**: Animation timing and easing
- **Accessibility**: WCAG compliance standards
- **Development Standards**: TypeScript and CSS patterns

**Use this skill when**:
- Creating new UI components
- Styling existing components
- Ensuring visual consistency
- Implementing interactions
- Setting up color schemes
- Defining spacing and layout

## 🚀 How to Use

### In Development

Reference these guidelines when:
1. Creating new components
2. Styling elements
3. Implementing interactions
4. Choosing colors and typography
5. Setting spacing and layout

### With Claude Code

When working with Claude Code CLI, reference these skills:

```bash
# Example: Creating a new component
"Create a new Button component following crabi-design-system-01.md"

# Example: Styling a component
"Apply the primary button styles from crabi-design-system-01.md"

# Example: Ensuring consistency
"Review this component against crabi-design-system-01.md standards"
```

### Key Commands

```typescript
// Import design tokens
import { colors, spacing, typography } from '@/tokens';

// Use CSS Modules
import styles from './Component.module.css';

// Follow naming conventions
.componentName { }
.componentName--variant { }
.componentName__element { }
```

## 📖 Skill Structure

Each skill follows this format:

1. **Overview** - Purpose and keywords
2. **Brand Guidelines** - Core design tokens
3. **Component Patterns** - Reusable patterns
4. **Transitions & Animations** - Motion standards
5. **Development Standards** - Code patterns
6. **Accessibility** - A11y requirements
7. **Technical Details** - Implementation specifics
8. **Best Practices** - Do's and don'ts

## 🔄 Versioning

Skills use semantic versioning:
- **01, 02, 03...**: Major versions with breaking changes
- File naming: `skillname-##.md` (e.g., `crabi-design-system-01.md`)

## 📝 Related Documentation

- **[DESIGN_GUIDELINES.md](../DESIGN_GUIDELINES.md)** - Extended documentation
- **[DESIGN_SYSTEM_README.md](../DESIGN_SYSTEM_README.md)** - Quick start guide
- **[Component Examples](../src/components/ExampleComponent/)** - Reference implementations

## 🤝 Contributing

When updating skills:

1. **Create new version**: Don't modify existing versions
2. **Increment number**: `crabi-design-system-02.md`
3. **Document changes**: Add version history section
4. **Update this README**: Reference new version
5. **Deprecate old**: Mark previous version as deprecated if needed

### Updating Process

```bash
# 1. Create new version
cp crabi-design-system-01.md crabi-design-system-02.md

# 2. Make changes to new version
# 3. Update version history in file
# 4. Update this README
```

## 📦 Skill Categories

### Current Categories

- **brand-guidelines/**: Design system and visual identity
  - `crabi-design-system-01.md`

### Planned Categories

- **component-patterns/**: Specific component implementations
- **code-standards/**: TypeScript and React patterns
- **accessibility/**: A11y best practices
- **performance/**: Optimization guidelines

## 🎯 Quick Reference

### Most Used Values

```css
/* Colors */
--primary: #004EC9;
--text-primary: #525252;
--border: #E6E8EC;
--background: #FFFFFF;

/* Spacing */
--spacing-sm: 8px;
--spacing-md: 12px;
--spacing-lg: 16px;

/* Typography */
font-family: 'Poppins', sans-serif;
font-size: 13px;
font-weight: 500;

/* Transitions */
transition: all 0.15s ease;
```

## 📞 Support

For questions about skills:
- Check existing documentation
- Review component examples
- Consult the design team

---

**Last Updated**: 2026-01-28
**Maintained by**: Crabi Development Team
