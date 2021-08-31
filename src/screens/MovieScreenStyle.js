import Styled from 'styled-components';

export const Main = Styled.div`
$animation-speed: .3s;
$animation-function: ease-out;
$backdrop-color: rgba(0, 0, 0, .5);

@keyframes modal-video {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes modal-video-inner {
	from {
		transform: translate(0, 100px);
	}

	to {
		transform: translate(0, 0);
	}
}

.modal-video {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: $backdrop-color;
	z-index: 1000000;
	cursor: pointer;
	opacity: 1;
	animation-timing-function: $animation-function;
	animation-duration: $animation-speed;
	animation-name: modal-video;
	-webkit-transition: opacity $animation-speed $animation-function;
	-moz-transition: opacity $animation-speed $animation-function;
	-ms-transition: opacity $animation-speed $animation-function;
	-o-transition: opacity $animation-speed $animation-function;
	transition: opacity $animation-speed $animation-function;
}

.modal-video-effect-exit {
	opacity: 0;

	& .modal-video-movie-wrap {
		-webkit-transform: translate(0, 100px);
		-moz-transform: translate(0, 100px);
		-ms-transform: translate(0, 100px);
		-o-transform: translate(0, 100px);
		transform: translate(0, 100px);
	}
}

.modal-video-body {
	max-width: 960px;
	width: 100%;
	height: 100%;
	margin: 0 auto;
	padding: 0 10px;
    display: flex;
    justify-content: center;
	box-sizing: border-box;
}

.modal-video-inner {
	display: flex;
    justify-content: center;
    align-items: center;
	width: 100%;
	height: 100%;

    @media (orientation: landscape) {
        padding: 10px 60px;
        box-sizing: border-box;
    }
}

.modal-video-movie-wrap {
	width: 100%;
	height: 0;
	position: relative;
	padding-bottom: 56.25%;
	background-color: #333;
	animation-timing-function: $animation-function;
	animation-duration: $animation-speed;
	animation-name: modal-video-inner;
	-webkit-transform: translate(0, 0);
	-moz-transform: translate(0, 0);
	-ms-transform: translate(0, 0);
	-o-transform: translate(0, 0);
	transform: translate(0, 0);
	-webkit-transition: -webkit-transform $animation-speed $animation-function;
	-moz-transition: -moz-transform $animation-speed $animation-function;
	-ms-transition: -ms-transform $animation-speed $animation-function;
	-o-transition: -o-transform $animation-speed $animation-function;
	transition: transform $animation-speed $animation-function;

	& iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
}

.modal-video-close-btn {
	position: absolute;
	z-index: 2;
	top: -45px;
	right: 0px;
	display: inline-block;
	width: 35px;
	height: 35px;
	overflow: hidden;
	border: none;
	background: transparent;

    @media (orientation: landscape) {
        top: 0;
        right: -45px;
    }

	&:before {
		transform: rotate(45deg);
	}

	&:after {
		transform: rotate(-45deg);
	}

	&:before,
	&:after {
		content: '';
		position: absolute;
		height: 2px;
		width: 100%;
		top: 50%;
		left: 0;
		margin-top: -1px;
		background: #fff;
		border-radius: 5px;
		margin-top: -6px;
	}
}

`
