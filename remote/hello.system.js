System.register(['react'], (function (exports) {
	'use strict';
	var React;
	return {
		setters: [function (module) {
			React = module["default"];
		}],
		execute: (function () {

			const Hello = exports('Hello', () => /*#__PURE__*/React.createElement("div", null, "Hello from remote"));

		})
	};
}));
