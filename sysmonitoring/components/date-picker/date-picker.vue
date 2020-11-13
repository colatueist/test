<template>
	<picker-transition ref="pop" :height="500" :maskVal="0.5">
		<view class="btn">
			<view class="btn_item" style="color: #999;" @click="popDown">取消</view>
			<view class="btn_item" style="color: #5a6175;" @click="bindSure">确认</view>
		</view>
		<picker-view class="picker" indicator-style="height: ${Math.round(uni.getSystemInfoSync().screenWidth/(750/100))}px;border-top: 1px solid #eee;border-bottom: 1px solid #eee;"
		 :value="value" @change="bindChange">
			<picker-view-column>
				<view class="item" v-for="(item, i) in dates" :key="i">{{item}}</view>
			</picker-view-column>
		</picker-view>
	</picker-transition>
</template>

<script>
	export default {
		data() {
			return {
				dates: ['5分钟', '15分钟', '30分钟', '1小时', '6小时', '12小时'],
				value: [0],
			};
		},
		watch: {
			value: {
				handler(nVal, oVal) {
					this.initList(nVal, oVal)
				},
				immediate: true
			}
		},
		methods: {
			popUp() {
				this.$refs['pop'].show()
			},
			bindChange(e) {
				this.value = e.detail.value
			},
			popDown() {
				this.$refs['pop'].hide()
			},
			bindSure() {
				this.popDown()
				const data = Object.create(null)
				var index = this.value[0]
				data.value = this.dates[index]
				this.$emit('up-data', data)
			},
			initList(newVal, oldVal) {
				// console.log(newVal[0])
				// console.log(oldVal[0])
			}
		}
	}
</script>

<style>
	.btn {
		height: 80px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0px 30px 0px 30px;
	}

	.btn_item {
		font-size: 30px;
	}

	.picker {
		width: 100%;
		height: 400px;
	}

	.item {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		font-size: 30px;
	}
</style>
