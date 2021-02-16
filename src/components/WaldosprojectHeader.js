import React from 'react';
import {
    Button,
    Input,
    Header,
    Image,
    Segment
} from 'semantic-ui-react'

const WaldosprojectHeader = ({author, name}) => {
  return (
    <Segment basic inverted padded='very' vertical>
        <Header as='h1'>This is a header for {name}'s Waldosproject!</Header>
        <Image centered src={'VKlogo'} size={'medium'} />
        <Header as='h3'>Author: {author}</Header>
        <Input floated='left' focus placeholder='Search...'></Input>
        <Button floated='right' primary>Search</Button>
    </Segment>
  )
}

export default WaldosprojectHeader