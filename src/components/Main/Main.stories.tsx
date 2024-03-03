import { Meta, StoryObj } from '@storybook/react'

import { Main } from '.'

export default {
  component: Main,
  title: 'Components/Main',
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: StoryObj = {}

export const Basic: StoryObj = {
  args: {
    title: 'My new title'
  }
}
