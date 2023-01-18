import {atom} from "recoil";

export const productDisplayState = atom({
	key: "productDisplayState",
	default: 3
});

export const productPerPageState = atom({
	key: "productPerPageState",
	default: 6
});

export const cartState = atom({
	key: "cartState",
	default: []
});

export const toastState = atom({
	key: "toastState",
	default: {
		status: false,
		type: 'success',
		message: ''
	}
});