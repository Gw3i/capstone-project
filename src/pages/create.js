import Layout from '../components/Layout';
import LoginForm from '../components/LoginForm';
import Logout from '../components/Logout';
import StyledContainer from '../components/StyledContainer';
import StyledH1 from '../components/StyledH1';
import VideoForm from '../components/VideoForm/VideoForm';
import useStore from '../hooks/useStore';

export default function Create() {
	const loginSession = useStore(state => state.loginSession);
	return (
		<Layout>
			<StyledH1 variant="borderBottom">Add</StyledH1>
			{loginSession ? (
				<>
					<StyledContainer variant="logout">
						<Logout />
					</StyledContainer>

					<VideoForm />
				</>
			) : (
				<>
					<p>You need to be logged in to use this page</p>
					<LoginForm />
				</>
			)}
		</Layout>
	);
}
