# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/), and this project adheres to [Semantic Versioning](https://semver.org/).

## [1.3.2] - 2025-03-12

### Removed

- Removed exports and declarations for Form and its related components (excluding StatusMessage) due to unintended behavior when importing any component from the library as a result of useContext.

## [1.3.1] - 2025-03-03

### Updated

- Updated README.md with link to Storybook documentation.

## [1.3.0] - 2025-02-28

### Added

- Added new Form components, including Form, OutlineFieldset, OutlineFieldsetLegend, InputContainer, OutlineInput, FormButton, LoadingSpinner, and corresponding Storybook documentation.
- Added FormContext, allowing all Form components to maintain consistent styling easier
- Modified introduction.mdx, advising users of necessary TailwindCSS configuration
- Modified README.md

## [1.2.0] - 2025-02-25

### Added

- Added new StatusMessage component and corresponding Storybook entry.
- Updated README.md and introduction.mdx, fixing the instructions for tailwindcss configuration to make it more clear what the node_modules reference should be.

## [1.1.2] - 2025-01-27

### Fixed

- Removed existing /dist directory from previous npm build to remove from GitHub after .gitignore update.
- Rebuilt npm package for publishing to correct declaration errors.

## [1.1.1] - 2025-01-27

### Fixed

- Fixed issue with npm package build that caused new CardLink component to be omitted from final build.

## [1.1.0] - 2025-01-27

### Added

- Added CardLink component and corresponding stories file.
- Added Introduction.mdx for Storybook.

## [1.0.2] - 2025-01-24

### Updated

- Updated globals.css and added some documentation to existing stories.

## [1.0.1] - 2025-01-23

### Updated

- README.md updated to clarify instructions for installation, particularly as it relates to TailwindCSS.

## [1.0.0] - 2025-01-22

### Added

- Initial release with basic Storybook setup.
- Tailwind CSS integration.
- LayoutBand and Separator components added.
