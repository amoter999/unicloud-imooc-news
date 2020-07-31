<template>
	<view class="tab-scroll">
		<scroll-view scroll-x="true">
			<view class="bigTabCont">
				<view class="tabScrollBox">
					<view v-for="(item,index) in labelList" class="tabItem" @click="clickThisTab(item._id)" :key="item.id">{{item.name}}</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: 'tab-scroll',
		props: {
			labelList: Array,
			default: function() {
				return []
			}
		},

		data() {
			return {

			};
		},
		onLoad() {

		},
		methods: {
			clickThisTab(id){
				this.$emit("changeTab",id);
			}
		}
	}
</script>

<style lang="scss">
	.tab-scroll {
		.bigTabCont {
			
			.tabScrollBox {
				display: flex;
				align-items: center;
				height: 45px;
				box-sizing: border-box;

				.tabItem {
					font-size: 14px;
					flex-shrink: 0;
					box-sizing: border-box;
					padding: 4px 15px;
				}
			}

		}
	}
</style>
