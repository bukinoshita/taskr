import test from 'ava'
import React from 'react'
import render from 'react-test-renderer'
import Content from './renderer/components/content'

test('Content component', t => {
  const tree = render
    .create(
      <Content>
        <h1>Hi</h1>
      </Content>
    )
    .toJSON()
  t.snapshot(tree)
})
