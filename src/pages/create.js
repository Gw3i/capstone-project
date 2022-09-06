import Layout from '../components/Layout';
import LoginForm from '../components/LoginForm';
import Logout from '../components/Logout';
import StyledContainer from '../components/StyledContainer';
import Typography from '../components/Typography';
import VideoForm from '../components/VideoForm/VideoForm';
import useStore from '../hooks/useStore';

export default function Create() {
	const loginSession = useStore(state => state.loginSession);
	return (
		<Layout>
			<Typography variant="h1" decoration="borderBottom">
				Add
			</Typography>
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
