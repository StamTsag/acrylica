<script lang="ts">
	import Keypad from '../calculator/Keypad.svelte';

	let numberInput = $state('');

	let total = $derived.by(() => {
		if (numberInput !== '' && !isNaN(Number(numberInput.slice(-1))) && numberInput != result()) {
			return result();
		}
		return '';
	});

	function addToEquation(value: number | string) {
		numberInput += value;
	}

	function clear() {
		numberInput = '';
	}

	function calculate() {
		if (numberInput !== '') {
			numberInput = result().toString();
		}
	}

	let result = () => {
		if (!isNaN(Number(numberInput.slice(-1)))) {
			return eval(numberInput);
		}

		return eval(numberInput.slice(0, -1));
	};
</script>

<div class="min-w-[300px]">
	<div class="mb-3 mr-2 mt-3 h-[60px] text-right">
		<div class="tracking-[0.075rem] opacity-50">{numberInput}</div>

		{#if total !== 0}
			<h1 class="text-2xl font-semibold">{total}</h1>
		{/if}
	</div>

	<div class="input-pad">
		<Keypad expand={3} clicked={clear}>C</Keypad>
		<Keypad clicked={() => addToEquation('/')}>÷</Keypad>

		<Keypad clicked={() => addToEquation(9)}>9</Keypad>
		<Keypad clicked={() => addToEquation(8)}>8</Keypad>
		<Keypad clicked={() => addToEquation(7)}>7</Keypad>

		<Keypad clicked={() => addToEquation('*')}>x</Keypad>
		<Keypad clicked={() => addToEquation(6)}>6</Keypad>
		<Keypad clicked={() => addToEquation(5)}>5</Keypad>
		<Keypad clicked={() => addToEquation(4)}>4</Keypad>

		<Keypad clicked={() => addToEquation('-')}>-</Keypad>
		<Keypad clicked={() => addToEquation(3)}>3</Keypad>
		<Keypad clicked={() => addToEquation(2)}>2</Keypad>
		<Keypad clicked={() => addToEquation(1)}>1</Keypad>

		<Keypad clicked={() => addToEquation('+')}>+</Keypad>
		<Keypad expand={3} clicked={() => addToEquation(0)}>0</Keypad>

		<Keypad clicked={() => calculate()}>=</Keypad>
	</div>
</div>

<style>
	.input-pad {
		display: grid;
		grid-template-columns: repeat(4, 25%);
		grid-template-rows: repeat(5, 20%);
		grid-column-gap: 0;
		grid-row-gap: 0;
	}
</style>
