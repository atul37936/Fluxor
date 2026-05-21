/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface FeatureItem {
  title: string;
  description: string;
  iconName: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  metricCode: string;
  label: string;
  colorTheme: 'warm' | 'maroon';
}
