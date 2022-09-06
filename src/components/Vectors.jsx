import StyledContainer from './StyledContainer';
import StyledMain from './StyledMain';
import Vector from './Vector';

export default function Vectors({ variant }) {
	if (variant === 'bigPurple') {
		return (
			<StyledMain>
				<StyledContainer variant="bigPurple">
					<Vector
						variant="bigPurple"
						size="777px"
						color="var(--accent-purple)"
						position="absolute"
					/>
				</StyledContainer>
			</StyledMain>
		);
	}
}
