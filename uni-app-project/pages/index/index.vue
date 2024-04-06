<template>
	<swiper class="banner" indicator-dots circular :autoplay="false">
		<swiper-item v-for="(item,index) in picture" :key="item.id">
			<img @tap="onPreviewImage(item.url)" :src="item.url" alt="">
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		data() {
			return {
				picture:[
					{id:'1', url:"https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_1.jpg"},
					{id:'1', url:"https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_2.jpg"},
					{id:'1', url:"https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_3.jpg"},
					{id:'1', url:"https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_4.jpg"},
					{id:'1', url:"https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_5.jpg"},
				]
			}
		},
		onLoad() {

		},
		methods: {
			onPreviewImage(url){
				uni.previewImage({
					urls:this.picture.map(v=>v.url),
					current:url
				})
			}
		}
	}
</script>

<style>
	.banner,
	.banner image
	{
		width: 750rpx;
		height: 750rpx;
	}
</style>
