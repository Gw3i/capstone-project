import Nav from './Nav/Nav';
import StyledMain from './StyledMain';

export default function Layout({ children }) {
	return (
		<>
			<StyledMain>{children}</StyledMain>
			<Nav />
		</>
	);
}
