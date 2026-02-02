## Packages
framer-motion | Complex animations for page transitions and UI interactions
clsx | Utility for conditional class names (often used with tailwind-merge)
tailwind-merge | Merging tailwind classes safely

## Notes
- The app requires specific Google Fonts for the themes: Inter (Clean), Oswald (Bold), Playfair Display (Luxury).
- Theme engine relies on URL parameters: /preview/:slug/:theme
- Backend provides 'icon' as a string name from Lucide. We need to render these dynamically.
