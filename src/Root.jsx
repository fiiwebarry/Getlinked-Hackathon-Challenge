import Navbar from './Components/Generic-Layout/Navbar/Navbar'
import PropTypes from 'prop-types'


const RootLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
};
RootLayout.propTypes = {
    children: PropTypes.element
}
export default RootLayout;