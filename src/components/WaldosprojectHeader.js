import React from 'react';
import {
    Header,
    Image,
    Segment
} from 'semantic-ui-react'

const WaldosprojectHeader = ({author, name}) => {
  return (
    <Segment basic inverted padded='very' vertical>
        <Header as='h1'>This is a header for {name}'s Waldosproject!</Header>
        <Image centered src={'VKlogo'} size={'small'} />
        <Header as='h3'>Author: {author}</Header>
    </Segment>
  )
}

export default WaldosprojectHeader