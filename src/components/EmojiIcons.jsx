import styled, { css } from 'styled-components';

import Arrow from '../../public/EmojiIcons/Arrow.js';
import Crown from '../../public/EmojiIcons/Crown.js';
import Highlight from '../../public/EmojiIcons/Highlight.js';
import Lens from '../../public/EmojiIcons/Lens.js';
import LightBulb from '../../public/EmojiIcons/LightBulb.js';
import Nice from '../../public/EmojiIcons/Nice.js';
import Ribbon from '../../public/EmojiIcons/Ribbon';
import SmileyHappy from '../../public/EmojiIcons/SmileyHappy.js';
import SmileySurprised from '../../public/EmojiIcons/SmileySurprised.js';
import Thunder from '../../public/EmojiIcons/Thunder.js';

export default function EmojiIcons({ variant }) {
	if (variant === 'smileyHappy') {
		return (
			<StyledEmojiContainer variant="smileyHappy">
				<SmileyHappy />
			</StyledEmojiContainer>
		);
	} else if (variant === 'crown') {
		return (
			<StyledEmojiContainer variant="crown">
				<Crown />
			</StyledEmojiContainer>
		);
	} else if (variant === 'highlight') {
		return (
			<StyledEmojiContainer variant="highlight">
				<Highlight />
			</StyledEmojiContainer>
		);
	} else if (variant === 'ribbon') {
		return (
			<StyledEmojiContainer variant="ribbon">
				<Ribbon />
			</StyledEmojiContainer>
		);
	} else if (variant === 'arrow') {
		return (
			<StyledEmojiContainer variant="arrow">
				<Arrow />
			</StyledEmojiContainer>
		);
	} else if (variant === 'smileySurprised') {
		return (
			<StyledEmojiContainer variant="smileySurprised">
				<SmileySurprised />
			</StyledEmojiContainer>
		);
	} else if (variant === 'highlightLogin') {
		return (
			<StyledEmojiContainer variant="highlightLogin">
				<Highlight />
			</StyledEmojiContainer>
		);
	} else if (variant === 'thunder') {
		return (
			<StyledEmojiContainer variant="thunder">
				<Thunder />
			</StyledEmojiContainer>
		);
	} else if (variant === 'lens') {
		return (
			<StyledEmojiContainer variant="lens">
				<Lens />
			</StyledEmojiContainer>
		);
	} else if (variant === 'lightBulb') {
		return (
			<StyledEmojiContainer variant="lightBulb">
				<LightBulb />
			</StyledEmojiContainer>
		);
	} else if (variant === 'nice') {
		return (
			<StyledEmojiContainer variant="nice">
				<Nice />
			</StyledEmojiContainer>
		);
	}
}

const StyledEmojiContainer = styled.div`
	${({ variant }) =>
		variant === 'smileyHappy' &&
		css`
			position: absolute;
			left: 0;
			top: -95%;
		`}
	${({ variant }) =>
		variant === 'ribbon' &&
		css`
			position: absolute;
			bottom: 65%;
			left: 90%;
		`}
		${({ variant }) =>
		variant === 'highlight' &&
		css`
			position: absolute;
			top: -17%;
			left: -16%;
		`}
		${({ variant }) =>
		variant === 'arrow' &&
		css`
			position: absolute;
			bottom: -9%;
			left: 55%;
			transform: rotate(17deg);
		`}
		${({ variant }) =>
		variant === 'smileySurprised' &&
		css`
			position: absolute;
			left: 0;
			top: -73%;
		`}
		${({ variant }) =>
		variant === 'highlightLogin' &&
		css`
			position: absolute;
			top: -12%;
			left: -16%;
		`}
		${({ variant }) =>
		variant === 'thunder' &&
		css`
			position: absolute;
			top: 97%;
			right: 2%;
		`}
		${({ variant }) =>
		variant === 'lens' &&
		css`
			position: absolute;
			top: -140%;
			right: -15%;
		`}
		${({ variant }) =>
		variant === 'lightBulb' &&
		css`
			position: absolute;
			top: 1%;
			left: 5%;
		`}
		${({ variant }) =>
		variant === 'nice' &&
		css`
			position: absolute;
			top: 30%;
			right: 10%;
		`}
`;
