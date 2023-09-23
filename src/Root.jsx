import Navbar from './Components/Generic-Layout/Navbar/Navbar'
import PropTypes from 'prop-types'


const RootLayout = ({ children, setShowNav }) => {
    return (
        <div>
            <Navbar setShowNav={setShowNav} />
            {children}
        </div>
    );
};
RootLayout.propTypes = {
    children: PropTypes.element,
    setShowNav: PropTypes.func
}
export default RootLayout;