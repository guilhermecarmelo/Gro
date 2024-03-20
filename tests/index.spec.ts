import { sum } from '../src'

describe('sum', () => {
	it('adds 1 + 2 to equal 3', () => {

		 for (let index = 0; index < 100; index++) {
			expect(sum(1, 2)).toBe(3)
		 }
	})
})
