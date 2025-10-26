# Navigation Specification Changes

## ADDED Requirements

### Requirement: Leadership Academy Route Accessibility
The system SHALL provide a working Leadership Academy page at `/leadership-academy` route that is accessible to all users (authenticated and non-authenticated).

#### Scenario: Authenticated user accesses leadership academy
- **WHEN** an authenticated user clicks "Leadership Academy" link from navigation or dashboard
- **THEN** the system SHALL navigate to `/leadership-academy` page
- **AND** the page SHALL render the LeadershipAcademyNew component
- **AND** the page SHALL NOT return a 404 error

#### Scenario: Non-authenticated user accesses leadership academy
- **WHEN** a non-authenticated user clicks "Leadership Academy" link from navigation
- **THEN** the system SHALL navigate to `/leadership-academy` page
- **AND** the page SHALL render the LeadershipAcademyNew component
- **AND** the page SHALL display appropriate call-to-action for sign up

### Requirement: Network Impact Quick Access
The system SHALL provide a direct link from the dashboard to view network impact metrics.

#### Scenario: User views network impact from dashboard
- **WHEN** an authenticated user is on the dashboard page
- **THEN** the system SHALL display a "View Network Impact" link or button in the toolkit section
- **AND** clicking the link SHALL navigate to `/impact` page
- **AND** the impact page SHALL display the user's network metrics and visualization

## MODIFIED Requirements

### Requirement: Navigation Link Consistency
The system SHALL ensure all navigation links point to valid routes and work correctly for authenticated users.

#### Scenario: All navigation links resolve correctly
- **WHEN** a user clicks any navigation link
- **THEN** the system SHALL navigate to the correct page
- **AND** the page SHALL render without 404 errors
- **AND** the page SHALL be accessible and interactive

#### Scenario: Mobile navigation works correctly
- **WHEN** a user opens mobile navigation menu
- **THEN** all links SHALL be visible and clickable
- **AND** clicking a link SHALL navigate to the correct page
- **AND** the mobile menu SHALL close after navigation

