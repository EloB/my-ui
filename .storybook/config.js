import { configure } from '@storybook/react';

const requireContext = require.context('../src', true, /.story.jsx$/);

configure(() => requireContext.keys().forEach(requireContext), module);
