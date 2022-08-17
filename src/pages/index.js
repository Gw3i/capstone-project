import StyledMain from '../components/StyledMain';
import VideoCard from '../components/VideoCard';
import VideoForm from '../components/VideoForm/VideoForm';

export default function HomePage() {
	return (
		<StyledMain>
			<VideoForm />
			<VideoCard />
		</StyledMain>
	);
}
