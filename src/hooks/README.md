# Custom Hooks Documentation

This directory contains reusable React hooks for the Dreamagination UNY project.

## 📁 Organization

We use a **flat structure** with descriptive naming for easy discovery and maintenance.

## 🎯 Available Hooks

### UI & Animation Hooks

#### `useScrollAnimation`
Hook for scroll-based animations using Intersection Observer API.

```tsx
import { useScrollAnimation } from '~/hooks';

const { elementRef, isVisible } = useScrollAnimation({
  threshold: 0.1,
  rootMargin: '0px',
  triggerOnce: true
});
```

#### `useToggle`
Hook for managing boolean state with toggle functionality.

```tsx
import { useToggle } from '~/hooks';

const { value, toggle, setTrue, setFalse } = useToggle(false);
```

### Responsive Design Hooks

#### `useMediaQuery`
Hook for responsive design and media query matching.

```tsx
import { useMediaQuery, useIsMobile, useIsTablet, useIsDesktop } from '~/hooks';

const isMobile = useIsMobile(); // <= 767px
const isTablet = useIsTablet(); // 768px - 1023px
const isDesktop = useIsDesktop(); // >= 1024px

// Custom query
const isLargeScreen = useMediaQuery('(min-width: 1200px)');
```

### Storage Hooks

#### `useLocalStorage`
Hook for managing localStorage with React state synchronization.

```tsx
import { useLocalStorage } from '~/hooks';

const [theme, setTheme] = useLocalStorage('theme', 'light');
const [userPrefs, setUserPrefs] = useLocalStorage('preferences', {
  language: 'en',
  notifications: true
});
```

## 🚀 Usage Examples

### Mobile Menu with useToggle
```tsx
import { useToggle } from '~/hooks';

function Header() {
  const { value: isMenuOpen, toggle: toggleMenu, setFalse: closeMenu } = useToggle();
  
  return (
    <header>
      <button onClick={toggleMenu}>
        {isMenuOpen ? 'Close' : 'Menu'}
      </button>
      {isMenuOpen && <nav>...</nav>}
    </header>
  );
}
```

### Responsive Components
```tsx
import { useIsMobile } from '~/hooks';

function ResponsiveComponent() {
  const isMobile = useIsMobile();
  
  return (
    <div>
      {isMobile ? <MobileView /> : <DesktopView />}
    </div>
  );
}
```

### Persistent Theme
```tsx
import { useLocalStorage } from '~/hooks';

function ThemeProvider() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  
  return (
    <div className={theme}>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
}
```

## 🎯 Best Practices

1. **Import from index**: Always import from `~/hooks` for consistency
2. **Descriptive naming**: Use descriptive destructuring names
3. **TypeScript**: All hooks are fully typed
4. **Performance**: Hooks are optimized with proper dependencies

## 🔄 Future Hooks

Consider adding these hooks as the project grows:

- `useDebounce` - For search inputs and API calls
- `useApi` - For data fetching with loading states
- `useForm` - For form validation and submission
- `useKeyboard` - For keyboard shortcuts
- `useIntersection` - For more complex scroll interactions
- `useClickOutside` - For modal/dropdown behaviors
