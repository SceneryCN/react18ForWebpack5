const proxy = {
	'dev': {
		'/api': {
			target: 'https://xxxxxxxxx:xxxx',
			changeOrigin: true,
			'pathRewrite': { '^/api' : '' },
		},
	}
}

export {
	proxy
}
