import type { Meta, StoryObj } from '@storybook/react';
import Label from '../components/label/Label';

const meta = {
  title: 'Text/Label',
  component: Label,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text', description: 'label의 내용' },
    htmlFor: { control: 'text', description: 'label의 for 속성' }
  }
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'label에 들어갈 내용',
    htmlFor: 'label for'
  }
};
