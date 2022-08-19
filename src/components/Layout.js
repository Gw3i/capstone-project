import Header from './Header';
import Nav from './Nav';
import StyledMain from './StyledMain';

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<StyledMain>{children}</StyledMain>
			<Nav />
		</>
	);
}
