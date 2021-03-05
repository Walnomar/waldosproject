import React from 'react'
import { Icon, Segment } from 'semantic-ui-react'

const IconExampleLink = () => (
  <div>
        <a href='https://www.instagram.com/valtterikayhko/'>
        <Icon style={{marginTop: '1em'}} padded size='big' circular link name='instagram' />
        </a>
        <a href='https://www.instagram.com/valtterikayhko/'>
        <Icon style={{marginTop: '1em'}} size='big' circular link name='twitter' />
        </a>
        <a href='https://www.linkedin.com/in/valtteri-käyhkö-849625148/'>
        <Icon style={{marginTop: '1em'}} size='big' circular link name='linkedin' />
        </a>
        <a href='https://github.com/Walnomar?tab=repositories/'>
        <Icon style={{marginTop: '1em'}} size='big' circular link name='github' />
        </a>
  </div>
)

export default IconExampleLink