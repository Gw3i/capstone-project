const vectors = {
	bigPurple:
		'M425.632 333.957C606.656 282.322 695.968 315.752 776.898 320.462L751.763 210.206C678.698 183.223 572.577 136.296 385.058 111.906C216.49 89.9806 174.174 29.6382 123.095 0.257257L-0.000141523 348.84C130.418 384.969 317.762 364.726 425.632 333.957Z',
	bigYellow:
		'M220.063 191.81C177.877 248.531 118.664 299.148 42.7654 218.752C-21.3896 132.9 -7.3399 80.2163 45.2841 30.5359C97.908 -19.1446 162.057 -0.865298 230.356 41.6543C286.911 89.6294 238.429 157.578 220.063 191.81Z',
	smallYellow:
		'M109.671 41.5524C124.01 71.9304 131.981 108.08 81.2931 121.91C30.9458 129.596 12.0026 111.917 2.95018 78.7385C-6.10225 45.5602 15.9153 22.7569 49.0235 3.6381C81.7911 -9.33644 99.4288 26.193 109.671 41.5524Z',
};

const Vector = ({
	variant,
	size,
	color = 'currentColor',
	fill = 'var(--accent-yellow)',
	position,
	top,
	overflow = 'hidden',
}) => {
	return (
		<svg
			style={{
				width: size,
				color: color,
				fill: fill,
				position: position,
				top: top,
				overflow: overflow,
			}}
			viewBox="0 0 800 400"
		>
			<path fill={color} d={vectors[variant]} />
		</svg>
	);
};

export default Vector;
