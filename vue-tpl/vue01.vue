<template>
	<p>{{ greeting }} World!</p>
</template>

<script type="text/javascript">
	module.exports = {
		data: function() {
			return  {
				greeting: 'Hello'
			};
		}
	};
</script>

<!-- scoped 是组件化 CSS，局部使用 -->
<style scoped>
	p {
		font-size: 2em;
		text-align: center;
	}
</style>