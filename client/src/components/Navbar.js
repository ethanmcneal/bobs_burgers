
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const Navbar = () => {
    
    return (
        
        <Menu>
        <Link to='/'>
            <Menu.Item>
                Foods
            </Menu.Item>
            </Link>
            <Link to='/cooks'>
            <Menu.Item>
                Cooks
            </Menu.Item>

        </Link>
    
        </Menu>
        
    )
}

export default Navbar