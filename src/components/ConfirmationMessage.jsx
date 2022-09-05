import { useEffect } from 'react';

import useStore from '../hooks/useStore';

import StyledSumbitText from './StyledSubmitText';

export default function ConfirmationMessage() {
	const confirmationMessage = useStore(state => state.confirmationMessage);
	const setConfirmationMessage = useStore(state => state.setConfirmationMessage);

	useEffect(() => {
		if (confirmationMessage) {
			const confirmMessage = setTimeout(() => {
				setConfirmationMessage(null);
			}, 2000);

			return () => {
				clearTimeout(confirmMessage);
			};
		}
	}, [setConfirmationMessage, confirmationMessage]);

	return <>{confirmationMessage && <StyledSumbitText>{confirmationMessage}</StyledSumbitText>}</>;
}
