export default function LinkedinIcon(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={props.size}
			height={props.size}
			viewBox="0 0 256 256"
			{...props}
		>
			<title>linkedin</title>
			<path
				fill="#fff"
				strokeMiterlimit={10}
				d="M41 4H9C6.24 4 4 6.24 4 9v32c0 2.76 2.24 5 5 5h32c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5zM17 20v19h-6V20zm-6-5.53c0-1.4 1.2-2.47 3-2.47s2.93 1.07 3 2.47c0 1.4-1.12 2.53-3 2.53-1.8 0-3-1.13-3-2.53zM39 39h-6V29c0-2-1-4-3.5-4.04h-.08C27 24.96 26 27.02 26 29v10h-6V20h6v2.56S27.93 20 31.81 20c3.97 0 7.19 2.73 7.19 8.26z"
				fontFamily="none"
				fontSize="none"
				fontWeight="none"
				style={{
					mixBlendMode: "normal",
				}}
				textAnchor="none"
				transform="scale(5.12)"
			/>
		</svg>
	);
}