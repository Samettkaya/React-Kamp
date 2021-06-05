import React from 'react'
import { Menu, Message } from 'semantic-ui-react'
export default function Categories() {
    return (
        <div>
        <Menu vertical>
          <Menu.Item href='//google.com' target='_blank'>
            Visit Google
          </Menu.Item>
          <Menu.Item link>Link via prop</Menu.Item>
          <Menu.Item >Javascript Link</Menu.Item>
        </Menu>

       
      </div>
    )
}
