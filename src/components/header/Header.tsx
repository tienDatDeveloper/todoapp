import { Link } from 'react-router-dom'
import './Header.css'


const Header = () => {
    return (
        <>
            <div className='header'>
                <h1>TODO APP</h1>
                <ul className='menu'>
                    <li><Link to='/todo'>Feature todo</Link></li>
                    <li><Link to='/about-me'>Infor Student</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Header