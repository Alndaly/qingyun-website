'use client';
import CanvasBackground from '@/components/canvas-background';
import Link from 'next/link';

export default function Home() {
	return (
		<div className='flex items-center justify-center h-screen bg-blue-500/10'>
			<div className='fixed -z-0 left-0 top-0 w-full h-full'>
				<CanvasBackground />
			</div>
			<div className='fixed z-0 left-0 top-0 w-full h-full backdrop-blur-3xl' />
			<div className='fixed z-0 left-0 top-0 w-full h-full backdrop-blur-3xl' />

			<main className='flex flex-col gap-5 row-start-2 items-center z-10 text-white'>
				<p className='text-5xl font-bold'>清韵科技</p>
				<p className='italic'>致力于让所有人的生活更加美好</p>
				<Link
					href={'https://revornix.com'}
					className='min-w-80 box-border group rounded p-5 flex flex-col cursor-pointer no-underline gap-2 bg-white/25'>
					<p className='font-bold'>Revornix</p>
					<p className='text-sm'>AI时代的资讯管理工具。</p>
				</Link>
			</main>
			<footer className='text-white text-xs absolute bottom-5 flex items-center flex-col justify-center opacity-50'>
				<p className='mb-1'>Copyright © 2024 清韵科技（绍兴）有限公司</p>
				<a href='https://beian.miit.gov.cn/' target='_blank'>
					浙ICP备2024137385号
				</a>
			</footer>
		</div>
	);
}
