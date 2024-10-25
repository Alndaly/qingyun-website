export default function Home() {
	return (
		<div className='flex items-center justify-center min-h-screen'>
			<main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
				<p className='text-5xl font-bold'>清韵科技</p>
				<p className='italic'>致力于让所有人的生活更加美好</p>
			</main>
			<footer className='absolute bottom-5 flex items-center flex-col justify-center opacity-50'>
				<p>Copyright © 2024 清韵科技（绍兴）有限公司</p>
				<a href='https://beian.miit.gov.cn/' target='_blank'>
					浙ICP备2024137385号-1
				</a>
			</footer>
		</div>
	);
}
