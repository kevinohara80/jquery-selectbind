require.config
	paths:
		jquery: "../components/jquery/jquery.min"
		selectBind: "../components/jquery.selectBind/jquery.selectBind"
	shim:
		selectBind: ['jquery']

require ['jquery', 'selectBind'], ($, selectBind) ->
	$ ->
		$('[data-selectBind=child]').selectBind '[data-selectBind=parent]',
			one: [
				value: "val1"
				text: "This is Value 1"
			,
				value: "val2"
				text: "This is Value 2"
			,
				value: "val3"
				text: "This is Value 3"
			]
			two: [
				value: "val2"
				text: "This is Value 2"
			]
