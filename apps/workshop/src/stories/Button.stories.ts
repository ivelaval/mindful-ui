import type { Meta, StoryObj } from '@storybook/react';
import '@mindfului/button.react/lib/Button.variables.css';
import '@mindfului/button.react/lib/Button.css';
import Button, { IButton } from '@mindfului/button.react';

const meta = {
  title: '@mindfului/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    activateLibraryClasses: true,
    children: 'Hello world',
    className: '',
    style: {},
  } as IButton,
};
