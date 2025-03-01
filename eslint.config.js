export default [
	{
    "env": {
			"browser": true,
			"node": true,
			"commonjs": true,
			"es6": true
    },
    "extends": "eslint:recommended",
    "rules": {
			"strict": 2,
			"indent": 0,
			"linebreak-style": 0,
			"quotes": 0,
			"semi": 0,
			"no-cond-assign": 1,
			"no-constant-condition": 1,
			"no-duplicate-case": 1,
			"no-empty": 1,
			"no-ex-assign": 1,
			"no-extra-boolean-cast": 1,
			"no-extra-semi": 1,
			"no-fallthrough": 1,
			"no-func-assign": 1,
			"no-global-assign": 1,
			"no-implicit-globals": 2,
			"no-inner-declarations": ["error", "functions"],
			"no-irregular-whitespace": 2,
			"no-loop-func": 1,
			"no-multi-str": 1,
			"no-mixed-spaces-and-tabs": 1,
			"no-proto": 1,
			"no-sequences": 1,
			"no-throw-literal": 1,
			"no-unmodified-loop-condition": 1,
			"no-useless-call": 1,
			"no-void": 1,
			"no-with": 2,
			"wrap-iife": 1,
			"no-redeclare": 1,
			"no-unused-vars": ["error", { "vars": "all", "args": "none" }],
			"no-sparse-arrays": 1
    }
	}
]
