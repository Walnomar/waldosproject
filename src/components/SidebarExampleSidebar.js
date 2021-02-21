import React from 'react'
import {
  Checkbox,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'


const SidebarExampleSidebar = () => {
    const [visible, setVisible] = React.useState(false)
  
    return (
      <Grid padded='vertically' columns={1}>
        <Grid.Column>
          <Checkbox
            checked={visible}
            label={{ children: <code>Näytä linkit</code> }}
            onChange={(e, data) => setVisible(data.checked)}
          />
        </Grid.Column>
  
        <Grid.Column>
          <Sidebar.Pushable as={Segment}>
            <Sidebar
              as={Menu}
              animation='scale down'
              icon='labeled'
              inverted
              onHide={() => setVisible(false)}
              vertical
              visible={visible}
              width='wide'
            >
              <Menu.Item as='a'>
                <Icon name='home' />
                Koti
              </Menu.Item>
              <Menu.Item as='a'>
                <Icon name='computer' />
                Työt
              </Menu.Item>
              <Menu.Item as='a'>
                <Icon name='code' />
                Koodit
              </Menu.Item>
              <Menu.Item as='a'>
                <Icon name='building' />
                Koulut
              </Menu.Item>
            </Sidebar>
  
            <Sidebar.Pusher>
            <Segment>
            <Container text>
              <Header as='h2'>Lorem</Header>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
                dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
                viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
                dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
                viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
              </p>
              </Container>
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Grid.Column>
      </Grid>
    )
  }
  
  export default SidebarExampleSidebar