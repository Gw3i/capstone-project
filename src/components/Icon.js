const icons = {
	homeFilled:
		'M26.061 3.78597C25.504 3.25936 24.7665 2.96594 24 2.96594C23.2335 2.96594 22.496 3.25936 21.939 3.78597L7.407 17.52C6.96205 17.941 6.60775 18.4485 6.36581 19.0113C6.12387 19.5741 5.9994 20.1804 6 20.793V37.503C6.0008 38.6959 6.47525 39.8397 7.31908 40.683C8.16291 41.5263 9.30705 42 10.5 42H15C16.1935 42 17.3381 41.5259 18.182 40.6819C19.0259 39.838 19.5 38.6934 19.5 37.5V30C19.5 29.6021 19.658 29.2206 19.9393 28.9393C20.2206 28.658 20.6022 28.5 21 28.5H27C27.3978 28.5 27.7794 28.658 28.0607 28.9393C28.342 29.2206 28.5 29.6021 28.5 30V37.5C28.5 38.6934 28.9741 39.838 29.818 40.6819C30.6619 41.5259 31.8065 42 33 42H37.5C38.6935 42 39.8381 41.5259 40.682 40.6819C41.5259 39.838 42 38.6934 42 37.5V20.79C41.9998 20.1777 41.8747 19.5718 41.6322 19.0096C41.3898 18.4473 41.0351 17.9404 40.59 17.52L26.061 3.77997V3.78597Z',
	home: 'M21.939 3.78597C22.496 3.25936 23.2335 2.96594 24 2.96594C24.7665 2.96594 25.504 3.25936 26.061 3.78597L40.593 17.523C41.493 18.372 42 19.557 42 20.793V37.503C42 38.6964 41.5259 39.841 40.682 40.685C39.8381 41.5289 38.6935 42.003 37.5 42.003H31.5C30.9088 42.003 30.3234 41.8865 29.7772 41.6601C29.2311 41.4338 28.7349 41.1021 28.317 40.6839C27.8991 40.2657 27.5677 39.7693 27.3417 39.223C27.1157 38.6767 26.9996 38.0912 27 37.5V30C27 29.6021 26.842 29.2206 26.5607 28.9393C26.2794 28.658 25.8978 28.5 25.5 28.5H22.5C22.1022 28.5 21.7206 28.658 21.4393 28.9393C21.158 29.2206 21 29.6021 21 30V37.5C21 38.6934 20.5259 39.838 19.682 40.682C18.8381 41.5259 17.6935 42 16.5 42H10.5C9.30653 42 8.16193 41.5259 7.31802 40.682C6.47411 39.838 6 38.6934 6 37.5V20.79C6 19.554 6.51 18.369 7.41 17.52L21.939 3.77997V3.78597ZM24 5.96397L9.468 19.704C9.32047 19.8438 9.20292 20.0122 9.12246 20.1989C9.04201 20.3856 9.00035 20.5867 9 20.79V37.5C9 37.8978 9.15804 38.2793 9.43934 38.5606C9.72064 38.8419 10.1022 39 10.5 39H16.5C16.8978 39 17.2794 38.8419 17.5607 38.5606C17.842 38.2793 18 37.8978 18 37.5V30C18 28.8065 18.4741 27.6619 19.318 26.818C20.1619 25.9741 21.3065 25.5 22.5 25.5H25.5C26.6935 25.5 27.8381 25.9741 28.682 26.818C29.5259 27.6619 30 28.8065 30 30V37.5C30 37.8978 30.158 38.2793 30.4393 38.5606C30.7206 38.8419 31.1022 39 31.5 39H37.5C37.8978 39 38.2794 38.8419 38.5607 38.5606C38.842 38.2793 39 37.8978 39 37.5V20.79C39.0001 20.5862 38.9586 20.3845 38.8781 20.1973C38.7977 20.0101 38.6799 19.8412 38.532 19.701L24 5.96397Z',
	createFilled:
		'M40.7952 16.8V21.6047C39.0794 21.6819 37.4549 22.3996 36.2424 23.616L24.6504 35.2055C23.6688 36.1895 22.9704 37.4207 22.6344 38.7695L22.128 40.7976H13.2C11.6087 40.7976 10.0826 40.1654 8.95737 39.0402C7.83215 37.915 7.20001 36.3888 7.20001 34.7975V16.7976H40.7952V16.8ZM34.7952 7.19995C36.3865 7.19995 37.9126 7.83209 39.0379 8.95731C40.1631 10.0825 40.7952 11.6087 40.7952 13.2V14.4H7.20001V13.2C7.20001 11.6087 7.83215 10.0825 8.95737 8.95731C10.0826 7.83209 11.6087 7.19995 13.2 7.19995H34.7976H34.7952ZM26.3472 36.9024L37.9392 25.3103C38.7813 24.4689 39.9232 23.9964 41.1137 23.9968C42.3042 23.9973 43.4457 24.4706 44.2872 25.3127C45.1287 26.1549 45.6012 27.2968 45.6007 28.4872C45.6003 29.6777 45.1269 30.8193 44.2848 31.6608L32.6952 43.248C32.0199 43.9236 31.1738 44.403 30.2472 44.6351L26.652 45.5351C26.2944 45.6239 25.92 45.6187 25.5651 45.5199C25.2101 45.4212 24.8867 45.2324 24.6263 44.9717C24.366 44.7111 24.1774 44.3876 24.079 44.0325C23.9806 43.6775 23.9757 43.303 24.0648 42.9455L24.9624 39.3503C25.1952 38.4239 25.6728 37.5768 26.3496 36.9024H26.3472Z',
	create: 'M34.494 6C36.4831 6 38.3908 6.79018 39.7973 8.1967C41.2038 9.60322 41.994 11.5109 41.994 13.5V18H40.629C40.4221 17.9917 40.2149 17.9917 40.008 18H9V34.494C9 35.6875 9.47411 36.8321 10.318 37.676C11.1619 38.5199 12.3065 38.994 13.5 38.994H18.888L18.138 41.994H13.5C11.5109 41.994 9.60322 41.2038 8.1967 39.7973C6.79018 38.3908 6 36.4831 6 34.494V13.5C6 11.5109 6.79018 9.60322 8.1967 8.1967C9.60322 6.79018 11.5109 6 13.5 6H34.494V6ZM34.494 9H13.5C12.3065 9 11.1619 9.47411 10.318 10.318C9.47411 11.1619 9 12.3065 9 13.5V15H38.994V13.5C38.994 12.3065 38.5199 11.1619 37.676 10.318C36.8321 9.47411 35.6875 9 34.494 9ZM40.074 20.997C40.297 20.9851 40.5206 20.9891 40.743 21.009C41.6291 21.0893 42.4739 21.4205 43.1785 21.9639C43.8831 22.5072 44.4181 23.2401 44.721 24.0767C45.0239 24.9132 45.0821 25.8188 44.8887 26.6873C44.6952 27.5557 44.2583 28.351 43.629 28.98L30.765 41.844C29.6973 42.9113 28.3596 43.6683 26.895 44.034L23.265 44.943C22.9586 45.0196 22.6376 45.0157 22.3331 44.9315C22.0287 44.8473 21.7513 44.6858 21.5278 44.4626C21.3043 44.2394 21.1424 43.9622 21.0578 43.6578C20.9732 43.3535 20.9688 43.0325 21.045 42.726L21.954 39.096L21.981 38.994C22.356 37.5681 23.1035 36.2676 24.147 35.226L37.008 22.362C37.8257 21.5412 38.9199 21.0546 40.077 20.997H40.074Z',
};

const Icon = ({ variant, size = '48px', color = 'currentColor', fill = 'black' }) => {
	return (
		<svg style={{ width: size, color: color, fill: fill }} viewBox="0 0 48 48">
			<path fill={color} d={icons[variant]} />
		</svg>
	);
};

export default Icon;
