import Head from 'next/head';

import EmojiIcons from '../components/EmojiIcons';
import Layout from '../components/Layout';
import LoginForm from '../components/LoginForm/LoginForm';
import Logout from '../components/Logout';
import StyledContainer from '../components/StyledContainer';
import StyledTypography from '../components/StyledTypography';
import VideoForm from '../components/VideoForm/VideoForm';
import useStore from '../hooks/useStore';

export default function Create() {
	const loginSession = useStore(state => state.loginSession);
	return (
		<>
			<Head>
				<title key="title">Kiddio Explore</title>
				<meta
					key="description"
					name="description"
					content="Kiddio - the kids leaning app"
				/>
			</Head>
			<Layout>
				<StyledTypography variant="h1" decoration="borderBottom" position="relative">
					<EmojiIcons variant="ribbon" />
					{loginSession ? 'Add' : 'Login'}
				</StyledTypography>
				{loginSession ? (
					<>
						<EmojiIcons variant="lightBulb" />
						<StyledContainer variant="logout">
							<Logout />
						</StyledContainer>

						<VideoForm />
					</>
				) : (
					<>
						<StyledTypography variant="p" size="medium" component="h2" margin="bottom">
							You need to be logged in to use this page
						</StyledTypography>
						<LoginForm />
						<EmojiIcons variant="arrow" />
					</>
				)}
			</Layout>
		</>
	);
}
