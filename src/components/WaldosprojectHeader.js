import React from 'react';
import {
    Icon,
    Image,
    Segment
} from 'semantic-ui-react'
import IconExampleLink from './IconExampleLink';

const WaldosprojectHeader = ({author, name}) => {
  return (
    <Segment content='Responsive Segment' basic inverted padded='very' vertical>
        <Image centered src={'VKlogo'} size={'big'} />
        <IconExampleLink/>
    </Segment>
  )
}

export default WaldosprojectHeader