import Link from 'next/link';

export default function Home() {
	return (
		<div className='flex items-center justify-center h-screen'>
			<main className='flex flex-col gap-5 row-start-2 items-center'>
				<p className='text-5xl font-bold'>清韵科技</p>
				<p className='italic'>致力于让所有人的生活更加美好</p>
				<Link
					href={'https://link.qingyon.com'}
					className='box-border group rounded ring-1 ring-inset dark:ring-white/10 dark:bg-white/5 ring-black/10 bg-black/5 p-5 flex flex-col cursor-pointer no-underline gap-2'>
					<p className='font-bold'>Link</p>
					<p className='text-sm'>
						链接知识与你我，让知识的分享更加简单，让分享知识的人越来越乐意分享。
					</p>
				</Link>
			</main>
			<footer className='text-xs absolute bottom-5 flex items-center flex-col justify-center opacity-50'>
				<p className='mb-1'>Copyright © 2024 清韵科技（绍兴）有限公司</p>
				<a href='https://beian.miit.gov.cn/' target='_blank'>
					浙ICP备2024137385号-1
				</a>
			</footer>
		</div>
	);
}
